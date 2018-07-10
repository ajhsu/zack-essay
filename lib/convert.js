const path = require('path');
const jieba = require('nodejieba');
const { removePunctuation } = require('./punctuation');

jieba.load({ dict: path.resolve(__dirname, './dict.txt') });

function convert(sourceString) {
  return jieba
    .cut(removePunctuation(sourceString))
    .concat([''])
    .join('...');
}

module.exports = convert;
