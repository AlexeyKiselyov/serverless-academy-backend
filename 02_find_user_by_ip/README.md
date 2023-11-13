<h1 align = "center">2st Task. FIND USER COUNTRY BY IP</h1>

## Guide:

1.  <a href = "https://nodejs.org/uk" target="_blank" rel="noreferrer noopener">Need
    NODE.js.</a>.
2.  Write in terminal `cd src`.
3.  Write in terminal `npm i` to load modules.
4.  Write in terminal:

- `npm start` or `node server.js` to launch REST API.

5.  REST API will be available on the address:
    `http://localhost:3000/api/country-by-ip`.

<h2 align = "center"> Task description.</h2>

This task is based on a real case study. At one time, we were doing a service
where we had to determine from what point a user was knocking on the endpoint,
and then offer him the appropriate logic for the application. A trivial example:
a Frenchman wants to see prices in euros instead of dollars, and an American
doesn't need Japanese yen.

### Requirements

So, you have a CSV table where you will find a long list of rows with IP ranges
(from and to - 1st and 2nd columns respectively), as well as the country to
which these IPs are issued.

Your task is to write a web application in Express, allocating an endpoint by
which a server-hosted algorithm can detect where the user is coming from and
return both the IP address value and the country from which the request was
made.

So, in total, your API should:

- Detect user's IP;
- Determine user's location by IP using a CSV database;
- Return the user's address range (in a human-readable form) and country from
  the csv table.

### How to verify your solution

We have prepared for you a list of IP addresses that are allocated to specific
countries. If you've done everything correctly, your script should successfully
return a response (or output to the console) indicating the correct country when
you send the IP in the body of the request:

- Chile — 45.232.208.143
- Armenia — 185.182.120.34
- Mexico — 45.177.176.23
- Turkey — 5.44.80.51
- Norway — 91.149.48.22
- Spain — 83.229.33.3
- Cyprus — 203.24.108.65
- UK — 23.43.23.15
- Ireland — 89.28.176.5
- Romania — 77.83.248.211

To check, you can also install Ngrok and play with Proxy by knocking on an open
Ngrok address.

---

<h2 align = "center"><a href="https://www.linkedin.com/in/olexiy-kiselyov/" target="_blank" rel="noreferrer noopener">
Linkedin of developer</a></h2>
