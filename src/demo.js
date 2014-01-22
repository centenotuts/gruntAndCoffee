(function () {

  "use strict";

  var test = {};
  
  test.hello = function() {
    return "hello";
  };

  test.goodbye = function() {
    return "goodbye";
  };

  test.later = function () {
    return "later";
  };

  test.takeCare = function () {
    return "take care";
  };

  window.test = test;

  var demo = function (el, options) {

    var Demo = function (el, options) {

    };

    Demo.prototype = {};

    return new Demo(el, options);

  };

  window.demo = demo;

  alert('hello');

}());