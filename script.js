// --- 1 Création d'un tableau de lessons sur le JJB ---
// Chaque élément entre guillemets est une lesson stockée dans un "tableau".
const lessons = [
"Montée (Mount, Tate Shiho Gatame): La position de mount (ou montée) en JJB est une position dominante où un combattant est assis sur le torse de son adversaire, contrôlant efficacement ses mouvements. Cette position permet d’appliquer des étranglements ou des clés articulaires tout en limitant les possibilités d’évasion de l’adversaire.",

"Garde fermée (Closed guard) = La garde fermée est une position où le pratiquant en bas entoure la taille de son adversaire avec ses jambes croisées, permettant de le contrôler et de préparer des attaques efficaces. C’est la première garde apprise en JJB, offrant à la fois défense et nombreuses options offensives.",
  
"La kimura (Ude Garami): C'est une clé d'épaule en jiu-jitsu brésilien qui consiste à saisir le poignet de l'adversaire et à plier son bras derrière son dos, exerçant une torsion douloureuse pour forcer la soumission. Cette technique polyvalente, souvent apprise depuis la garde fermée, a été popularisée par le judoka Masahiko Kimura lors d'un combat légendaire contre Helio Gracie.",

"Juji Gatame (Clé de Bras, Armbar, Armlock): Le Juji Gatame est une clé de bras en croix, technique de soumission qui vise à hyper-étendre le coude de l’adversaire pour provoquer sa douleur et sa soumission. C’est une technique emblématique en judo et jiu-jitsu, utilisée dès les débuts du combat au sol.",
  
"Toreando Pass = Passage de garde “torreado: Le Torreando Pass est une technique rapide et dynamique qui consiste à contrôler les jambes de l'adversaire pour passer sa garde latéralement, en imitant les mouvements d’un toréador. Ce passage s’effectue en saisissant les jambes (généralement au niveau des genoux) et en déplaçant rapidement son corps pour arriver en contrôle latéral”",
];

// --- On récupère les éléments HTML ---
const lessonElement = document.getElementById("lesson");    // <p id="lesson">
const button = document.getElementById("new-lesson");       // <button id="new-lesson">

// on commence à la 1ère leçon
let currentIndex = 0;

// --- Quand on clique sur le bouton on passe à la leçon suivante ---

// addEventListener écoute un "événement" (ici : le clic)
button.addEventListener("click", () => {

 // Affiche la leçon actuelle
lessonElement.textContent = lessons[currentIndex];

// on passe à la leçon suivante
currentIndex++;

// Si on a atteint la fin
  if (currentIndex >= lessons.length) {

    // On revient au début 
    currentIndex = 0; 
  }
});
