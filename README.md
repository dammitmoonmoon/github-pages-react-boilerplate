#Routing
The bugs that arise from using React Browser Router on Github Pages is fixed by setting a router basename and using the spa-github-pages.

To start a new project, customize the following parameters:

in package.json

1. "homepage": "https://dammitmoonmoon.github.io/github-pages-react-boilerplate/"
2. "predeploy": "rm -rf dist && parcel build ./src/index.html --public-url /github-pages-react-boilerplate/"

in .env:

1. BASE_URL=/github-pages-react-boilerplate
