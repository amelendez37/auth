import Joi from 'joi';

const schema = {
  username: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
};

export const validate = (req, res, next) => {
  const payload = {
    username: req.body.username,
    password: req.body.password
  }
  const checkValid = (data, config) => {
    config = config || {};
    const { error } = Joi.validate(data, schema, config);
    if (error) {
      console.log('Invalid Input', error);
      res.status(400).send();
    } else {
      next(); // input valid
    }
  };
  checkValid(payload);
};