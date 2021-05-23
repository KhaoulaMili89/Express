console.log("Intro to Express");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  let hours = new Date().getHours();
  let day = new Date().toDateString().substring(0, 3);
  //console.log(day,hours)
  if (hours < 9 || hours > 17 || day === "Sun" || day === "Sat") {
    return res.sendFile(__dirname + "/public/photo_erreur.html");
  } else next();
});
app.use(express.json());

app.use(express.static("public"));

const port = 5000;
app.listen(port, (err) => {
  err ? console.log : console.log(`server is running on port ${port}`);
});
