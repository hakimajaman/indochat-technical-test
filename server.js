const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const cors = require("cors");

app.use(cors());

app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.listen(PORT, () =>
  console.log("App is running now, yeeee! Alhamdulillah!")
);
