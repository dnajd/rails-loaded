# rails-loaded

## Develop runtimes

    $ rails server
    $ grunt
    $ guard
    $ rake jasmine


## Packages


#### Gems • `bundle install --path=vendor`

| Package           | Description                                  |
| ----------------- | -------------------------------------------- |
| jquery            | The Write Less, Do More, JavaScript Library  |
| jasmine           | framework for testing JavaScript code        |
| handlebars        | javascript templates                         |
| sht_rails         | Shared handlebars templates; js templating   |
| bourbon           | A Sass Mixin Library                         |
| neat              | Grid framework for Sass and Bourbon          |
| bitters           | Stock styles / stylesheets using smacks      |
| font-awesome      | Multi-purpose icon fonts                     |


#### Bower • `bower install`

| Package           | Description                                  |
| ----------------- | -------------------------------------------- |
| animate.css       | CSS animation library                        |
| spin.js           | loading spinners                             |


#### Grunt • `npm install`

| Package           | Description                                  |
| ----------------- | -------------------------------------------- |
| jshint            | javascript validation                        |
| [jsdoc](http://usejsdoc.org/) | generate docs from js comments   |


## Testing

| Package           | Description                                  |
| ----------------- | -------------------------------------------- |
| grunt             | jsHint, jsdoc                                |
| rake guard        | auto-runs rails tests; and jasmine tests     |
| rake js-test      | jasmine ci tests from command line           |
| rake jasmine      | jasmine tests viewable in localhost:8888     |
| mocha             | for stubbing and mocking                     |


## JS Components

| Package           | Description                                  |
| ----------------- | -------------------------------------------- |
| event_facade      | to handle triggering / binding events        |
| hbt_facade        | to handle handlebars.js rendering            |
| utils             | containing methods for mixing objects, debouncing clicks and redirecting |
| mobile_menu       | rwd menu for phones                          |


## Misc

- A welcome#index controller with bitters html examples
- Jasmine config puts tests under `/test/javascripts` and json fixtures in `/test/javascripts/fixtures/json`

# Environments

## Mac El Capitan

May need to follow these instructions for v8 and ruby racer

http://stackoverflow.com/questions/33475709/install-therubyracer-gem-on-osx-10-11-el-capitan#

or try uninstalling everything and doing this

http://stackoverflow.com/questions/33343159/gem-install-therubyracer-v-0-11-4?rq=1
