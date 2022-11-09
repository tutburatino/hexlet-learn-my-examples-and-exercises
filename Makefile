install: install-deps

run:
	npx babel-node

install-deps:
	rm -rf node-modules
	npm ci

build:
	rm -rf dist
	npm run build

test:
	npm test

live-test:
	npx jest --watchAll

lint:
	npx eslint .

publish:
	npm publish
