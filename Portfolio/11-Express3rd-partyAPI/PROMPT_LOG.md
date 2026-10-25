I used ChatGPT to understand how an Express form can call a third-party weather service and how an HTTP response arrives in chunks. I focused on connecting the city input, the API response fields, and the page returned to the user.

---

# Prompt 1:

How does the submitted city become part of the OpenWeather request URL, and why should it be encoded before it is added to the query string?

## AI suggestion:

Read the city from the parsed form body and encode it with `encodeURIComponent()` before placing it in the query string. This keeps spaces and other special characters from breaking the URL.

### My modifications:
I parsed URL-encoded form data, read `cityName`, and encoded it while building the weather request URL.

---

# Prompt 2:

Why does `https.get()` provide a response callback but the response body still needs `data` and `end` handlers?

## AI suggestion:

The callback provides the response stream, not necessarily the full body. The `data` event can fire multiple times, so append each chunk; the `end` event signals that the complete body is ready to parse.

### My modifications:
I collected the response chunks into a string and parsed the JSON after the response ended.

---

# Prompt 3:

How do I find the temperature, description, and icon in the nested JSON response, and what does `units=metric` change?

## AI suggestion:

Inspect the response structure: temperature is under `main.temp`, while the first weather entry contains `description` and `icon`. The metric units parameter asks the API to return temperature in Celsius.

### My modifications:
I read those fields from the parsed response and used the icon code in the weather image URL.

---

# Prompt 4:

Why should the API's HTTP status code be checked before assuming `main` and `weather` exist in the JSON response?

## AI suggestion:

An unsuccessful API response may have a different JSON shape, such as an error message instead of weather data. Check the status code first and return a useful error message before reading success-only fields.

### My modifications:
I checked for a non-200 status before using the temperature, description, and icon values, and displayed the API's error message.

---

# Prompt 5:

What is the difference between an API error response and a network error from `https.get()`, and why do they need separate handling?

## AI suggestion:

An API error is still an HTTP response, so it can be handled after the response arrives by checking its status. A connection error occurs on the request itself, so it is handled with the request's `error` event.

### My modifications:
I added one message for API responses that report an error and another for a failed connection to the service.

---

# Prompt 6:

Why should an API key come from an environment variable instead of being written directly into the source code?

## AI suggestion:

An environment variable keeps the secret out of the code and version history. Configure `OPENWEATHER_API_KEY` in the environment where the server runs, then read it with `process.env`.

### My modifications:
I read the key from `process.env.OPENWEATHER_API_KEY` and used it when constructing the request.
