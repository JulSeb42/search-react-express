# Search React Express

## Install the project

Download the project, open the root folder in your terminal and run `npm install`.

## Create fake data

First, create a `.env` file at the root of the project, and add there:

```
MONGODB_URI=mongodb://localhost/your-db-name
```

Now, you can run `node db/seed.js` to add fake users.

## Run the project

Run `npm run dev` in the root folder. This repo is using `Concurrently` to run both backend and front end at the same time.
