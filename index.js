// const express = require('express');
const bodyParser = require("body-parser");

const express = require("express");
let db = require("./db");

const cors = require("cors");
const app = express();

// // parse application/json
app.use(bodyParser.json());
// //parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type", "Authorization", "userid"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);
const CONFIG = require("./config/config");

// app.use('/api/users',users);

const users = require("./routes/user.route");

app.use(express.json());
app.use("/api/User", users);

const port = CONFIG.port || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// // protected route
// app.get('/protected', passport.authenticate('jwt', { session: false }), function(req, res) {
//   res.json('Success! You can now see this without a token.');
// });

// // start app
// app.listen(3000, function() {
//   console.log('Express is running on port 3000');
// });
