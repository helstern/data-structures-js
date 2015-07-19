REPORTER = spec

all: jshint test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive --reporter $(REPORTER) --timeout 3000

init: skel dep

skel:
	mkdir examples lib test conf
	touch index.js

dep:
	npm install mocha chai --save-dev

.PHONY: test skel init
