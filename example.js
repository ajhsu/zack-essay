const jieba = require('nodejieba');
const { removePunctuation } = require('./punctuation');

jieba.load({ dict: './dict.txt' });

const sourceString = '不可能通過啦！資進黨跟資方站在同一線';
const result = jieba.cut(removePunctuation(sourceString)).concat(['']);
console.log(result.join('...'));