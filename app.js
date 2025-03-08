const express = require("express");
const moviesRoutes = require("./routes/movies.routes");
const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/movies", moviesRoutes);
app.use("/api/users", usersRoutes);

module.exports = app;
