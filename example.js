const jieba = require('nodejieba');
jieba.load({ dict: './dict.txt' });
const sourceString = '不可能通過啦！資進黨跟資方站在同一線';
const result = jieba
  .cut(sourceString.replace(/[，|、|。|！]/g, ''))
  .concat(['']);
console.log(result.join('...'));
