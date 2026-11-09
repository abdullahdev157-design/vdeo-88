const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello Worlduiu!");
});
app.get("/abd/:slug", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`slug: ${req.params.slug}`);
//   res.send("Hello Worlduiu!");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
