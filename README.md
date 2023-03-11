To use this project, follow the steps below:

Use the command "git clone https://github.com/Haslyk/BookApp.git" to clone the project.
Navigate to the project directory using the command "cd <booksApp>".
Use the command "npm install" to install the necessary dependencies.
Edit the database settings in the "db.js" file located in the "config" folder.
Create "users" and "books" tables in your database with the following properties:
Books -> {
title (string)
description (string)
author (string)
year (int)
cover (string)
}
Users -> {
full name (string)
username (string)
password (string)
}
Use the command "npm start" to start the API.
Test the API using Postman or a similar tool.
