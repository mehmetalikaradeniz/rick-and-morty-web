# Rick and Morty Website

### Installation
Install Gulp to Global

`yarn add global gulp-cli@2.2.0`

Install Project Dependencies

`yarn install`

Run Project

`yarn run start`

### Less Compiling

When you run the `yarn run start`, 

it will process sequentially commands 
```
gulp build
react-scripts start
```
After **gulp build** script your **less** files are compiled and placed under `/src/styles/dist` folder. 

You can also  compile **less** files at running time with `gulp watch`.  