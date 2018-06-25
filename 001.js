/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.

*/
/*
STORE str WITH any STRING value
STORE newStr WITH any STRING value

FOR EACH character of str           // Perulangan
  IF character EQUALS '1'
    APPEND newStr with i            // APPEND adalah menambahkan
  ELSE IF character EQUALS '4'
    APPEND newStr with a
  ELSE IF character EQUALS '3'
    APPEND newStr with e
  ELSE IF character EQUALS '7'
    APPEND newStr with u
  ELSE IF character EQUALS '0'
    APPEND newStr with o
  ELSE
    APPEND newStr with character
END FOR

DISPLAY newStr    
*/                  // = mendefinisikan, == hanya mengecek nilainya, === mengeceknya nilai dan tipe data
function numberLetters (str) {
  var newStr = '';
  for(var i = 0 ; i < str.length ; i++){
    if(str[i] === '1'){
      newStr = newStr + 'i';
    }else if(str[i] === '4'){
      newStr = newStr + 'a'
    }else if(str[i] === '3'){
      newStr = newStr + 'e'
    }else if(str[i] === '7'){
      newStr = newStr + 'u'
    }else if(str[i] === '0'){
      newStr = newStr + 'o'
    }else{
      newStr = newStr + str[i]
    }
  }
  return newStr
}

// Test cases

console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); 
