let button = document.querySelector(".button"); // Bouton
let liste = document.querySelector(".list"); // Liste
let input = document.querySelector(".text"); // Input
let listeEnCours = document.querySelector(".enCours");

/*
 * Evènement d'ajout de tâche
 */
button.addEventListener("click", function () {
  let task = document.createElement("li"); // Creation du li
  let deleteButton = document.createElement("button"); // Création du bouton de suppression
  let transfererButton = document.createElement("button");
  let modifierButton = document.createElement("button");

  deleteButton.innerText = "X"; // Ajout du texte du bouton de suppression
  transfererButton.innerText = ">";
  modifierButton.innerText = "Modifier";

  task.innerText = input.value; // Ajout de la valeur de l'input dans le li
  task.appendChild(deleteButton); // Ajout du bouton de suppression du li
  task.appendChild(transfererButton);
  task.appendChild(modifierButton);

  transfererButton.addEventListener("click", function () {
    listeEnCours.appendChild(task);
    transfererButton.remove();
  });

  modifierButton.addEventListener("click", function () {
    let modification = prompt("Veuillez modifier la tâche");
    task.innerText = modification;
    task.appendChild(deleteButton); // Ajout du bouton de suppression du li
    task.appendChild(transfererButton);
    task.appendChild(modifierButton);
  });

  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  liste.appendChild(task); // Ajout du li dans la liste
  input.value = ""; // Réinitlialisation de la valeur de l'input
});

/*const buttons = document.querySelectorAll(".test");

buttons.addEventListener("click", function () {
  console.log("test");
});

buttons = document.querySelectorAll(".test").forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    console.log("test");
  });
});*/
