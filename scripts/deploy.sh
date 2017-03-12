#!/bin/bash
GREEN='\033[0;32m'
RESET='\033[0m'

printf "\n${GREEN}Creating applications\n\n${RESET}"
node ../node_modules/.bin/electron-packager . waffle --overwrite --all --out='apps'

printf "\n${GREEN}Deploying\n\n${RESET}"
git remote add deployer_temp git@github.com:BernalHillbillies/waffle_showcase.git
git checkout -b deployer_temp
git add -f apps/*.app
git checkout master
git branch -D deployer_temp
git remote remove deployer_temp
