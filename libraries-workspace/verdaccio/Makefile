V_PATH=$(shell pwd)
CONTAINER_NAME=verdaccio

verdaccio-run:
	docker run -it --rm --name $(CONTAINER_NAME) \
		-p 4873:4873 \
		-v $(V_PATH)/conf:/verdaccio/conf \
		-v $(V_PATH)/storage:/verdaccio/storage \
		verdaccio/verdaccio

verdaccio-stop:
	docker stop $(CONTAINER_NAME)
