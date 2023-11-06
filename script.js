// Sélectionnez le tableau par son ID
const tableau = document.getElementById("myTable");
// Sélectionne les <tr> dans le tableau
// const lignes = tableau.querySelectorAll("tr");
// Sélectionne tous les éléments <td> dans le tableau
const cellules = tableau.querySelectorAll("td");

cellules.forEach((cellule) => {
  if (cellules == 0) {
    cellule++;
  } else {
    // cellule--;
  }
  cellule.textContent = "Je suis une cellule !";
});
