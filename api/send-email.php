<?php
/**
 * Email Sending Handler for Regent Partners Website
 * Handles form submissions from Contact Form and Quick Order Form
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$to = 'office@regentpartners.pl';
$from = 'noreply@regentpartners.pl';
$siteName = 'Regent Partners';

// Get JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check if JSON is valid
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// Honeypot check (spam protection)
if (!empty($data['website'])) {
    // This is a bot, silently fail
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent']);
    exit;
}

// Determine form type
$formType = $data['formType'] ?? 'contact';

// Validate required fields based on form type
$errors = [];

if ($formType === 'contact') {
    // Contact Form validation
    if (empty($data['name'])) {
        $errors[] = 'Name is required';
    }
    if (empty($data['email'])) {
        $errors[] = 'Email is required';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    if (empty($data['message'])) {
        $errors[] = 'Message is required';
    }
    if (empty($data['gdprConsent']) || $data['gdprConsent'] !== true) {
        $errors[] = 'GDPR consent is required';
    }
} elseif ($formType === 'quickOrder') {
    // Quick Order Form validation
    if (empty($data['firstName'])) {
        $errors[] = 'First name is required';
    }
    if (empty($data['lastName'])) {
        $errors[] = 'Last name is required';
    }
    if (empty($data['email'])) {
        $errors[] = 'Email is required';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    if (empty($data['phone'])) {
        $errors[] = 'Phone is required';
    }
    if (empty($data['company'])) {
        $errors[] = 'Company is required';
    }
    if (empty($data['country'])) {
        $errors[] = 'Country is required';
    }
    if (empty($data['employeesCount'])) {
        $errors[] = 'Number of employees is required';
    }
    if (empty($data['gdprConsent']) || $data['gdprConsent'] !== true) {
        $errors[] = 'GDPR consent is required';
    }
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit;
}

// Sanitize input data
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

$sanitized = sanitizeInput($data);

// Prepare email content
if ($formType === 'contact') {
    $subject = "New Contact Form Submission from {$siteName}";
    $message = "New contact form submission from {$siteName} website:\n\n";
    $message .= "Name: " . ($sanitized['name'] ?? '') . "\n";
    $message .= "Email: " . ($sanitized['email'] ?? '') . "\n";
    $message .= "Company: " . ($sanitized['company'] ?? 'N/A') . "\n";
    $message .= "Message:\n" . ($sanitized['message'] ?? '') . "\n";
    $message .= "\n---\n";
    $message .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $message .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
} else {
    // Quick Order Form
    $subject = "New Quick Personnel Order from {$siteName}";
    $message = "New quick personnel order from {$siteName} website:\n\n";
    $message .= "First Name: " . ($sanitized['firstName'] ?? '') . "\n";
    $message .= "Last Name: " . ($sanitized['lastName'] ?? '') . "\n";
    $message .= "Email: " . ($sanitized['email'] ?? '') . "\n";
    $message .= "Phone: " . ($sanitized['phone'] ?? '') . "\n";
    $message .= "Company: " . ($sanitized['company'] ?? '') . "\n";
    $message .= "Country: " . ($sanitized['country'] ?? '') . "\n";
    $message .= "Number of Employees Needed: " . ($sanitized['employeesCount'] ?? '') . "\n";
    if (!empty($sanitized['comments'])) {
        $message .= "Additional Comments:\n" . ($sanitized['comments'] ?? '') . "\n";
    }
    $message .= "\n---\n";
    $message .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $message .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
}

// Email headers
$headers = [];
$headers[] = "From: {$siteName} <{$from}>";
$headers[] = "Reply-To: " . ($sanitized['email'] ?? $from);
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "Content-Transfer-Encoding: 8bit";

// Send email
$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
?>

