const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const connectDB = require('./server/database/');
const dotenv = require('dotenv');
dotenv.config({
  path: 'config.env'
})
const morgan = require('morgan');
const path = require('path');
connectDB();
app.use(express.json());
app.use(morgan('tiny'));
app.disable('etag');
app.use(express.urlencoded({
  extended: true
})) 
app.use('/', require('./server/routes/router'))
// app.use(uploads)

app.use(express.static(path.join(__dirname , 'client/build')));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname ,'client/build/','index.html')
  );
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("listening on port 5000");
});