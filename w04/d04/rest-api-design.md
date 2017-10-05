

# REST API Design

**REST (REpresentational State Transfer)** is an API design philosophy for data-centric HTTP APIs. RESTful services tend to be flexible and well-organized, capable of supporting very different front-ends without requiring much customization. They also tend to be easier to understand, since they handle object changes in predictable ways.

But that doesn't necessarily mean RESTful APIs are easy to design. REST APIs require that the developer have a solid grasp of the different types of entities their API manages and the relationships between them.

Ultimately, REST APIs are simply APIs that have strong, consistent opinions about how HTTP should be used. There are no rules or magic tricks–simply commonly shared beliefs and guidelines.

### Common Transport Format

REST APIs should generally accept and deliver content in at least one widely used data-centric format, preferrably with support for multiple relevant formats.

The most widely accepted formats for API data are:

- JSON
- XML
- YAML

### CRUD Operations

In the 1990s and 2000s, GET and POST were the only HTTP methods a developer could rely on. As a result, many APIs were designed to accept either method with parameters included in the request body for POST requests and in the query string for GET requests.

This also meant that many endpoints would be named things like `/search`, `/newPost`, `/rate`, or `/deleteUser`. As a result, APIs would often become a large collection of very specialized actions with complicated and inconsistent parameters.

REST API design presents an alternative where developers instead focus all API activity around a simple set of **"CRUD" actions**, using the HTTP verbs to identify the intended action:

- **C**reate = `POST`
- **R**ead = `GET`
- **U**pdate = `PUT`/`PATCH`
- **D**elete = `DELETE`

### Resources and Collections

Path names (including path parameters) are instead used to identify resources. This also makes more sense with the idea of URL being a "Resource Locator"—not an "Action Locator". This helps API URLs to be more "hackable", meaning that users can more successfully guess which endpoints they might need for new tasks.

While this does mean that clients sometimes need to make more API calls with this approach, it makes the API suitable for a wider variety of applications. Ultimately this helps make the API and the front-end more independent of one another and is generally considered a "win" in terms of [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

Significantly, REST APIs generally allow clients to access **collections of resources** as well as **individual resources, specified by ID** or other unique identifier. See the "Expected Response Body" section below for how the various CRUD operations map to collections and individual resources.

### Idempotency

Idempotency is the notion that some API calls, when repeated, should result in the same state of the server/database.

For example, making a `GET` request should never modify the state of the server. Whether the client executes one `GET` request or a thousand, the API should give the same response until a meaningful state change occurs (e.g. new resource added to a collection, requested resource was changed, etc.)

Similarly, a `DELETE` request should always result in the specified resource being removed, if present. Sending another `DELETE` request for the same resource should not accidentally **D**elete a different resource. And a `PUT` request should **U**pdate the specified properties to the given values; it should not be possible to end up with an array or counter that continues to increase every time the `PUT` request is repeated.

Note that `POST` requests are not considered idempotent, because each `POST` request should **C**reate a new resource and add it the relevant collection.

> Note that some developers hold slightly different interpretations of the definition of the term "idempotency". Some believe that idempotency means that repeated requests should have the exact same response, including status code (rather than simply avoiding unwarranted changes to the state of the database). This often leads them to hold strong opinions about the role of `PUT` vs `PATCH` for **U**pdating resources.

### Status Codes

HTTP status codes have standardized meanings. REST APIs respect these meanings and strive to set an appropriate status on every API response.

- `1xx` - low-level HTTP (you'll probably never use these)
- `2xx` - success codes (`200` for GET, `201` for POST/PUT, `204` for DELETE)
- `3xx` - redirection (rare for most APIs)
- `4xx` - client error (bad/inaccurate request)
- `5xx` - server error (e.g. unexpected crash, DB unavailable, etc)

### Expected Response Body

It may seem counterintuitive at first, but certain response bodies are expected of REST APIs depending on the operation. Some API developers may be tempted to send responses like "Item successfully removed" or "New user created successfully", but it is important to remember that it is the purpose of the HTTP status codes to indicate if the operation was successful or not.

Responding with the following records will allow your API users to easily verify the result of their API request:

- `GET  /collection` - _should return_ an array of matching resources
- `GET  /collection/:id` - _should return_ the single matching resource
- `POST /collection` - _should return_ the newly created resource
- `PUT  /collection/:id` - _should return_ the full resource that was updated
- `DEL  /collection/:id` - _should return_ an empty document

### Path Parameters vs Query Parameters

Generally speaking, **all path parameters should help to identify a particular resource or collection** while the **query parameters should express preferences about how the resource/collection is presented**.

From this perspective, a search term is a preference because it does not identify a unique class of resource or entity type. Likewise, pagination is a preference for which subset of the collection will be returned.

Here are some conventions for specifying certain preferences with query parameters:

- Pagination (`limit` and `offset`, `page`, etc)
  - `GET /articles?limit=25&offset=51` (get 25 articles, starting with the 51st article)
  - `GET /reviews?page=14` (assumes static page size)
- Sorting (`sortby` and `order`, `sort`, etc)
  - `GET /posts?sortby=popularity&order=ascending`
  - `GET /hotels?sortby=price&order=descending`
  - `GET /products?sort=rating_asc`
- Filtering (`category`, `tags`, or some other property)
  - `GET /companies?category=banking`
  - `GET /restaurants?tags=mexican,texmex,fast+food&min_rating=3.5`
  - `GET /posts?start_date=05-19-2017&end_date=08-11-2017`
- Searching (`search`, `query`, or `q`)
  - `GET /recipes?search=quinoa`
  - `GET /artists?query=hip+hop`
  - `GET /photos?q=puppies`
- Expansion
  - `GET /users?expand=repositories` (get users data and data for each repository--more than just the repository IDs)

### API Base URL (Location)

Location. Location. Location.

It's a relatively minor thing, but try to make your API accessible at as simple a URL as possible.

Generally speaking, you should make your API available in one of two locations:

- `https://yoursite.com/api/v1/` - if the server also handles non-API requests
- `https://api.yoursite.com/v1/` - if the API server is separate from the general-purpose web server

### Versioning

Note that the base URLs above include `/v1`. It is considered a best practice to ensure an API will continue to work as expected after it is published.

That way, if a developer creates an app that depends on `/v1` of your API, their app will continue to work as expected even after you have moved on to version 2 or 3 of your API.

Simply put, any changes that could break applications that use an API should instead happen in a new version of the API. This forces you to be purposeful and deliberate about changes and keeps your users happy by making sure you don't break the apps they worked so hard to build.

### Documentation

If you intend for your API to be used by the public, you will need to put some effort into making high quality documentation. Even the most brilliantly designed API is pointless if nobody knows how to use it.

Luckily, good documentation makes it easier for you to use as well. You may also find you're more likely to stick to good design practices when you thoroughly document your API.

Here are a few quick tips to consider:

- **Make the documentation freely available.** Don't require logins to view documentation or hide them in some hard-to-access part of your site.
- **Do not skimp on the examples.** Your sample requests/responses and sample code should not be simplified or truncated; show the full content. Make sure examples are formatted with proper indentation and code highlighting.
- **Explain what can go wrong.** Be sure to include information about possible error codes. Include troubleshooting tips for common problems/mistakes.
- **Don't rely on automatic generators for everything.** They can be a good starting point, but you should review the final docs critically and make modifications as appropriate.
- **Make it mobile/printer friendly.** This is related to making sure your docs are freely available. Some developers will love the option.
- **Let them see it in action.** Consider allowing users to make test API calls or see compelling demos. This will especially help with moving a developer from curiosity to experimentation to using your API.
