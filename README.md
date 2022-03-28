This repo follows the youtube tutorial [_Build a REST API with Node JS and Express | CRUD API Tutorial_](https://youtu.be/l8WPWK9mS5M)

\*\*To Get Started

1. `npm install`
2. `npm run`
3. Open Postman and make a GET request to _http://localhost:5000/users_

- You should see an empty array to start

4. Add a user or users by making a POST request to _http://localhost:5000/users_ in the following format:

```
  {
    "firstName": "FIRST_NAME",
    "lastName":"LAST_NAME",
    "age":NUMBER
  }
```

5. Once users have been added, make another GET request to _http://localhost:5000/users_, and you should see the users you added.

\*\*\*To get a Single User

Make a GET request to _http://localhost:5000/users/INSERTIDHERE_

\*\*\*To Delete a User

Make a DELETE Request to _http://localhost:5000/users/INSERTIDHERE_

\*\*\*To Update a User

Make a PATCH Request to _http://localhost:5000/users/INSERTIDHERE_ with the body that you want to edit.
For example:

```
  {"firstName":"Cherrie"}
```
