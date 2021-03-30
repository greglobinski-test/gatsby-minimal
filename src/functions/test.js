// src/functions/test.js

export default (req, res) => {
  console.log(req.body);
  res.status(200).send({
    message: 'Hello, you.',
    date: Date.now(),
  });
};
