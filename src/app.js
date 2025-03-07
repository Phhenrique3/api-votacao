const exepress = require("express");
const router = require("./routes");

const app = exepress();
router(app);

app.get("/teste", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
