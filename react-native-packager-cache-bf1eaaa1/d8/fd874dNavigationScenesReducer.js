
'use strict';

var invariant = require('fbjs/lib/invariant');
var shallowEqual = require('fbjs/lib/shallowEqual');

var SCENE_KEY_PREFIX = 'scene_';

function compareKey(one, two) {
  var delta = one.length - two.length;
  if (delta > 0) {
    return 1;
  }
  if (delta < 0) {
    return -1;
  }
  return one > two ? 1 : -1;
}

function compareScenes(one, two) {
  if (one.index > two.index) {
    return 1;
  }
  if (one.index < two.index) {
    return -1;
  }

  return compareKey(one.key, two.key);
}

function areScenesShallowEqual(one, two) {
  return one.key === two.key && one.index === two.index && one.isStale === two.isStale && one.isActive === two.isActive && areRoutesShallowEqual(one.route, two.route);
}

function areRoutesShallowEqual(one, two) {
  if (!one || !two) {
    return one === two;
  }

  if (one.key !== two.key) {
    return false;
  }

  return shallowEqual(one, two);
}

function NavigationScenesReducer(scenes, nextState, prevState) {
  if (prevState === nextState) {
    return scenes;
  }

  var prevScenes = new Map();
  var freshScenes = new Map();
  var staleScenes = new Map();

  scenes.forEach(function (scene) {
    var key = scene.key;

    if (scene.isStale) {
      staleScenes.set(key, scene);
    }
    prevScenes.set(key, scene);
  });

  var nextKeys = new Set();
  nextState.routes.forEach(function (route, index) {
    var key = SCENE_KEY_PREFIX + route.key;
    var scene = {
      index: index,
      isActive: false,
      isStale: false,
      key: key,
      route: route
    };
    invariant(!nextKeys.has(key), 'navigationState.routes[' + index + '].key "' + key + '" conflicts with ' + 'another route!');
    nextKeys.add(key);

    if (staleScenes.has(key)) {
      staleScenes.delete(key);
    }
    freshScenes.set(key, scene);
  });

  if (prevState) {
    prevState.routes.forEach(function (route, index) {
      var key = SCENE_KEY_PREFIX + route.key;
      if (freshScenes.has(key)) {
        return;
      }
      staleScenes.set(key, {
        index: index,
        isActive: false,
        isStale: true,
        key: key,
        route: route
      });
    });
  }

  var nextScenes = [];

  var mergeScene = function mergeScene(nextScene) {
    var key = nextScene.key;

    var prevScene = prevScenes.has(key) ? prevScenes.get(key) : null;
    if (prevScene && areScenesShallowEqual(prevScene, nextScene)) {
      nextScenes.push(prevScene);
    } else {
      nextScenes.push(nextScene);
    }
  };

  staleScenes.forEach(mergeScene);
  freshScenes.forEach(mergeScene);

  nextScenes.sort(compareScenes);

  var activeScenesCount = 0;
  nextScenes.forEach(function (scene, ii) {
    var isActive = !scene.isStale && scene.index === nextState.index;
    if (isActive !== scene.isActive) {
      nextScenes[ii] = babelHelpers.extends({}, scene, {
        isActive: isActive
      });
    }
    if (isActive) {
      activeScenesCount++;
    }
  });

  invariant(activeScenesCount === 1, 'there should always be only one scene active, not %s.', activeScenesCount);

  if (nextScenes.length !== scenes.length) {
    return nextScenes;
  }

  if (nextScenes.some(function (scene, index) {
    return !areScenesShallowEqual(scenes[index], scene);
  })) {
    return nextScenes;
  }

  return scenes;
}

module.exports = NavigationScenesReducer;