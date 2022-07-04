REPO = reload-app-client

docker_push:
	docker login --username $$DOCKER_USER --password $$DOCKER_PASS
	docker build -t andresnboza/${REPO} .
	docker push andresnboza/${REPO}

buildDockerImage:
	docker build -t andresnboza/reload-app-client .
	docker push andresnboza/reload-app-client
	@echo "==> END of docker build <=="

configDotEnvAsConfigMap:
	kubectl create configmap reload-app-client --from-file=.env=.env
configDotEnvAsSecret:
	kubectl create secret generic reload-app-client --from-file=.env=.env

push:
	git add . 
	git commit -m "update"
	git push || true