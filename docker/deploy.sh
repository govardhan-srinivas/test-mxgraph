#!/bin/bash

echo "___________.____                   __      __.__                          ";
echo "\_   _____/|    |    ____ ___  ___/  \    /  \  |__   ___________   ____  ";
echo " |    __)  |    |  _/ __ \\  \/  /\   \/\/   /  |  \_/ __ \_  __ \_/ __ \ ";
echo " |     \   |    |__\  ___/ >    <  \        /|   Y  \  ___/|  | \/\  ___/ ";
echo " \___  /   |_______ \___  >__/\_ \  \__/\  / |___|  /\___  >__|    \___  >";
echo "     \/            \/   \/      \/       \/       \/     \/            \/ ";
echo "Vinden & gevonden worden met FlexWhere\n"

function validateLastResult {
    if [ $? -ne 0 ]; then
        printf  "${RED} Error\n"
        if [ -f last.txt ]; then
            cat last.txt
            rm last.txt
        fi;
        exit
    fi
    printf "${GREEN} OK${NC}\n"
    if [ -f last.txt ]; then
        rm last.txt
    fi
}

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

while getopts ":s:" opt; do
  case $opt in
    s)
      server=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done

if [ -z $server ]; then
    echo "No tag provided, available tags:"
    echo "production => deploy to production (*.flexwhere.com/editor)"
    echo "rotterdam => deploy to rotterdam (rotterdam.flexwhere.nl/editor)"
    echo "beta => deploy to beta (*.beta.flexwhere.com/editor)"
    echo "test => deploy to test (*.test.flexwhere.com/editor)"
    echo "dev => deploy to dev (*.dev.flexwhere.com/editor)"
    exit
fi

if [ $server == "production" ]; then
    printf "${RED}!!!! WARNING !!!!, You are about to deploy to PRODUCTION"
    read -p ", Continue (y/n)? " choice
    case "$choice" in
    y|Y )
        echo "";;
    n|N )
        echo -e "${RED}Abort${NC}"
        exit;;
    * )
        echo -e "${RED}Abort${NC}"
        exit;;
    esac
    description="${YELLOW}production${NC} environment (*.flexwhere.com)"
    host1=35.156.84.39
    host2=prodfrontend
    name=dutchview.flexwhere.com
    slackUrl=https://hooks.slack.com/services/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
fi
if [ $server == "rotterdam" ]; then
    printf "${RED}!!!! WARNING !!!!, You are about to deploy to PRODUCTION"
    read -p ", Continue (y/n)? " choice
    case "$choice" in
    y|Y )
        echo "";;
    n|N )
        echo -e "${RED}Abort${NC}"
        exit;;
    * )
        echo -e "${RED}Abort${NC}"
        exit;;
    esac
    description="${YELLOW}production${NC} environment (rotterdam.flexwhere.nl)"
    host1=35.156.84.39
    host2=rotterdam
    name=rotterdam.flexwhere.nl
    slackUrl=https://hooks.slack.com/services/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
fi
if [ $server == "erasmusmc" ]; then
    printf "${RED}!!!! WARNING !!!!, You are about to deploy to ERAMUSMC PRODUCTION"
    read -p ", Continue (y/n)? " choice
    case "$choice" in
    y|Y )
        echo "";;
    n|N )
        echo -e "${RED}Abort${NC}"
        exit;;
    * )
        echo -e "${RED}Abort${NC}"
        exit;;
    esac
    description="${YELLOW}production${NC} environment (erasmusmc.flexwhere.com)"
    host1=35.156.84.39
    host2=erasmusmc
    name=erasmusmc.flexwhere.com
    slackUrl=https://hooks.slack.com/services/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
fi
if [ $server == "test" ]; then
    description="${YELLOW}test${NC} environment (*.test.flexwhere.com)"
    host1=34.254.122.174
    host2=testflexwhere
    name=dutchview.test.flexwhere.com
    slackUrl=https://hooks.slack.com/services/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
fi
if [ $server == "dev" ]; then
    user=ubuntu
    description="${YELLOW}dev${NC} environment (*.dev.flexwhere.com)"
    host1=34.254.122.174
    host2=devflexwhere
    name=dutchview.dev.flexwhere.com
    slackUrl=https://hooks.slack.com/services/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
fi
if [ $server == "crossDomain" ]; then
    user=ubuntu
    description="${YELLOW}dev${NC} environment (*.dev.flexwhere.com)"
    host1=34.254.122.174
    host2=devflexwhere
    name=dutchview.dev.flexwhere.com
    slackUrl=https://hooks.slack.com/services/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
fi

echo -e "Deploying to ${description} with ${tag} tag"

printf "${NC}Building FlexWhere Mxgraph Editor..................... "
cd ../

printf "${NC}Creating the copy of existing Angular Frontend for rollback............ "
server_bkp="${server}_bkp"
printf "$server_bkp"
docker tag docker.flexwhere.com/flexwhere_mxgraph_editor:$server docker.flexwhere.com/flexwhere_mxgraph_editor:$server_bkp
docker push docker.flexwhere.com/flexwhere_mxgraph_editor:$server_bkp

# Assuming nodejs(version > 12) is pre installed in the system
mkdir -p ${JENKINS_HOME}/flexwhere_mxgraph_editor
cp -r . ${JENKINS_HOME}/flexwhere_mxgraph_editor
npm install --silent

docker build -f ./docker/Dockerfile -t docker.flexwhere.com/flexwhere_mxgraph_editor:$server .
validateLastResult

printf "${NC}Pushing FlexWhere Mxgraph Editor to docker............ "
docker push docker.flexwhere.com/flexwhere_mxgraph_editor:$server >> last.txt 2>&1
validateLastResult

printf "${NC}Deploy built FlexWhere Mxgraph Editor...... "
ssh admin@${host1} -t ssh admin@${host2} sudo bash /opt/flexwhere/frontend/runAdminMxGraph.sh -t $server >> last.txt 2>&1
validateLastResult

printf "${NC}Send message to slack channel ................. "
changes="!!!\n$(git log --date=short --pretty='format:%cd@@@%H@@@%s@@@%an\n' -n 5)" >> last.txt 2>&1
title="User $(whoami) just deployed version $(git rev-parse --short HEAD) of FWAdminMxgraph to ${server} (${name})." >> last.txt 2>&1
payload=$(echo -e $changes | bash ./docker/runSlackMessageBuilder.sh "$title" "flexwhere-mxgraph") >> last.txt 2>&1
curl -XPOST -H "Content-Type: application/json" --data "${payload}" "${slackUrl}" >> last.txt 2>&1
validateLastResult
echo -e "Succesfully deployed FlexWhere Angular Admin panel to ${description}."
echo -e "${GREEN}Done${NC}"