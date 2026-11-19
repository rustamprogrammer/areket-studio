const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const storage = new Map();
const list = {innerHTML: ''};
const source = fs.readFileSync('assets/js/app.js', 'utf8').replace(
  "document.addEventListener('DOMContentLoaded',() => {",
  "globalThis.testBrief = {readBriefHistory,briefWhatsAppUrl,renderBriefHistory}; document.addEventListener('DOMContentLoaded',() => {"
);
const context = {
  window: {jQuery: null},
  document: {addEventListener() {}, getElementById: id => id === 'brief-history-list' ? list : null},
  localStorage: {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value)
  }
};
vm.runInNewContext(source, context);

const records = Array.from({length: 7}, (_, index) => ({
  name: index === 0 ? '<script> Aizhan Sadykova' : `Person ${index}`,
  company: '', type: 'website', goal: 'A new website for customer enquiries',
  audience: 'Customers', features: 'Catalogue and request form',
  timeline: '', budget: '', createdAt: new Date(2026, 10, index + 1).toISOString()
}));
storage.set('areket-brief-history', JSON.stringify(records));
context.testBrief.renderBriefHistory();
assert.equal((list.innerHTML.match(/class="history-entry"/g) || []).length, 5);
assert.match(list.innerHTML, /Older requests|Более ранние запросы/);
assert.match(list.innerHTML, /&lt;script&gt;/);
assert.equal(context.testBrief.readBriefHistory().length, 7);
assert.match(context.testBrief.briefWhatsAppUrl(records[0]), /^https:\/\/wa\.me\/77478032383\?text=/);
console.log('Brief history checks passed.');
