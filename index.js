// (mostly) copied (and then inverted) from
// https://github.com/ecto/morse/blob/master/map.js

module.exports = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.--.-': 'Á', // A with acute accent
  '.-.-': 'Ä',  // A with diaeresis
  '..-..': 'É', // E with acute accent
  '--.--': 'Ñ', // N with tilde
  '---.': 'Ö',  // O with diaeresis
  '..--': 'Ü',  // U with diaeresis
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '--..--': ',',  // comma
  '.-.-.-': '.',  // period
  '..--..': '?',  // question mark
  '-.-.-': ';',   // semicolon
  '---...': ':',  // colon
  '-..-.': '/',   // slash
  '-....-': '-',  // dash
  '.----.': "'",  // apostrophe
  '-.--.': '(',   // open parenthesis
  '-.--.-': ')',  // close parenthesis
  '..--.-': '_',  // underline
  '.--.-.': '@',  // at symbol from http://www.learnmorsecode.com/
};

