# Система локализации (i18n)

Эта папка содержит файлы переводов для поддержки многоязычности сайта.

## Структура

- `en.json` - переводы на английский язык
- `pl.json` - переводы на польский язык

## Формат файлов

Файлы используют формат JSON с вложенными объектами для организации ключей:

```json
{
  "common": {
    "language": "Language",
    "quickOrder": "Quick Order"
  },
  "navigation": {
    "home": "Home",
    "about": "About Us"
  }
}
```

## Использование в коде

После инициализации i18n (в `js/app.js`), используйте функцию `t()` для получения переводов:

```javascript
// Получить простой перевод
window.i18n.t('navigation.home') // Вернет "Home" (EN) или "Start" (PL)

// Получить вложенный перевод
window.i18n.t('footer.companyName') // Вернет "Regent Partners Sp. z o.o."

// Перевод с параметрами (если нужно)
window.i18n.t('welcome', { name: 'John' }) // Для ключа "Welcome, {name}"
```

## Добавление новых переводов

1. Откройте соответствующий файл (`en.json` или `pl.json`)
2. Добавьте новый ключ в нужную секцию (или создайте новую секцию)
3. Добавьте перевод на оба языка
4. Используйте новый ключ в коде через `window.i18n.t('your.key')`

## Пример добавления

Если нужно добавить новый текст для страницы "О нас":

1. В `en.json`:
```json
{
  "pages": {
    "about": {
      "title": "About Us",
      "newSection": "This is new section"  // <-- добавляем
    }
  }
}
```

2. В `pl.json`:
```json
{
  "pages": {
    "about": {
      "title": "O nas",
      "newSection": "To jest nowa sekcja"  // <-- добавляем перевод
    }
  }
}
```

3. В HTML или JS:
```html
<h2 data-i18n="pages.about.newSection"></h2>
```
или
```javascript
const text = window.i18n.t('pages.about.newSection');
```

