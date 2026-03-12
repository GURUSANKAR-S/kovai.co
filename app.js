const mammoth = require("mammoth");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

// Function to convert DOCX to HTML
async function convertDocxToHTML() {
  try {
    const result = await mammoth.convertToHtml({
      path: "sampledox.docx",
    });

    const html = result.value;

    // Save HTML file
    fs.writeFileSync("output.html", html);

    console.log("HTML generated successfully");

    return html;
  } catch (error) {
    console.error("Error converting DOCX:", error);
  }
}

// Upload HTML to Document360
async function uploadToDocument360(htmlContent) {
  try {
    console.log("USER ID:", process.env.DOCUMENT360_USER_ID);
    console.log("PROJECT VERSION ID:", process.env.DOCUMENT360_PROJECT_VERSION_ID);
    const payload = {
        title: "Kovai Assignment Article",
        content: htmlContent,
        userId: process.env.DOCUMENT360_USER_ID,
        projectVersionId: process.env.DOCUMENT360_PROJECT_VERSION_ID,
      };
    console.log("Payload:", payload);
    const response = await axios.post(
      "https://apihub.document360.io/v2/articles",
      payload,
      {
        headers: {
          "api_token": process.env.DOCUMENT360_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Document360 Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error uploading article:", error.response?.data || error);
  }
}

async function main() {
    try {
        const htmlContent = await convertDocxToHTML();
        await uploadToDocument360(htmlContent);
        console.log("Article uploaded successfully to Document360");
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}

main();
