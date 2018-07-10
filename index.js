const jieba = require('nodejieba');
jieba.load({ dict: './dict.txt' });

function removePunctuation(input) {
  return input.replace(/[，|、|。|！]/g, '');
}

/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.convert = (req, res) => {
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
