import jsdom from 'jsdom'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
global.window.matchMedia = function () {
  return {
    matches: false,
    addListener: function () {
    },
    removeListener: function () {
    }
  }
}
