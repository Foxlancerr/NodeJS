const express = require("express")
const { countRequest, getAllUrls, deleteUrl, updateUrl, createNewUrl } = require("../control/urlControl.js")
const mongoose = require("mongoose");


const router = express.Router()

router.route('/')
    .get(getAllUrls)
    .post(createNewUrl)

router.route('/:id')
    .get(countRequest)
    .delete(deleteUrl)
    .put(updateUrl)

module.exports = router;