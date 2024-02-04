#!/bin/sh

# Run:
# chmod +x install.sh
# sudo ./install.sh

# JavaScript (Node.js and NPM):
sudo apt-get update -y
sudo apt-get install nodejs npm -y

# NPM Packages Globally:
npm install -g jshint
npm install -g nodemon
