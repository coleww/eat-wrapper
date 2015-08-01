var tap = require('tape')
var eatWrapper = require('./')({'CATS': [{'NIP': '50'}, {'CUTE': '100'}]})

tap.test('does the weighted thing', function (t) {
  t.plan(1)
  var meows = []
  for (var i = 0; i < 100; i++) {
    meows.push(eatWrapper.random('cats'))
  }
  t.ok(meows.filter(function (mew) {return mew.match(/NIP/i)}).length < 40)

})

tap.test('does the non-weighted thing', function (t) {
  t.plan(1)

  var purrs = []
  for (var i = 0; i < 100; i++) {
    purrs.push(eatWrapper.random('cats', false))
  }
  t.ok(purrs.filter(function (purr) {return purr.match(/NIP/i)}).length > 40)

})

tap.test('returns the thang', function (t) {
  t.plan(1)

  t.equal(typeof eatWrapper.eat, 'object')
})

tap.test('returns the keys', function (t) {
  t.plan(1)

  t.deepEqual(eatWrapper.keys('cats'), ['NIP', 'CUTE'])
})

tap.test('returns the keys', function (t) {
  t.plan(1)

  t.deepEqual(eatWrapper.key('cats'), {'NIP': 50, 'CUTE': 100})
})

tap.test('returns undefined if it bonks', function (t) {
  t.plan(3)

  t.equal(eatWrapper.keys('zazazazaazazazaazazazaaz'), undefined)
  t.equal(eatWrapper.key('zazazazaazazazaazazazaaz'), undefined)
  t.equal(eatWrapper.random('zazazazaazazazaazazazaaz'), undefined)
})

