<h1 align = "center">1st Task. AUTH API</h1>

## Guide:

1.  <a href = "https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer noopener">Need
    Docker</a>.
2.  Write in terminal `cd src`.
3.  Add `.env` file with your credentials in `.\backend` folder.
4.  Write in terminal `docker-compose up` to launch backend and database.
5.  REST API will be available on the address: `http://localhost:3000/api`.

<h2 align = "center"> Task description.</h2>

At this point, we are starting to look at how to implement a variety of web
applications and APIs.

In this task you need to implement a simple REST API using the Express
framework. The essence of the API is to register and authorize users using JWT
tokens.

### Requirements

- Your API must fully \*\*\*\*comply with the interface declared in this API
  documentation ('https://auth-api-docs.learning.serverless.direct/#/').
- As a database, your app should use PostgreSQL. Use raw postgres driver
  ('https://www.npmjs.com/package/pg'), don’t use any ORMs.
- Protected endpoints must expect a valid token passed in the request headers.
  For example: Authorization: Bearer <access_token>. Token validation should
  happen in the middleware layer
  ('https://expressjs.com/en/guide/writing-middleware.html').
- User passwords must be encrypted before storing them in the database. You can
  use bcrypt library ('https://www.npmjs.com/package/bcrypt') to encode and
  verify passwords.
- Access token’s TTL should be limited to 60 minutes. After 60 minutes from its
  creation an access token will be considered as expired. This TTL should be
  configurable in the environment variables.
- Refresh token should be valid forever.
- JWT secret should be stored in the environment variables.
- Make sure that you’re validating incoming data.

## Useful information

### ⚠️ NOTE #1:

Keep in mind that the app you’ll create for this task will be used in one of the
next tasks, so keep your codebase re-usable and maintainable.

### ⚠️ NOTE #2:

If you are familiar with Docker, you can run Postgres container locally. If not,
just use a service like supabase ('https://supabase.com/') to provision the
database for free.

You will most likely encounter some new topics and approaches during this task,
so here are some links to useful information.

- Official express framework website ('https://expressjs.com/') (Take a look at
  the getting started and guide sections)
- What is JWT and how token-based auth works (link 1 [ru]
  ('https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc') | link 2
  [en] ('https://jwt.io/introduction'))
- How to encrypt and verify passwords in NodeJS using bcrypt
  ('https://blog.logrocket.com/password-hashing-node-js-bcrypt/')

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
