const express = require('express');
const app = express();
const port = 3000;

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle POST request for form submission
app.post('/submit-form', (req, res) => {
  const { fname, password, country } = req.body;

  console.log({ fname, password, country });

  // Construct an HTML string to display the submitted form data
  const formDataHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Form data</title>
    </head>
    <body>
      <h1>Submitted form data</h1>
      <p>Full Name: ${fname}</p>
      <p>Password: ${password}</p>
      <p>Country: ${country}</p>
    </body>
    </html>
  `;

  //Sends the constructed HTML string as the response and displays the submitted form data.
  res.send(formDataHtml);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});