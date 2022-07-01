REPO = reload-app-client

docker_push:
	docker login --username $$DOCKER_USER --password $$DOCKER_PASS
	docker build -t andresnboza/${REPO}:v1 .
	docker push andresnboza/${REPO}:v1