$(function(){
  apply();
  appSize();
  $(window).resize(function(){
    apply();
    appSize();
  })
});
function apply() {
  var winX=$("html").width()
  var winY=$("html").height()
  var scale=winX/winY
  if(scale<=1815/970){
    $("html").css({"font-size":winX/18.15});
  }else{
    $("html").css({"font-size":winY/9.70});
  } 
}
//禁止横屏
function appSize(){
  if($(window).width()<$(window).height()){
    $(".appSize").show();
  }else{
    $(".appSize").hide();
  }
}
/**
 * aes加密
 * @type {any}
 */
var key = CryptoJS.enc.Hex.parse("ef7222e04230f8d68ccf5a3ab39895cf");
var iv = CryptoJS.enc.Hex.parse("0000000000000000");
var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
/**
 * aes加密函数
 * @param {[type]} word [加密字段]
 */
function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encryptResult = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  var words = encryptResult.ciphertext.words;
  var sigBytes = encryptResult.ciphertext.sigBytes;
  // Convert
  var base64Chars = [];
  for (var i = 0; i < sigBytes; i += 3) {
      var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
      var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
      var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

      for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
          base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
      }
  }
  // Add padding
  var paddingChar = map.charAt(64);
  if (paddingChar) {
      while (base64Chars.length % 4) {
          base64Chars.push(paddingChar);
      }
  }
  return base64Chars.join('');
}
/**
 * aes解密函数
 * @param {[type]} word [解密字段]
 */
function Decrypt (word) {
  var srcs = word.toString()
  var decryptResult = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decryptResult.toString(CryptoJS.enc.Utf8)
}