module.exports = function (app) {

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }
}
