# MVP-Zi

MVP NazihahMN - On Demand Helper

### Setup

1) How to create the database:
2) How to install dependencies:
### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd kirim` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in terminal by running `mysql -u root -p`
- Create a new database called kirim: `create database kirim`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=kirim
  DB_PASS=MYPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'students' in the database.

- In MySQL console, run `use kirim;` and then `describe requests;` to see the structure of the requests table.

### Development

- Run `yarn start` in project directory to start the Express server on port 5000
- In another terminal, do `cd kirim` and run `yarn start` to start the client in development mode with hot reloading in port 3000.

## Basic Requirements

Create a webpage with the following functionality in which :

1. Include some of the following components:
    a) Frontend
    b) Server
    c) Database (suggestion of around three tables max)
        - Write the correct query in `mysql`.
        - Finish the endpoints in `/routes/requests.js`.
        - Test the endpoints using Postman.
        - Call the endpoints from the front end.
    d) Future features (pending)

2. Create a README.md with the following screenshots (spend no more than one day on this
    a) Database schema (optional design tool) (Have a backend application)
## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._

