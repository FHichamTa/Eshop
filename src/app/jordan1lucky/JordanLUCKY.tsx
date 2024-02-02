import React, { useState } from 'react';

const sneakersList = [
  {
    Marque: "Jordan",
    Type_de_produit: "Sneakers",
    Genre: "Homme",
    Couleur: "Vert",
    Référence: "DZ5485-031",
  },
];

const SneakersList = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
        <div>
            <p>La Air Jordan 1 Retro High OG "Lucky Green" incarne l'essence de l'audace et de l'élégance, fusionnant le patrimoine emblématique de la ligne Jordan avec une palette de couleurs vives et captivantes. Cette sneaker légendaire offre une interprétation contemporaine du design classique, capturant l'admiration des amateurs de sneakers et des passionnés de mode.</p>
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