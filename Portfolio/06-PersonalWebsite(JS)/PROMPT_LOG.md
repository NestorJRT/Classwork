I used ChatGPT to understand how the browser form, JavaScript, and the DOM work together. I kept the existing page structure and used the explanations to clarify how submitted values become a new schedule row.

---

# Prompt 1:

How does `preventDefault()` change what happens when this form is submitted, and why do I need it before adding a row with JavaScript?

## AI suggestion:

A normal form submission reloads or navigates the page. Calling `event.preventDefault()` stops that browser behavior, so the handler can read the form values and update the current page instead.

### My modifications:
I kept the form's submit event and prevented the default navigation before building the new row.

---

# Prompt 2:

What does `FormData` return for text fields, a color input, and an unchecked checkbox? How can I tell whether the Free / busy checkbox was selected?

## AI suggestion:

`FormData` reads the named form controls. A checkbox is included only when checked, so `formData.has('free-busy')` can determine the selected status. The other fields can be retrieved by their `name` values.

### My modifications:
I used the field names from the HTML form and checked for the checkbox's presence to choose the status.

---

# Prompt 3:

How do I add user-entered values to a table safely, and why is `textContent` a better fit than putting them into an HTML string?

## AI suggestion:

Create a table row and cells with DOM methods, then assign user-provided values with `textContent`. This displays the values as text instead of interpreting them as markup.

### My modifications:
I built the row and its cells with `createElement`, filled the data cells with `textContent`, and appended the row to the schedule table body.

---

# Prompt 4:

Why does a date input need special handling before it can be displayed in a readable format, and what does adding `T00:00:00` to the date string do?

## AI suggestion:

A date input provides a date string in `YYYY-MM-DD` form. Creating a `Date` from that string with a local midnight time helps avoid a timezone shift when formatting it for display with `toLocaleDateString()`.

### My modifications:
I converted a non-empty date value to a localized display string and left the cell blank when no date was provided.

---

# Prompt 5:

How do the color flag and Free / Busy icon get added to the same row without mixing their markup with the form values?

## AI suggestion:

Create separate cells for the flag and status. Set the flag's color from the color input, and create an image whose source and alt text depend on the selected status.

### My modifications:
I added a colored dot and a status image in their own cells, then reset the form after appending the completed row.
