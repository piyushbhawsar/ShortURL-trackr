# URL Shortener with Analytics

A simple URL shortener with analytics built using Node.js, Express, and MongoDB. It allows you to shorten URLs and track the number of clicks on each shortened URL, as well as the location of the users who clicked on it.

## Installation

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file with the following variables:
   - `MONGODB_URI` - the connection URI for your MongoDB database.
   - `PORT` - the port number for the server (default is 8888).
4. Run `npm start` to start the server.

## Usage

### Shorten a URL

Send a `POST` request to `/url` with the following JSON payload:

```json
{
  "url": "https://example.com"
}
```

The server will respond with a shortened URL in the following format:

```arduino
http://localhost:8888/{shortId}
```
## Track Analytics
To track the number of clicks and location of the users who clicked on a shortened URL, send a GET request to /{shortId}.

The server will redirect the request to the original URL and update the visitedHistory field in the MongoDB document for that URL with the timestamp and IP address of the user who clicked on it.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

``` Feel free to customize it to fit your project's needs.
```



