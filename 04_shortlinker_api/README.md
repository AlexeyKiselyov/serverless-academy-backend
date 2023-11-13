<h1 align = "center">4th Task. SHORTLINKER API</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>.
2.  Write in terminal `cd src`.
3.  Write in terminal `npm i` to load modules.
4.  Write in terminal:

- `npm start` or `node server.js` to launch REST API.

5.  REST API will be available on the address:
    `http://localhost:3000/shortlinker`.

### Example

- POST request:

`curl -XPOST 'http://localhost:3000/shortlinker'` \
`-H 'content-type: application/json'` \
`-d '{"url": "https://some_long_url"}'`

Response: `{"url":"short_url"}`

- GET request:

`curl 'http://localhost:3000/shortlinker/short_url'`

Response: `{"originalUrl":"original_lond_Url"}`

<h2 align = "center"> Task description.</h2>

We have all encountered long URLs that are extremely inconvenient to use in,
say, the same correspondence. So special services appeared that deal with
reducing kilometers of links into something concise. After solving a number of
tasks, which you have already managed to do in Serverless Academy, you are now
able to write your own links truncator - that is the essence of this task.

### Now a little more detail. Your task is to create a server application which:

- Will receive a request with a link to a target resource from a user in a POST
  request;
- As a response it will return a shortened version of the link;
- By further following this link, the user should be able to get to the original
  resource, which he wanted to shorten.

### Requirements

- Do not use shortening services like TinyURL and their APIs.
- Make sure that your short URL is really short (excluding the domain name,
  obviously we’re not going to buy a domain name for this task).
- Make sure you validate users input. For example, instead of a valid link a
  user can enter some nonsense by mistake. Your service should handle such
  scenarios.
- in this task you have complete freedom to choose which frameworks, tools, and
  packages to use.

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
