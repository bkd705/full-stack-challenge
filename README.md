## How to run it

You will need node v7.9.0 (I used async/await on the back-end, although there is the babel transpiler, but just to be safe).
You will need MySQL installed.

1. git clone
2. yarn / npm install
4. Setup your database information in the knexfile.js
5. nf dev (or yarn start and yarn server seperately)
6. navigate to localhost:3000

You will need to seed your own user to begin with, I just do it with Postman, here is an example request.

```
POST http://localhost:5000/employees

BODY: {
  "email": "myemail@gmail.com",
  "password": "ilovechocolate"
}
```

## Tech choices

**Back-End**
NodeJS
Express
MySQL
Bookshelf
Knex

**Front-End**
React
React-Router v4
Axios
Bulma.io

## Why isn't there redux/mobx/other flux architecture?

I figure this might come up, but I didn't feel the need to use a state container in such a small simplistic application such as this. For me it made more sense just to architect a strong parent/child component architecture (which I didn't in some cases) that allowed for everything to be handled in React local state. Redux and all the other state containers can have a lot of boilerplate, and on a smaller timeframe, with an application that didn't really NEED it, I did not see the advantage of using it.

## What I learned

The backend took a bit more time than I was expecting. I hadn't used much of Bookshelf or Knex before as I've always had experience with MongoDB so swapping to this combo with MySQL was a bit different. I did manage to figure it all out and it was fun learning the new things and playing with it all, but I sort of wish I would have spent less time on the back-end and more time on the front-end perfecting it as that is my strong point anyways.

I also learned that I should think more about how I structure components and their parents/pages a bit more BEFORE I go into developing them, as one of the biggest problems in the app is when you submit a feedback item it does a hard reload. I had to do this because I hadn't thought out a good parent/child component structure before hand, and then did not have the time to be able to fix that or implement a state container like redux.

## Things that are missing / broken

1. No check for permission level when updating user. Could result in regular users updating their role to a higher permission level.
2. Error handling on the front-end
3. Unit tests (really wanted to do this, started with the helpers, but just ran out of time)
4. User response from the back-end sends the hashed password, this is a no-no
5. Hard reload when submitting feedback