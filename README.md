# To-Do-API

This repo manifest the usage of node.js with express framework to develop a to do list api. Its a simple api which showcase basic usage of the framework. 

## Project Setup

After cloning this reposity, install npm packages via:
```
npm install
```

### Database Migerations

In order to create table,  [Knex](https://knexjs.org/guide/migrations.html) is used to create migerations. Run following command to install Knex globally.

```
npm install knex -g
```

 Create and .env file in the root directory and assign values to following keys in .env file.

```
PORT=3000
HOST=127.0.0.1

# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=
DB_NAME=
DB_PORT=5432

#Signin Secret
SECRET_KEY=
```

After updating .env file, run following command to run database migerations.

```
knex migrate:latest
```

### Run Application

Run the following command:

```
npm start
```