# DOCX to Document360 Uploader

This application reads a Microsoft Word document (`.docx`), converts it to HTML, and uploads it as a new article to Document360 using the Document360 API.

## Approach

The application is built using Node.js and follows these steps:
1.  **DOCX Conversion**: It uses the `mammoth` library to read the `.docx` file and convert its content into clean HTML, preserving formatting like headings, lists, tables, and hyperlinks.
2.  **API Integration**: It uses the `axios` library to send a `POST` request to the Document360 API's `/articles` endpoint.
3.  **Configuration**: It uses the `dotenv` library to manage environment variables for sensitive information like API keys and IDs.

## Programming Language and Tools

*   **Language**: JavaScript (Node.js)
*   **Libraries**:
    *   `mammoth`: For `.docx` to HTML conversion.
    *   `axios`: For making HTTP requests to the Document360 API.
    *   `dotenv`: For managing environment variables.

## Steps to Run the Application

1.  **Clone the repository and install dependencies**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    npm install
    ```

2.  **Create and configure the `.env` file**:
    Create a file named `.env` in the root of the project and add the following variables:
    ```
    DOCUMENT360_API_KEY=YOUR_API_KEY
    DOCUMENT360_USER_ID=YOUR_USER_ID
    DOCUMENT360_PROJECT_VERSION_ID=YOUR_PROJECT_VERSION_ID
    ```
    Replace `YOUR_API_KEY`, `YOUR_USER_ID`, and `YOUR_PROJECT_VERSION_ID` with your actual Document360 credentials.

3.  **Place the Word document**:
    Make sure the Word document you want to upload is named `sampledox.docx` and is located in the root of the project directory.

4.  **Run the application**:
    ```bash
    node app.js
    ```
    The script will:
    *   Convert `sampledox.docx` to HTML and save it as `output.html`.
    *   Upload the generated HTML to Document360 as a new article.
    *   Log the API response to the console.

## Deliverables

*   **Source Code**: The complete source code is included in this repository.
*   **Generated HTML Output**: The `output.html` file is generated when the application is run.
*   **Screenshot**: A screenshot of the successfully created article in Document360 should be taken after running the application with valid credentials.
