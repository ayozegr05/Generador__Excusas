var who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird"
  ];
  
  var action = [
    "ate",
    "peed",
    "crushed",
    "broke"
  ];
  
  var what = [
    "my homework",
    "the keys",
    "the car"
  ];
  
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  
  // Generamos una excusa aleatoria
  function generateExcuse() {
    var randomWho = who[Math.floor(Math.random() * who.length)];
    var randomaction = action[Math.floor(Math.random() * action.length)];
    var randomwhat = what[Math.floor(Math.random() * what.length)];
    var randomwhen = when[Math.floor(Math.random() * when.length)];
  
    var excuse = randomWho + " " + randomaction + " " + randomwhat + " " + randomwhen + ".";
    document.getElementById("excuse").textContent = excuse;
  }
  
  // Generamos una excusa automáticamente al cargar la página
  window.addEventListener("load", generateExcuse);
  
  // Generamos una excusa automáticamente al cargar la página
  window.addEventListener("load", generateExcuse);
  
  // Generamos una excusa automáticamente al hacer clic en cualquier botón
  document.addEventListener("click", generateExcuse);
  
  // Generamos una excusa automáticamente al pulsar cualquier tecla
  document.addEventListener("keydown", generateExcuse);
  