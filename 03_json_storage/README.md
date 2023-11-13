<h1 align = "center">3st Task. JSON STORAGE</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>.
2.  Write in terminal `cd src`.
3.  Write in terminal `npm i` to load modules.
4.  Write in terminal:

- `npm start` or `node server.js` to launch REST API.

5.  REST API will be available on the address: `http://localhost:3000/`.

### Example

- POST request:

`curl -XPOST 'http://localhost:3000/demo_bucket/hello'` \
`-H 'content-type: application/json'` \
`-d '{"hello": "world"}'`

Response: `{"hello":"world"}`

- GET request:

`curl 'http://localhost:3000/demo_bucket/hello'`

Response: `{"hello":"world"}`

<h2 align = "center"> Task description.</h2>

In this task you need to create a full clone of jsonbase.com

### Requirements

- Your app should consist of two endpoints
  - PUT /<json_path> - Allows a user to store the JSON document
  - GET /<json_path> - Allows a user to access previously stored JSON
- You can use either express or Koa framework.

Link to old jsonbase.com:
https://web.archive.org/web/20230602205819/https://jsonbase.com/

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
