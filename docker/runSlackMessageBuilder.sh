#!/bin/bash

docker run \
	-i \
	--rm \
	-w /home/groovy/scripts \
	docker.flexwhere.com/deploy-groovy groovy /home/groovy/scripts/slack_message_builder.groovy $1 $2
