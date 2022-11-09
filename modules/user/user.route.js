const router  = require("express").Router();



router.get('/', (req, res, next) => {

  res.json({ name: "ahmed" })
})

router.get('/about', (req, res, next) => {

  res.json({ name: "about" })
})
module.exports=router