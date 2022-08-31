document.addEventListener(
  "webOSLaunch",
  function (inData) {
    var launchElement = document.getElementById("launch");
    launchElement.innerHTML = "<lg_red>App Launched</lg_red>";
  },
  true
);

document.addEventListener(
  "webOSRelaunch",
  function (inData) {
    var launchElement = document.getElementById("reLaunch");
    launchElement.innerHTML = "<lg_red>App Relaunched</lg_red>";
  },
  true
);

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

document.addEventListener(
  visibilityChange,
  function () {
    if (document[hidden]) {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "<lg_red>App Hidden</lg_red>";
    } else {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "<lg_red>App Shown</lg_red>";
    }
  },
  true
);
