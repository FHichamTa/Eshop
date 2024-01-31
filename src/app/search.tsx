import { useState, Dispatch, SetStateAction } from "react";
import "./global.css";
import { SearchBar } from "./searchbar"
import { ResultsList } from "./ResultsList"
import Link from 'next/link';

function Search() {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div className="Search">
      <div>
        <button>
          <Link href="/page">Home</Link>
        </button>
        </div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
      </div>
      <ResultsList results={results} /> 
    </div>
  );
}

export default Search;