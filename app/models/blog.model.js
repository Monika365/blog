module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      }
    });
  
    return Blog;
  };