.PHONY: test benchmarks
.DEFAULT_GOAL := help
ARG=$(filter-out $@,$(MAKECMDGOALS))
VERSION=$(shell node -p -e 'require("./package.json").version')

help: ## Show this help message
	@echo 'usage: make [target] <type> <name>'
	@echo
	@echo 'Targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

benchmarks : ## Run benchmarks
	NODE_ENV=production node -r esm benchmarks/index.js || exit $? ; \

build : ## Build distribution files
	rm -rf dist || exit $? ; \
	npx microbundle --output dist || exit $? ; \

example : ## Execute macro
	npx --node-arg '-r esm' babel -d macro/output macro/example.js || exit $? ;\

format : ## Enforces a consistent style by parsing your code and re-printing it
	npx prettier --write "*.js" ;\

tests: test test-node

test : ## Execute run-time tests
	TEST=true node -r esm index.tests.js || exit $? ;

test-node : ## Execute node tests
	node -r esm index.tests.node.js || exit $? ;\

test-watch : test ## Execute tests on watch mode
	npx chokidar-cli "**/*.js" -c "make tests" || exit $? ;\

watch : ## Execute dist and watch
	npx microbundle --output dist --watch ; \

# catch anything and do nothing
%:
	@:
