module.exports = function (eight) {

  var eat = eight || require('./eat.json')

  eat = Object.keys(eat).reduce(function (ate, word) {
    ate[word] = eat[word].reduce(function (assc, pair) {
      var k = Object.keys(pair)[0]
      assc[k] = ~~(pair[k])
      return assc
    }, {})
    return ate
  }, {})

  var key = function (word) {
    return eat[word.toUpperCase()]
  }

  var keys = function (word) {
    var k = key(word)
    return k ? Object.keys(k) : undefined
  }

  var random = function (word, weighted) {
    var weight = weighted !== undefined ? weighted : true
    var assocs = key(word)
    var assocWords = keys(word)
    var results = []
    if (assocs) {
      if (weight) {
        assocWords.forEach(function (word) {
          for (var i = 0; i < assocs[word]; i++, results = results.concat(word)) {}
        })
      } else {
        results = assocWords
      }
    }
    return results[~~(Math.random() * results.length)] || undefined
  }

  return {
    eat: eat,
    random: random,
    keys: keys,
    key: key
  }
}
