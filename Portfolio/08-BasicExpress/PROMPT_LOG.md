I used ChatGPT to understand how an Express server receives a form submission and how middleware, routes, and responses fit together. The explanations helped me follow the BMI request from the HTML form to the calculation and back to the browser.

---

# Prompt 1:

What is middleware in Express, and why must the URL-encoded body parser run before the route that reads `req.body`?

## AI suggestion:

Middleware processes a request before it reaches a route handler. URL-encoded parsing reads the form body and makes its fields available on `req.body`, so it must be registered before the POST route uses those values.

### My modifications:
I registered the body parser before the routes and used the parsed weight and height in the calculation handler.

---

# Prompt 2:

How does the form's `action` and `method` connect the browser to `app.post('/calculate_bmi', ...)`?

## AI suggestion:

The form sends its named fields to the URL in `action` using the HTTP method in `method`. Express matches that method and path to the corresponding route, and each input's `name` becomes a key in the parsed request body.

### My modifications:
I set the form to submit a POST request to `/calculate_bmi` and gave the weight and height inputs names that match the server code.

---

# Prompt 3:

Why does the BMI formula multiply by 10,000 when height is entered in centimeters, and how is that related to the usual formula using meters?

## AI suggestion:

BMI is weight in kilograms divided by height in meters squared. Converting centimeters to meters divides height by 100; squaring that conversion divides by 10,000, so multiplying by 10,000 gives the equivalent result when the entered height is in centimeters.

### My modifications:
I used the centimeters version of the formula shown in the exercise and rounded the displayed result to two decimal places.

---

# Prompt 4:

Why convert the submitted strings with `Number()` and check `Number.isFinite()` before calculating? What cases can make a number invalid?

## AI suggestion:

Form values arrive as strings. Converting them makes the arithmetic explicit, and checking that both values are finite and positive prevents empty, non-numeric, infinite, or zero/negative values from producing an invalid result.

### My modifications:
I converted both values and returned a 400 response with a clear message if either input was not a finite positive number.

---

# Prompt 5:

What does `res.send()` do in this route, and why does the result include a link back to `/`?

## AI suggestion:

`res.send()` ends the request by sending the response to the browser. Including a link to `/` lets the user return to the form and calculate another BMI.

### My modifications:
I sent the calculated BMI in an HTML response and included a link back to the calculator page.
