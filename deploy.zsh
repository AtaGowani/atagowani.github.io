#!/usr/bin/env zsh

# abort on errors
set -e

# build
npm run build

# checkout prod branch
git checkout prod

setopt extended_glob

# remove all files/directories except dist
rm -r ^dist

# move everything out of dist
mv dist/* ./ 

# remove dist
rm -r dist

# Add CNAME
# echo atagowani.com > CNAME

# Add README
echo "atagowani.com hosted website" >> README.md

# add, commit, and push to GitHub
git add .
git commit -m "prod update by script"
git push

# switch back to main
git checkout main

# install node_modules again
npm i
