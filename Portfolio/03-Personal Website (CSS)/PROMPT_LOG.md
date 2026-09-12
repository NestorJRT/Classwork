I used ChatGPT to understand some CSS and layout techniques. I reviewed the suggestions, tested them in my website, and adapted them to my existing code and color palette.

---

# Prompt 1:

How can I give every even section a different background color and style my form with a dotted border, rounded inputs, and matching colors?

## AI suggestio:

main .section-block:nth-of-type(even) {
  background-color: #91bde6;
}

form {
  border: 6px dotted #EAF6F6;
  background-color: #a8ccee;
  width: 50%;
  margin: 30px auto;
  padding: 30px;
}

input, select, textarea {
  border-radius: 10px;
  background-color: #98aaba;
}

### My modifications:
I added the section-block class to the sections on both pages and adjusted the colors, padding, border radius, and form styling to match my website.

---

# Prompt 2:

How can I replace my Heroes table with a Meet the Team section similar to the W3Schools example?

## AI suggestion:

AI suggested using a structure with .row, .column, .card, and .container instead of the original table.

<div class="column">
  <div class="card">
    <img src="images/steveJobs.webp" alt="Steve Jobs">
    <div class="container">
      <h2>Steve Jobs</h2>
      <p class="title">Entrepreneur</p>
    </div>
  </div>
</div>

### My modifications:
I adapted the structure to use the people, images, dates, professions, and information that were already in my original website.

---

# Prompt 3:

How can I add one static mountain and two sticky cloud images to my page using CSS?

## AI suggestion:

.mountain {
  position: static;
  width: 700px;
  height: auto;
}

.cloud {
  position: sticky;
  width: 350px;
  height: auto;
}

### My modifications:
I changed the size and position of the images and used separate classes for each cloud to place one on each side of the page.