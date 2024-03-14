#!/bin/sh

# Run:
# chmod +x install.sh
# sudo ./install.sh

# Update Package List:
sudo apt update -y

# JavaScript (Node.js and NPM):
sudo apt install nodejs npm -y

# NPM Packages Globally:
npm install -g jshint
npm install -g nodemon
