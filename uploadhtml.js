const fs = require("fs");
const axios = require("axios");

// read html file
const htmlContent = fs.readFileSync("output.html", "utf8");

// API URL given by interviewer
const API_URL =
  "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==";

// request body
const body = {
  content: htmlContent,
};

axios
  .post(API_URL, body, {
    headers: {
      api_token:
        "TvrDSpEEHxJVgfim9Gbqpw9ZZ5Vz2XwCFnPFqQ2DMFBl/A+ZI4PAfRO9qOGyG14nflFJ5n/8HuMsM2wiNzlBmT0QTuT1ktlNh0ueEqCKaRaSwygmVAbl3u5oKyyt3IYcKTLXz8XbxfYcXyG36rCFvA==",
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    console.log("Success:", res.data);
  })
  .catch((err) => {
    console.log("Error:", err.response.data);
  });
