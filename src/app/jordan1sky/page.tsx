"use client";
import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-lg bg-white">
      <div className="mb-4">
        <Link href="/"><button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Home</button></Link>
        <h1 className="text-2xl font-semibold mt-4">Air Jordan 1 Retro High OG "Lucky Green"</h1>
        <p className="mt-2">
          La Air Jordan 1 Retro High OG "Lucky Green" incarne l'essence de l'audace et de l'élégance, fusionnant le patrimoine emblématique de la ligne Jordan avec une palette de couleurs vives et captivantes. Cette sneaker légendaire offre une interprétation contemporaine du design classique, capturant l'admiration des amateurs de sneakers et des passionnés de mode.
        </p>
      </div>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all ${showDetails ? 'bg-gray-500' : ''}`}
        onClick={() => setShowDetails(!showDetails)}
      >
        Informations
      </button>
      {showDetails && sneakersList.map((sneaker, index) => (
        <div key={index} className="mt-4">
          <h2 className="text-lg font-semibold">{sneaker.Marque}</h2>
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