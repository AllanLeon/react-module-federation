PORT=3001

.PHONY: build
build:
	npm run build

serve: build
	npx serve -s build -l $(PORT)
