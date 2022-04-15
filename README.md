# App Lifecycle

Like the other popular apps in various platforms, the webOS TV app also has its lifecycle. After you launch an app, the status of the app is changed continuously by specific conditions until terminated. That is why you need to consider how to handle the lifecycle in case of status changed.

This sample app shows the result of each event, and the case of handlesRelaunch option to set the value true is not considered.

> If you want to know more details about the app lifecycle, see <a href="https://webostv.developer.lge.com/develop/app-developer-guide/web-app-lifecycle/">App Lifecycle</a>.


## Adding Event Listener for webOSLaunch Event

To handle the `webOSLaunch` event, you have to add the event listener to the document object. This sample app shows a message when the app is launched.

```javascript
document.addEventListener(
  'webOSLaunch',
  function (inData) {
    var launchElement = document.getElementById('launch');
    launchElement.innerHTML = 'App Launched';
  },
  true
);
```

## Adding Event Listener for webOSRelaunch Event

To handle the `webOSRelaunch` event, you also have to add the event listener to the document object. This sample app shows a message when the app is launched.

```javascript
document.addEventListener(
  'webOSRelaunch',
  function (inData) {
    var launchElement = document.getElementById('reLaunch');
    launchElement.innerHTML = 'App Relaunched';
  },
  true
);
```

## Adding Event Listener for visibilityChange Event

The `visibilityChange` event is fired when the app changes from visible to hidden or vice versa. The webOS TV sends the `onwebkitvisibilitychange` event to the app, and the app can have an event handler to manage the actions for its visible or hidden state.

You can add an event handler for each standard web engine and WebKit. For the backward compatibility, adding an event handler for the standard web engine is recommended.

```javascript
var hidden, visibilityChange;

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}
```

To handle the `visibilityChange` event, you have to add the event listener to the document object. This sample app shows a message when the visibility of the app is changed.

```javascript
document.addEventListener(
  visibilityChange,
  function () {
    if (document[hidden]) {
      var visibilityElement = document.getElementById('visibility');
      visibilityElement.innerHTML = 'App Hidden';
    } else {
      var visibilityElement = document.getElementById('visibility');
      visibilityElement.innerHTML = 'App Shown';
    }
  },
  true
);
```

:::note

You can’t see the result of the visibility event in the webOS TV emulator or webOS TV. If you want to check the result, we recommend you to use the chrome inspector.

:::

## Download

For your understanding of the lifecycle of the webOS TV app, you can download the sample code and its IPK file at the below link for free.

<a href="https://webostv.developer.lge.com/download_file/view_inline/3564/" class="ted_hyperlink"><img src="https://webostv.developer.lge.com/download_file/view_inline/2088/" alt="Download this sample app" /></a>

## Do's and Don'ts

- **Do** set the handleRelaunch option in the appinfo.json file to true, then test it again.

- **Do** check result of the `visibilityChange` event using the chrome inspector.

- **Don't** test this sample app on the web browser.
