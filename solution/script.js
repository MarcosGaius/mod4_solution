var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function() {
  console.log("ta na funcao");
  console.log(names.length);

  for(var i = 0; i < names.length; i++){
    var firstLetter = names[i].charAt(0).toLowerCase();

    if(firstLetter === "j"){
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
