/*
================
Break Sentence
================
Name :_____________

[INSTRUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
breakSentence('I am so amazed')
output: ['i', 'am', 'so', 'amazed']
*/
/*
STORE sentence WITH any STRING value
STORE formString WITH any STRING value
STORE result WITH empty Array

  FOR EACH character OF sentence
    IF character NOT EQUALS ' '           jika karakter bukan spasi atau karakter !== ' '
      APPEND formString with character    maka 
    ELSE IF character EQUALS ' ' OF index of sentence EQUALS length of sentence SUBSTRING
      PUSH result WITH formString         
      SET formString with empty STRING
  END FOR

DISPLAY result
*/
function breakSentence(sentence) {
  var formString = '';
  var result = [];
  
  for(var i = 0 ; i < sentence.length ; i++){
    if(sentence[i] !== ' '){
      formString = formString + sentence[i]
    }
    if(sentence[i] === ' ' || i === sentence.length-1){
      result.push(formString)
      formString = ''
    }
  }
  return result
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
