# bootstrappable

Simple nodejs api and database management for rapid api prototyping.

## Status

The current code is complete for user authentication and generating auth token.
There is a refresh token been generated but the logic for same is not implemented.

## Environment variables

Here is a list of environment variables you will need to run the project.

* `api_port` defines http port you want to run your server
* `db_host` is the hostname for mongodb instance
* `db_name` is name of database you want to use
* `app_rounds` is the number of hash rounds needed
* `app_secret` is used to generate token
* `app_refresh_token_len` is refresh token length
