const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

let onReady;
let results = '';
let fetchCalled = false;
const $ = selector => ({
  on() { return this; },
  val() { return ''; },
  stop() { return this; },
  fadeTo(_duration, _opacity, done) { done?.(); return this; },
  html(value) { if (selector === '#project-results') results = value; return this; }
});
const context = {
  window: {jQuery: $},
  document: {
    documentElement: {dataset: {}},
    addEventListener: (_event, callback) => { onReady = callback; },
    getElementById: id => id === 'project-results' ? {} : null,
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: () => ({classList: {add() {}}, setAttribute() {}, style: {setProperty() {}}}),
    body: {appendChild() {}}
  },
  localStorage: {getItem: () => null, setItem() {}},
  location: {protocol: 'file:', hash: ''},
  matchMedia: () => ({matches: false}),
  fetch: () => { fetchCalled = true; throw Error('file fetch must not run'); }
};
vm.runInNewContext(fs.readFileSync('data/projects.js', 'utf8'), context);
vm.runInNewContext(fs.readFileSync('assets/js/app.js', 'utf8'), context);
onReady();
setImmediate(() => {
  assert.equal(fetchCalled, false);
  assert.equal((results.match(/class="project-row"/g) || []).length, 3);
  assert.match(results, /TechnoKhan/);
  assert.match(results, /BigPro/);
  console.log('File project catalogue checks passed.');
});
