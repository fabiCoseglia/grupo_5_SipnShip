const db = require('../database/models');

module.exports = {

  index: (req, res) => {
    const categories = db.Category.findAll();

    const products = db.Product.findAll({
      include : ['brand','section','category']
  })

  Promise.all([categories, products])
  .then(([categories,products]) => {
    return res.render("index", { categories, products,
      novelty:products.filter(x=>x.section.id===1),
      offers:products.filter(x=>x.section.id===2),
      bent:products.filter(x=>x.section.id===3),  });
  });
  },


  admin: (req, res) => {
    const products=db.Product.findAll({
      include : ['brand','section','category']
  })
  const users=db.User.findAll({
    include : ['rol']
})
  Promise.all([products,users])
  .then(([products,users]) => {
    return res.render("admin", { products,users });
  });
  },

  search: (req, res) => {
    const keywords = req.query.keywords;

    db.Product.findAll({
      include : ['brand','section','category']
  })
  .then(products => {
    if (keywords) {
      const product = products.filter((product) => {
        return product.name.toLowerCase().includes(keywords.toLowerCase());
      });
      res.render("results", { products: product, keywords });
    }
    if(req.params.id){
      const product = products.filter((product) => {
        return product.category.id===Number(req.params.id);
      });
      res.render("results", { products: product, keywords });
    }
    

    res.render("results", { products });
  })
}

}