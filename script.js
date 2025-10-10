// --- 1 Création d'un tableau de citations JJB ---
// Chaque élément entre guillemets est une citation stockée dans un "tableau".
const lessons = [
  "Arm Drag = Tirage de bras.",
  "Closed Guard = Garde fermée",
  "Le kimura, c’est le roi des soumissions en JJB.",
  "Toreando Pass = Passage de garde “torreado”",
  "Armbar (Armlock) = Clé de bras"
];


// --- 2 On récupère les éléments HTML ---
// Permet à JS de "cibler" des éléments du document HTML grâce à leur ID.
const lessonElement = document.getElementById("lesson");      // <p id="quote">
const button = document.getElementById("new-lesson");        // <button id="new-quote">


// --- 3 Fonction qui choisit une citation au hasard ---
function getRandomLesson() {
  // Math.random() → génère un nombre entre 0 et 1 (ex: 0.65)
  // On le multiplie par leson.length (le nombre total de citations)
  // Math.floor() → arrondit à l'entier inférieur
  const randomIndex = Math.floor(Math.random() * lessons.length);

  // On renvoie la leçon correspondant à cet index
  return lessons[randomIndex];
}


// --- 4 Quand on clique sur le bouton ---
// addEventListener écoute un "événement" (ici : le clic)
button.addEventListener("click", () => {
  // On appelle la fonction qui choisit une citation aléatoire
  const newLesson = getRandomLesson();

  // On remplace le texte du paragraphe <p id="quote">
  lessonElement.textContent = newLesson;
});
