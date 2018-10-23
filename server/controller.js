let list = [];

const inventory = function(req, res) {
  req.app
    .get("db")
    .get_inventory()
    .then(response => {
      list.push(response);
      return res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const addProduct = function(req, res) {
  const { name, url, price } = req.body;
  console.log(req.body);
  req.app
    .get("db")
    .add_product(name, url, price)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};
module.exports = {
  inventory,
  addProduct
};
