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
module.exports = {
  inventory
};
