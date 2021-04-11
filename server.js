const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop/public"));

app.use(require("./Develop/routes/htmlRoutes"));

app.use(require("./Develop/routes/apiRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  