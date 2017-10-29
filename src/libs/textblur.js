var blocked_words = ["trump", "guns"];

$(document).ready(function(){
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
       var current = all[i];
       for(word in blocked_words) {
         setTimeout(test(current, blocked_words[word]), 1);
       }
  }
  function test(current, word) {
    if(current.textContent.indexOf(word) !== -1) {
      console.log(current.textContent);
      console.log(word)
      current.style.color = "transparent";
      current.style.textShadow = "0 0 30px rgba(0,0,0,1)";
    }
  }
});
