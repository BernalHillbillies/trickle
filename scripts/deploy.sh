#!/bin/bash
GREEN='\033[0;32m'
RESET='\033[0m'

printf "\n${GREEN}Creating applications\n\n${RESET}"
node ./node_modules/.bin/electron-packager . waffle --overwrite --platform='darwin' --arch='x64' --out='apps'
