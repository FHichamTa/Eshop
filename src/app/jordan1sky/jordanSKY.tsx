import React, { useState } from 'react';

const sneakersList = [
  {
    Marque: "Jordan",
    Type_de_produit: "Sneakers",
    Genre: "Homme",
    Couleur: "Violet et Blanc",
    Référence: "DZ5485-105",
  },
];

const SneakersList = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
        <div>
            <p>La Air Jordan 1 Retro High OG "Sky J Mauve" incarne l'élégance audacieuse et l'héritage emblématique de la ligne Jordan. Cette chaussure de basket-ball emblématique marie parfaitement le style contemporain et l'hommage à l'héritage historique de la marque. Arborant une palette de couleurs captivante, le Mauve céleste, qui évoque les nuances du crépuscule, enveloppe la tige en cuir premium, conférant une esthétique raffinée et moderne.</p>
        </div>
      <button onClick={() => setShowDetails(!showDetails)}>Informations</button>
      {showDetails && sneakersList.map((sneaker, index) => (
        <div key={index}>
          <h2>{sneaker.Marque}</h2>
          <p>Type de produit: {sneaker.Type_de_produit}</p>
          <p>Genre: {sneaker.Genre}</p>
          <p>Couleur: {sneaker.Couleur}</p>
          <p>Référence: {sneaker.Référence}</p>
          
        </div>
      ))}
    </div>
  );
};

export default SneakersList;