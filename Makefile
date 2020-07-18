.PHONY: test
.DEFAULT_GOAL := help
ARG=$(filter-out $@,$(MAKECMDGOALS))
VERSION=$(shell node -p -e 'require("./package.json").version')

help: ## Show this help message
	@echo 'usage: make [target] <type> <name>'
	@echo
	@echo 'Targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

build : ## Build distribution files
	rm -rf dist || exit $? ; \
	npx microbundle --output dist || exit $? ; \

example : ## Execute macro
	npx --node-arg '-r esm' babel -d macro/output macro/example.js || exit $? ;\

format : ## Enforces a consistent style by parsing your code and re-printing it
	npx prettier --write "*.js" ;\

release :
	git add -A || exit $? ;\
	git commit -m 'release: $(VERSION)' || exit $? ;\
	git push origin master || exit $? ;\
	git tag $(VERSION) || exit $? ;\
	git push --tags || exit $? ;\
	npm publish || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released $(VERSION)" || exit 1) ;\

release-beta :
	git add -A || exit $? ;\
	git commit -m 'release: $(VERSION)' || exit $? ;\
	git push origin master || exit $? ;\
	git tag $(VERSION) || exit $? ;\
	git push --tags || exit $? ;\
	npm publish --tag beta || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released $(VERSION)" || exit 1) ;\

release-minor : ## Release a new minor version
	make test || exit $? ;\
	make dist || exit $? ;\
	npm version minor || exit $? ;\
	make release || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released new minor $(VERSION)" || exit 1) ;\

release-minor-beta : ## Release a new minor beta version
	make test || exit $? ;\
	make dist || exit $? ;\
	npm version minor || exit $? ;\
	make release-beta || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released new minor $(VERSION)" || exit 1) ;\

release-major : ## Release a new major version
	make test || exit $? ;\
	make dist || exit $? ;\
	npm version major || exit $? ;\
	make release || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released new major $(VERSION)" || exit 1) ;\

release-major-beta : ## Release a new major beta version
	make test || exit $? ;\
	make dist || exit $? ;\
	npm version major || exit $? ;\
	make release-beta || exit $? ;\
	([ $$? -eq 0 ] && echo "✓ Released new major $(VERSION)" || exit 1) ;\

test: test-macro test-runtime ## Execute all the tests

test-runtime : ## Execute run-time tests
	node -r esm index.test || exit $? ;\

test-macro : example ## Execute test macro
	node -r esm macro/index.test || exit $? ;\

test-watch : test ## Execute tests on watch mode
	npx chokidar-cli "**/*.js" -c "make test" || exit $? ;\

watch : ## Execute dist and watch
	npx microbundle --output dist --watch ; \

# catch anything and do nothing
%:
	@:
