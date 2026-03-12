const fs = require("fs");
const axios = require("axios");

// read html file
const htmlContent = fs.readFileSync("output.html", "utf8");

// API URL given by interviewer
const API_URL = "https://apihub.document360.io/v2/Articles";

// request body
const body = {
  content: htmlContent,
  project_version_id: "8de99e99-94af-4315-9047-8fd5f90b2f8d", // add your project version id here
  user_id: "67890", // add your user id here
  category_id: "12345", // add your category id here
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
    if (err.response) {
      console.log("Error:", err.response.data);
    } else {
      console.log("Error:", err.message);
    }
  });
