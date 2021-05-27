var franc = require('franc');
var langs = require('langs');

const input = process.argv[2];
const langcode = franc(input);

try {
  const language = langs.where('3', langcode);
  console.log(`I think you are speaking ${language.name}`);
} catch (err) {
  console.log('An Error has occured');
}
