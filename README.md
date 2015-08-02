eat-wrapper
----------------

some helpful wrapper functions around the very helpful JSON port of the [Edinburgh Associative Thesaurus](http://www.eat.rl.ac.uk/) by [Darius Kazemi](https://github.com/dariusk/ea-thesaurus). See license thing way down below in the depths. 

[![NPM](https://nodei.co/npm/eat-wrapper.png)](https://nodei.co/npm/eat-wrapper/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Build Status](https://secure.travis-ci.org/coleww/eat-wrapper.png)](http://travis-ci.org/coleww/eat-wrapper)

### EXAMPLE

example basic output of the eat json, looking up the world 'aeroplane':

```
AEROPLANE: [ { FLY: '15' },
  { FLIGHT: '6' },
  ...
  ]
```

this module formats it to be more like this:

```
AEROPLANE: { FLY: 15,
  FLIGHT: 6,
  ...
}

```

### API

If you pass a word that the EAT don't know about, it should hopefully return undefined, so deal with that.

`var eatWrapper = require('eat-wrapper')()`
=> invoke that thang, build that muscle

`eatWrapper.random(word, weighted:true)`
=> picks an associated word at random. if weighted is true (it is by default), then the randomness will be weighted by the values for each associated word.
For example, in this instance: `AEROPLANE [ { FLIGHT: '6' }, { PLANE: '3' }]`, flight would be twice as likely to be returned as plane if it is weighted, but they would have equal chances if it is not weighted.

`eatWrapper.keys(word)`
=> returns a list of words associated with the given word

`eatWrapper.key(word)`
=> returns the formatted json object of {associatedWord: value, ...} for that word

`eatWrapper.eat`
=> returns ginormous JSON object of {WORD {ASSOC-WORD: 'VALUE', ...}, ...}

### USAGE/IDEAS

- Darius Kazemi notes that "It's a weird set of associations very particular to its time and place" which is Britain in the 70s.  Could consider it a weirdly specific and janky word net? The thing itself has a "voice" already, can it be made to speak? Can this sort of thing be replicated for other times and spaces? (tags on things?)

- make a markov chain guide/filter its output towards associated words/concepts? 

- take the eat object and use it to learn d3 or something (COOL)


### License
The Edinburgh Associative Thesaurus dataset is public sector data available under an [Open Government License](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). As such you are free to

* copy, publish, distribute and transmit the Information;
* adapt the Information;
* exploit the Information commercially and non-commercially for example, by combining it with other Information, or by including it in your own product or application.

See the [Open Government License](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) for further detail.