const express = require("express")
const shortid = require("shortid")
const mongoose = require("mongoose");
const Url = require('../model/urlSchema.js')

async function getAllUrls(req, res) {
    const allUrl = await Url.find({})
    if (allUrl.length == 0) return res.send("no data found")
    res.send(allUrl)
}
async function createNewUrl(req, res) {
    const url = req.body.siteUrl;
    if (!url) return res.send("body is empty")
    const newUrl = await Url.create({
        shortId: shortid(),
        siteUrl: url,
        totalRequest: []
    })
    res.send(newUrl)
}
async function countRequest(req, res) {
    const id = req.params.id;
    const result = await Url.findOneAndUpdate({ shortId: id }, {
        $push: { totalRequest: { timeStamp: Date.now() } }
    })
    console.log(result)
    if (!result) return res.status(404).send("not found");
    res.redirect(result.siteUrl);
}
async function deleteUrl(req, res) {
    const id = req.params.id;
    const site = req.body.siteUrl;
    if (!site) return res.status(404).send("body is empty")
    const updateUrl = await Url.findByIdAndUpdate(id, {
        siteUrl: site
    });
    if (!updateUrl) return res.status(404).send("not found");
    res.send(updateUrl);
}
async function updateUrl(req, res) {
    const id = req.params.id;
    const delUrl = await Url.findByIdAndRemove(id);
    if (!delUrl) return res.status(404).send("not found");
    res.send(delUrl);
}

module.exports ={
    updateUrl,
    deleteUrl,
    getAllUrls,
    createNewUrl,
    countRequest
}
