const User = require('../../models/User');

module.exports = (app) => {
  app.get('/api/users', (req, res, next) => {
    User.find()
      .exec()
      .then((user) => res.json(user))
      .catch((err) => next(err));
  });

  app.post('/api/users', function (req, res) {
    const user = new User();
		console.log(req.body.fname);
		user.fname=req.body.fname;
		user.lanam=req.body.lname;
		user.email=req.body.email;
		user.password=req.body.password;
		user.permission=req.body.permission;
    user.save()
      .then(() => res.json(user))
      .catch((err) => next(err));
  });

  app.delete('/api/users/:id', function (req, res, next) {
    User.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((user) => res.json())
      .catch((err) => next(err));
  });


};
