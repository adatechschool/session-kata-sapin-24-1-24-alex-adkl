function afficherEtoiles(nombre) {
  const etoile = "*";
  return etoile.repeat(nombre);
}

function afficherRectangle(hauteur, largeur) {
  const ligne = afficherEtoiles(largeur) + "\n";
  console.log(ligne.repeat(hauteur));
}

function afficherTriangleDroite(lignes) {
  for (let i = 0; i < lignes; i++) {
    console.log(afficherEtoiles(i) + "\\");
  }
}

function afficherTriangleGauche(lignes) {
  for (let i = 0; i < lignes; i++) {
    let espaces = " ".repeat(lignes - i);
    console.log(espaces + "/" + afficherEtoiles(i));
  }
}

function afficherPointeSapin(lignes, hauteur_etage) {
  console.log(" ".repeat(hauteur_etage + 1) + "+");
  for (let i = 0; i < lignes; i++) {
    let espaces = " ".repeat(hauteur_etage - i);
    console.log(
      espaces + "/" + afficherEtoiles(i) + "|" + afficherEtoiles(i) + "\\"
    );
  }
}

function afficherEtage(hauteur_etage, pointe_offset, espacement) {
  for (let i = 0; i < hauteur_etage; i++) {
    let espaces = " ".repeat(espacement - (i + pointe_offset + 1));
    console.log(
      espaces +
        "/" +
        afficherEtoiles(i + pointe_offset) +
        "|" +
        afficherEtoiles(i + pointe_offset) +
        "\\"
    );
  }
}

function afficherBois(nombre) {
  const bois = "#";
  return bois.repeat(nombre);
}

function afficherPied(hauteur, largeur, espacement) {
  const tronc = afficherBois(largeur) + "\n";
  let espaces = " ".repeat(espacement - 1);
  console.log((espaces + tronc).repeat(hauteur));
}

function afficherSapin(etages, hauteur_etage) {
  const espacement = hauteur_etage + etages - 1 + hauteur_etage; // emplacement pour centrer la pointe du sapin + etages + tronc

  console.log(" ".repeat(espacement) + "+"); // affiche la pointe du sapin

  // boucle qui affiche les étages
  for (let etage = 0; etage < etages; etage++) {
    afficherEtage(hauteur_etage, etage, espacement);
  }
  afficherPied(3, 3, espacement); //affiche le pied du sapin
}

//afficherEtage(3, 3, 3);
afficherSapin(3, 4);
afficherSapin(4, 3);
afficherSapin(5, 3);
// afficherPointeSapin(1, 1);
// afficherPointeSapin(2, 2);
// afficherPointeSapin(3, 3);

//afficherSapin(3, 3);

// afficherTriangleGauche(5);
// afficherTriangleDroite(5);

//afficherRectangle(5, 5);
// afficherEtoiles(2);
// afficherEtoiles(5);
