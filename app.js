require("dotenv/config");


const express = require("express");


const app = express();

require("./config")(app);

const projectName = "axios-characters-api";


const index = require("./routes/index.routes");
app.use("/", index);

const charactersRoutes = require("./routes/characters.routes");
app.use("/characters", charactersRoutes);

require("./error-handling")(app);

module.exports = app;
