import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./SearchBar.css"


export const SearchBar = ({setResults}: {setResults: any}) => {
    const [input, setInput] = useState("");

    const Data = (value: React.SetStateAction<any>) => {
      fetch('').then((response) => response.json()).then((data) => {
          const results = data.filter((data: any) => value && data && data.name.toLowerCase().includes(value));
          setResults(results);
      });
  };
  
    const handleChange = (value: React.SetStateAction<any>) => {
        setInput(value);
        Data(value);
    }


  return (
    <div className='input-wrapper'>SearchBar
    <FaSearch id="search-icon"/>
    <input 
    placeholder='Chercher un produit' 
    value={input} 
    onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}
