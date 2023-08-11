const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const { corsOptions } = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

// this is used to set the port to the port declared in the env file
const dotenv = require("dotenv").config();
connectDb();
const app = express();
// this is used to set the port to the port declared in the env file
const port = process.env.PORT || 5000;

app.use(logger);

// cors Access-Control-Allow-Credentials
app.use(credentials);
// cross origin resource sharing
app.use(cors(corsOptions));

// middleware parses this URL-encoded data and makes it available in the req.body object of your route handlers.
app.use(express.urlencoded({ extended: false }));
// middle ware for transforming message
// to be in the form of a json
app.use(express.json());

// middle ware for cookies
app.use(cookieParser());
// middle ware for handling routing
app.use("/api/users", require("./routes/userRoutes"));
app.use("/refresh", require("./routes/refreshTokenRoute"));
app.use("/logout", require("./routes/logOutRoute"));

// middle ware for handling error code
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Chibuike's server running on port ${port}`);
});
