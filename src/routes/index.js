exports.index = function(req, res) {
  res.render("index", {
      page: {
          title: "Sapna\'s Scarves"
      }
  });
};
