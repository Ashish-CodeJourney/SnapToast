
# SnapToast

SnapToast is a simple JavaScript library for creating toast notifications. It provides an easy way to display success, warning, error, and info messages to users.

## Installation

Include the following files in your HTML:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

## Usage

Add the following HTML structure to your page:

```html
<div class="container">
    <h1>Toast Notification Demo</h1>
    <div class="button-group">
        <button id="success-btn">Success Toast</button>
        <button id="warning-btn">Warning Toast</button>
        <button id="error-btn">Error Toast</button>
        <button id="info-btn">Info Toast</button>
    </div>
</div>
<div id="toast-container"></div>
```

Initialize the toast notifications by adding the following script:

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        initToastButtons();
    });
</script>
```

## License

This project is licensed under the MIT License.

## Author

Made with ❤️ by [@Ashish-CodeJourney](https://github.com/Ashish-CodeJourney)
