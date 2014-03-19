# AngularJS Phone Catalog Tutorial Application

## Overview

This application takes the Angular Phonecat project (https://github.com/angular/angular-seed) and converts it into a simple
MEAN stack application.  This project uses MongoDB, NodeJS and ExpressJS for the backend.


## Prerequisites

As this project is an extension of the Angular Phonecat project, if you are not familiar with Angular, you should first
complete that tutorial.

The following are the pre-requisites from Angular Phonecat:
### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

This project has several pre-requisites of its own:
### MongoDB
- Install [MongoDB][mongodb] per the instructions on that page

### NPM Install
- From the project directory, run the command, "npm install".  This should install the project dependencies from package.json


Not required but convenient:
### NodeMon
- This project can be installed globally using NPM.  Once installed, you run your NodeJS using NodeMon instead of Node.  NodeMon
watches your file saves and restarts the Node server every time you save a change


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project and the [angular-phonecat] project
- For simplicity, the Karma tests have been deleted from this project but it should be easy to add them back in
- The server runs in NodeJS.  Starting the server may be accomplished by running "node server.js" from the project directory
- The server watches port 8080 so you can view the application at http://localhost:8080/


## Edits / Tutorial Outline

It doesn't take very many edits to move from the original Angular Phonecat project to the MEAN stack version.
### step-0

- Download the Angular Phonecat project (or this project)


### step-1

- Load the JSON files into MongoDB
- Some basic editing maybe necessary for mongoimport to recognize the JSON files (as I recall, it wants the JSON file to
have one line per row in the file)
  - server.js is looking for a database called "phonecat" and collections called "phonelist" and "phones".  If you import
  the JSON files into a different place, be sure to edit server.js
- the id property in the JSON file should be changed to _id, as MongoDB uses _id as it's unique identifier


### step-2

- I wanted to test an edit capability so I edited /app/js/controllers.js to create a save function
  - An isEditing variable was added to the scope to allow the user to toggle between view and edit modes


### step-3

- /app/js/services.js was edited to use the NodeJS server rather than the JSON files


### step-4

- /app/partials/phone-detail.html was edited to add an Edit/Save button and to make some fields editable
  - All of the fields could be made editable but weren't due to time constraints
- /app/partials/phone-list.html was edited to reference "phone._id" instead of "phone.id" due to the change we made earlier
for MongoDB

### step-5

- /server.js was built
  - this file contains the code to create the NodeJS/ExpressJS application
  - Mongoose is used to control access to MongoDB.  Mongoose allows you to enforce a schema on the schema-less MongoDB.  It
  also simplifies some database calls


## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        phone-detail.html   --> HTML template that shows detailed info about a phone
        phone-list.html     --> HTML template that shows a list of all of the phones
    server.js           --> NodeJS/ExpressJS server application
