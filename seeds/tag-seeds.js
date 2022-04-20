const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'skin care',
  },
  {
    tag_name: 'hair care',
  },
  {
    tag_name: 'candles',
  },
  {
    tag_name: 'pillows',
  },
  {
    tag_name: 'notebook',
  },
  {
    tag_name: 'sheet music',
  },
  {
    tag_name: 'shirt',
  },
  {
    tag_name: 'clothes',
  },
  {
    tag_name: 'neutral',
  },
  {
    tag_name: 'print',
  },
  {
    tag_name: 'black and white',
  },
  {
    tag_name: 'portrait',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
