const punctuationList = [
  ' ',
  '!',
  '！',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
  '<',
  '>',
  '❨',
  '❩',
  '❴',
  '❵',
  '⟨',
  '⟩',
  '’',
  '【',
  '】',
  '〔',
  '〕',
  '〘',
  '〙',
  ':',
  '：',
  ',',
  '，',
  '、',
  '‒',
  '~',
  '…',
  '.',
  '！',
  '。',
  '《',
  '》',
  '〈',
  '〉',
  '﹏',
  '＿',
  '～',
  '‐',
  '?',
  '？',
  '『',
  '』',
  '「',
  '」',
  '"',
  "'",
  ':',
  '；'
].map(c => `\\${c}`);

const testRegEx = new RegExp(`[${punctuationList.join('|')}]`, 'g');

function removePunctuation(input) {
  return input.replace(testRegEx, '');
}

module.exports = {
  removePunctuation
};
