// main.js

exercises = [
  {
    name : "Bench Press",
    target: "Spalle",   
    url: "https://www.youtube.com/shorts/i-gLOirnPaU"
  },
  {
    name: "calves",
    target: "calves",
    url: "https://www.youtube.com/shorts/OscsK8RMelQ"
  },
  {
    name: "placeholder",
    target: "placeholder",
    url: "https://www.google.com",
  }
]

function generateExerciseTable(exercises) {
  tbl = document.querySelector(".table-exercise");
  for (let i = 0; i < exercises.length; i++) {
    tbl.innerHTML += "<tr><td>" + exercises[i].name + "</td><td>" + exercises[i].target + "</td><td><a target=\"_blank\" href=" + exercises[i].url + "><img src=\"img/play.png\"></img></a></td></tr>";
  }
  a = tbl.innerHTML;
  console.log(a);
}

generateExerciseTable(exercises);
