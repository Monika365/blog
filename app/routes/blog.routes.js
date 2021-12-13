module.exports = app => {
const Blogs = require("../controllers/blog.controller");
var router = require("express").Router();
router.post("/", Blogs.create)

router.get("/", Blogs.findAll)

router.get('/:id',Blogs.findOne)

router.put('/:id',Blogs.update);


router.delete("/:id",Blogs.delete);

app.use('/api/Blogs',router);
};
