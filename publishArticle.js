const fs = require("fs");
const axios = require("axios");

// Read HTML file
const htmlContent = fs.readFileSync("output.html", "utf8");

// API details
const ARTICLE_ID = "YOUR_ARTICLE_ID";
const LANG = "en";
const API_TOKEN =
  "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==";

const url = `https://api.document360.io/v2/Articles/${ARTICLE_ID}/${LANG}/publish`;

const body = {
  content: htmlContent,
  user_id: "YOUR_USER_ID",
  version_number: 1,
  publish_message: "Publishing migrated HTML document",
};

axios
  .post(url, body, {
    headers: {
      api_token: API_TOKEN,
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response.data);
  });
