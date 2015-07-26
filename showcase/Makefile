REPORTER = spec

all: jshint test

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --recursive --reporter $(REPORTER) --timeout 3000

setup: setup-dev-dep setup-dep

setup-dev-dep:
	npm install node-sass --save-dev
	npm install browserify bower bowcat --save-dev
	npm install mustache --save-dev

setup-dep:
	npm install express 12factor-config --save

start: start-simple

start-simple:
	node app.js simple

.PHONY: test setup-dev-dep setup-dep
