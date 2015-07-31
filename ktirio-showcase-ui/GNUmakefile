SHELL = /bin/bash
NPM_BIN_PATH := $(shell npm bin)
export PATH := $(NPM_BIN_PATH):$(PATH)

path:
	echo $(PATH)

build-css: SCSS_SOURCE_PATH := src/css-scss/app.scss
build-css: SCSS_TARGET_PATH := target/app.css
build-css:
	-test -z $(shell find src/css -maxdepth 0 -empty) && cp -R --force src/css/*.css target
	node-sass --include-path src/css-scss -- $(SCSS_SOURCE_PATH) $(SCSS_TARGET_PATH)

clean-css:
	rm -rf target/*.css

.PHONY: test setup-dev-dep setup-dep
