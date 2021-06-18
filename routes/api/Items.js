const express = require('express');
const router = express.Router();

// Our Item Model
const Item = require('../../models/Item');


// @route GET api/items
// @desc Get all items
// @access Public
// No need to put /api/items here since we're using the router
router.get('/', (req, res) =>{
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a post
// @access Public (usually private if we have authentication)
// No need to put /api/items here since we're using the router
router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete an Item
// @access Public (usually private if we have authentication)
// :id is a placeholder for our id
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(item => {
        item.remove().then(() => res.json({ success: true}))
    })
    .catch((err) => res.status(404).json({ success: false}));
});

module.exports = router;