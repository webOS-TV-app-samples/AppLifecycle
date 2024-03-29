# App Lifecycle

Like the other popular apps in various platforms, the webOS TV app also has its lifecycle. After you launch an app, the
status of the app is changed continuously by specific conditions until terminated. That is why you need to consider how
to handle the lifecycle in case of status changed.

This sample app shows the result of each event, and the case of handlesRelaunch option to set the value true is not
considered. If you want to know more details about the app lifecycle,
see [App Lifecycle](https://webostv.developer.lge.com/develop/getting-started/app-lifecycle).

## Adding Event Listener for webOSLaunch Event

To handle the `webOSLaunch` event, you have to add the event listener to the document object. This sample app shows a
message when the app is launched.

```javascript
document.addEventListener(
  "webOSLaunch",
  function (inData) {
    var launchElement = document.getElementById("launch");
    launchElement.innerHTML = "App Launched";
  },
  true
);
```

## Adding Event Listener for webOSRelaunch Event

To handle the `webOSRelaunch` event, you also have to add the event listener to the document object. This sample app
shows a message when the app is launched.

```javascript
document.addEventListener(
  "webOSRelaunch",
  function (inData) {
    var launchElement = document.getElementById("reLaunch");
    launchElement.innerHTML = "App Relaunched";
  },
  true
);
```

## Adding Event Listener for visibilityChange Event

The `visibilityChange` event is fired when the app changes from visible to hidden or vice versa. The webOS TV sends
the `onwebkitvisibilitychange` event to the app, and the app can have an event handler to manage the actions for its
visible or hidden state.

You can add an event handler for each standard web engine and WebKit. For the backward compatibility, adding an event
handler for the standard web engine is recommended.

```javascript
var hidden, visibilityChange;

if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
```

To handle the `visibilityChange` event, you have to add the event listener to the document object. This sample app shows
a message when the visibility of the app is changed.

```javascript
document.addEventListener(
  visibilityChange,
  function () {
    if (document[hidden]) {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "App Hidden";
    } else {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "App Shown";
    }
  },
  true
);
```

You can’t see the result of the visibility event in the webOS TV emulator or webOS TV. If you want to check the result,
we recommend that you use the chrome inspector.

## Do's and Don'ts

- **Do** set the handleRelaunch option in the appinfo.json file to true, then test it again.

- **Do** check result of the `visibilityChange` event using the chrome inspector.

- **Don't** test this sample app on the web browser.
