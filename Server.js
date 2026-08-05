const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home API
app.get("/", (req, res) => {
    res.send("Nhial Portfolio Website Server");
});


// Contact form API
app.post("/contact", (req, res) => {

    const {name, email, message} = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        status: "Success",
        message: "Thank you for contacting me!"
    });

});


app.listen(5000, () => {
    console.log("Node.js server running on port 5000");
});
