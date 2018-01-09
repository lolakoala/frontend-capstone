This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# MenatlHealthy
- This app solves the problem of bad or irrelevant search results when trying to find a mental health professional to fit your needs. Users can search mental health professionals in their area by insurance or specialty and connect with other users by searching for users by self-identified challenges.

## The Stack
- This was a two week, paired, self-directed project. It was built with React, React-Router, and Redux on the front end with Firebase Oauth and Material UI. It interacts with a Node/Express server and PostgreSQL/Knex database.
- [Backend Repo](https://github.com/jenPlusPlus/backend-capstone)
- [Backend URL](https://mental-healthy-backend.herokuapp.com/)

## Running this app.

- [Visit the deployed app.](https://mentalhealthy.herokuapp.com/)
- To run the app locally, first clone down the backend repo listed above, run npm install to install dependencies, and refer to the knex file for creating the database. Run knex migrate:latest to set up the schema, and run knex seed:run to populate the database. Then run node server.js to run the server. Finally, clone down this repo, run npm install to install dependencies, and run npm start to run the front end.

## The User Experience
- On page load, the user can sign up with Oauth provided by Firebase using their existing google account.
- They are then directed to select a city and then submit a profile.
- If a user already has an existing account on the app, they will be directed to their dashboard.
- From the dashboard, a user can search for professionals by insurance or specialty. They can also search for buddies by challenges. They can favorite professionals or buddies from the search results.
- Also from the dashboard, a user can view favorite buddies or professionals, view and consequently edit their profile, or view their toolbox- a list of helpful resources.
- The chat feature does not currently work. 
