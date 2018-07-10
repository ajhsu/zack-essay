const jieba = require('nodejieba');
const { removePunctuation } = require('./punctuation');

jieba.load({ dict: './dict.txt' });

/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.convert = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');

  const defaultString = '你沒有輸入任何文字';
  const sourceString = req.query.q || defaultString;
  const outputString = jieba
    .cut(removePunctuation(sourceString))
    .concat([''])
    .join('...');

  res.json({
    result: outputString
  });
};