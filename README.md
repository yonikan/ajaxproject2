Yoni's Ajax Project - num 1


* MongoDB
* Express
* Angular
* Node

*Requires MongoDB server running*

## Developing

* `npm install` to resolve dependencies
* `npm run watch` to start transpile watch. This command will read files under `client/src` and generate a single file under `client/dist/bundle.js` which should be included by index.html
* Seed database: `mongoimport --db olympics-dev --collection sports --type json --file server/sports-seed.json --jsonArray --drop`