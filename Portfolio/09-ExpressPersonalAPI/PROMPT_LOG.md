I used ChatGPT to understand how Express routes, EJS templates, and in-memory arrays work together in this API exercise. I focused on the difference between rendering a page for the browser and returning JSON for an API client.

---

# Prompt 1:

How does Express use EJS when the template files have an `.html` extension, and what is the difference between `res.render()` and `res.sendFile()`?

## AI suggestion:

Register EJS as the engine for the `.html` extension and point Express at the template directory. `res.render()` evaluates EJS tags and passes data into the template; `res.sendFile()` serves a file without rendering template variables.

### My modifications:
I configured the HTML extension to use EJS, set the views directory, and rendered the index template with the names and tasks arrays.

---

# Prompt 2:

A form submits a name with GET, so why does the route read `req.query.name` while a POST form usually uses `req.body`?

## AI suggestion:

A GET form encodes its named fields in the URL query string, which Express exposes through `req.query`. A POST form sends the fields in the request body, which must be parsed by middleware before reading `req.body`.

### My modifications:
I read the greeting name from the query string and configured URL-encoded body parsing for the task form.

---

# Prompt 3:

How can the same EJS template show a new greeting, preserve the full list of names, and conditionally display an error message?

## AI suggestion:

Pass the current data to `res.render()` as locals. EJS can test whether a value exists before showing a section, and a loop can render every item in an array.

### My modifications:
I passed the names and tasks arrays to the index template and used EJS conditions and loops for the greeting, error, and lists.

---

# Prompt 4:

Why is a person's link based on an array index, and how should the route handle an index that is negative, not an integer, or outside the array?

## AI suggestion:

The URL parameter identifies the item's position in the in-memory array. Convert it to a number, validate that it is an integer within the array bounds, then pass an error to the next handler when it is invalid.

### My modifications:
I validated the index before rendering the personalized page and added an error middleware that re-renders the index with the error message.

---

# Prompt 5:

Why do the task form and its delete/up/down controls use POST routes, while `/task` can return JSON with GET?

## AI suggestion:

POST requests are used here for actions that change the task list. GET requests retrieve data without changing it, so the JSON route can return the current list. After a browser form action, redirecting to `/` displays the updated page.

### My modifications:
I added and changed tasks through POST routes, redirected back to the index after each action, and returned the current task array as JSON from the GET route.

---

# Prompt 6:

What does the array destructuring assignment do when moving a task up or down, and how do the boundary checks prevent invalid swaps?

## AI suggestion:

The destructuring assignment swaps the two neighboring array values without a temporary variable. The index checks ensure there is a neighbor in the requested direction before performing the swap.

### My modifications:
I added separate up and down handlers that check the list boundaries before swapping adjacent tasks.
