//import express from 'express'

const express = require("express")
const app = express()

app.get("/", () => {
  console.log("Hit the root route")
})
// app.post()
// app.put/patch
// app.delete

app.listen(5000, () => console.log("Running on port 5000"))