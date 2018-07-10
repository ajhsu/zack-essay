const jieba = require('nodejieba');
const { removePunctuation } = require('./punctuation');

jieba.load({ dict: './dict.txt' });

function convert(sourceString) {
  return jieba
    .cut(removePunctuation(sourceString))
    .concat([''])
    .join('...');
}

module.exports = convert;
