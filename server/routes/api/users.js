const User = require('../../models/User');

module.exports = (app) => {
  app.get('/api/users', (req, res, next) => {
    User.find()
      .exec()
      .then((user) => res.json(user))
      .catch((err) => next(err));
  });

  app.post('/api/users', function (req, res, next) {
    const user = new User();

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
