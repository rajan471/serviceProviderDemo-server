const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" })
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlEncoder = bodyParser.urlencoded({ extended: true });
const jsonEncoder = bodyParser.json();
app.use(urlEncoder);
app.use(jsonEncoder);
app.use(helmet());
app.use(cors());
app.options('*', cors())

app.use('/assets', express.static('public'))
require("./routes")(app);

app.listen(process.env.PORT, ()=>{
    console.log(`listing to port ${process.env.PORT}`)
});
