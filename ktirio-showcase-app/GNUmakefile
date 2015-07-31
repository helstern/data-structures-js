SHELL = /bin/bash
NPM_BIN_PATH := $(shell npm bin)
export PATH := $(NPM_BIN_PATH):$(PATH)
MOCHA_TEST_REPORTER = spec

all: test

path:
	echo $(PATH)

test:
	@NODE_ENV=test mocha --recursive --reporter $(MOCHA_TEST_REPORTER) --timeout 3000

start-simple:
	node app.js simple

build-js:
	npm run

build-css: SCSS_SOURCE_PATH := css-scss/app.scss
build-css: SCSS_TARGET_PATH := public/app.css
build-css:
	cp css/* public
	node-sass --include-path css-scss --include-path bower_components/Bootflat/bootflat/scss/ -- $(SCSS_SOURCE_PATH) $(SCSS_TARGET_PATH)

build-views:
	echo 'build views'

clean-css:
	rm public/*.css

.PHONY: test setup-dev-dep setup-dep
