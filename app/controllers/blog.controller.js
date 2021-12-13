const db = require("../models");
const Blog = db.blogs;
const Op = db.Sequelize.Op;
// const EmailService = require('../email_service')


exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return
};
const blog = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author
  };
  Blog.create(blog)
  .then(data => {
    // EmailService.sendEmail(data);
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the blog."
    });
  });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Blog.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving blog."
        });
      });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Blog.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find blog with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving blog with id=" + id
        });
      });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Blog.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "blog was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update blog with id=${id}. Maybe blog was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating blog with id=" + id
        });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Blog.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "blog was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete blog with id=${id}. Maybe blog was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete blog with id=" + id
        });
      });
};
