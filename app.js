const express = require("express");
const mongoose = require("mongoose");
const mongo = require("mongo");
const MongoClient = mongo.MongoClient;
const URI =
  "mongodb+srv://Nony:redcarpet@cluster0.fe0md.mongodb.net/rest_countries?retryWrites=true&w=majority";
// var client;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

/** Initialise the application and setting up Express */
const app = express();

/** Define some Middleware */

/** Form Data Middleware */
//  What this piece of code here does is to help me to create an object from the from input. It'll help me create an object directly without the hassle of setting variables and creating my own object. Now that it is set to "false" it will not produce the object and will return undefined.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

/** JSON Body Middleware */
app.use(bodyParser.json());

/** CORS Middleware */
app.use(cors());

var mongoClient = new MongoClient(URI, {
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true,
  useNewUrlParser: true,
});
mongoClient.connect((err, db) => {
  // returns db connection
  if (err != null) {
    console.log(err);
    return;
  }
  client = db;
});

//  Apply Path Modules
//  Setting up the static directory
/** What this is basically saying is that whatever we have as a public folder will be our static directory. So we are setting the starting directory of this application as a public folder */
app.use(express.static(path.join(__dirname, "public")));

//  Use the passport Middleware
app.use(passport.initialize());

//  Bring in the passport Strategy
require("./config/passport")(passport);

//  Bring in the Database Config and connect with the database
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => console.log(`Unable to connect with the database ${err}`));

// app.get('/', (req, res) => {
//   return res.send('<h1>Hello World</h1>');
// });

//  Bring in the Users route
const users = require("./routes/api/users");
app.use("/api/users", users);

//  And this code is simply saying is that if we get any other type of request apart from the one from the api/users we want to send the index.html file in the public folder
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
