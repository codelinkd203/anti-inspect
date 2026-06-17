# Anti-Inspect

Attempt to discourage casual inspection of your website by blocking common shortcuts, context menus, DevTools detection methods, debugger traps, and automatic responses when inspection is detected.

⚠️ **Important:** Nothing can fully prevent inspection. Users control their browser, can disable JavaScript, modify page code, view network requests, use browser extensions, or inspect content before scripts run. This project only raises the effort required for casual users.

## Features

* Blocks right-click menus
* Blocks F12
* Blocks Ctrl+Shift+I
* Blocks Ctrl+Shift+J
* Blocks Ctrl+Shift+C
* Blocks Ctrl+U
* Blocks many other common inspection shortcuts
* Detects DevTools size changes
* Debugger traps
* Clears page content when triggered
* Attempts to close the window
* Attempts to navigate back
* Redirects to `about:blank`
* Visibility-change detection
* Focus-loss detection
* DevTools timing detection
* Console protection hooks
* Mobile long-press blocking
* Text selection blocking
* Drag-and-drop blocking

## Installation

### jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/gh/codelinkd203/anti-inspect@latest/index.min.js"></script>
```

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/gh/codelinkd203/anti-inspect@latest/anti-inspect.min.js"></script>
</head>
<body>
    <h1>Protected Page</h1>
</body>
</html>
```

## Configuration

```js
AntiInspect.init({
    closeWindow: true,
    historyBack: true,
    redirectBlank: true,
    debuggerLoop: true,
    blockContextMenu: true,
    blockSelection: true,
    blockDrag: true,
    detectDevtools: true,
    detectResize: true,
    detectFocusLoss: true,
    detectVisibilityChange: true
});
```

## What Happens When Inspection Is Detected?

By default Anti-Inspect will:

1. Trigger protection mode
2. Attempt `window.close()`
3. Attempt `history.back()`
4. Redirect to `about:blank`
5. Clear page contents
6. Stop user interaction
7. Display an optional warning screen

## Recommended Usage

Load the script as early as possible:

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/codelinkd203/anti-inspect@latest/anti-inspect.min.js"></script>
</head>
```

## Limitations

Anti-Inspect cannot stop:

* Viewing page source
* Network tab inspection
* Browser extensions
* JavaScript disabling
* Local file saving
* Browser modifications
* Remote debugging
* Pre-load inspection
* Reverse engineering

## Reality Check

There is no such thing as a "100% anti-inspect" solution on the web.

If content must truly remain secret, do not send it to the browser. Keep sensitive logic, APIs, keys, and protected resources on the server.

## License

MIT License.
