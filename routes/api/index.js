const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

// add prefix of `/pizzas` to routes created in `pizza-routes.js`

module.exports = router;