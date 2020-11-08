if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb+srv://Nony:redcarpet@cluster0.fe0md.mongodb.net/rest_countries?retryWrites=true&w=majority",
    secret: "yoursecret",
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost:27017/rest_countries",
    secret: "yoursecret",
  };
}
