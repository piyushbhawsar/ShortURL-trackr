const shortid = require("shortid")
const URL = require("../models/url")

async function handleGenerateNewShortUrl(req,res) {
    const body = req.body 
    if(!body.url) return res.status(400).json({ error:"url is required"})
    const shortId = shortid(4)
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url  ,
        visitedHistory: [] 
    })
    return res.json({ id:shortId }) 
}   

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({ shortId  })
    return res.json({ totalClicks: result.visitedHistory.length , analytics:result.visitedHistory})
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}