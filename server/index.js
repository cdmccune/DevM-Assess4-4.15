const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliment, getFortune, getFortunes, deleteFortune, updateFortune, createFortune} = require(`./controller`)



app.get("/api/compliment", getCompliment);
app.get("/api/fortune/random", getFortune)
app.get("/api/fortune", getFortunes)
app.delete("/api/fortune/:id", deleteFortune)
app.put("/api/fortune/:id", updateFortune)
app.post("/api/fortune", createFortune)



app.listen(4000, () => console.log("Server running on 4000"));
