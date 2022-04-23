const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// GET all tags
router.get('/', async (req, res) => {
  Tag.findAll({
  // be sure to include its associated Product data
  include: [
    Product,
    // {
    //   model: Tag,
    //   through: ProductTag
    // }
    ] 
  }).then(tags => res.json(tags))

  .catch((err) => {
    res.status(500).json(err);
  })
});

// GET a single tag by its `id`
router.get('/:id', async (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // JOIN with ProductTag, using the Product through table
      // be sure to include its associated Product data
      include: [
        {
          model: Product,
          through: ProductTag
        },
      ],
    }).then(tag => res.json(tag))

    .catch ((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  });

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!tagData) {
      res.status(404).json({ message: 'No tag found!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
