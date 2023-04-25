const express = require("express")
const { connectToMongoDb } = require("./connect")
const urlRoute = require("./routes/url")
const URL = require("./models/url")

const app = express()
const port = 8000

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
    .then(console.log("MongoDb connected"))

app.use(express.json())
app.use("/url",urlRoute)

app.get("/:shortid" , async (req,res) => {
    const shortid = req.params.shortid
    const entry = await URL.findOneAndUpdate({
        shortId: shortid
    }, {
        $push: {
            visitedHistory: {
                timestamp: Date.now()
            }
        }
    })
    if (entry) {
        res.redirect(entry.redirectUrl)
    } else {
        res.status(404).send("Not found")
    }
})

app.listen(port , () => console.log(`server started at:${port}`))