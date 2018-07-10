const convert = require('./convert');

test('Basic converting', function() {
  const source = '逢颱風來襲就去賣場大批採購排隊不過是湊熱鬧製造參與感沒有意義';
  const expected = '逢...颱風...來襲...就...去...賣場...大...批...採購...排隊...不過...是...湊熱鬧...製造...參與感...沒有...意義...';

  expect(convert(source)).toEqual(expected);
});
