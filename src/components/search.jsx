import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`You searched for: ${searchTerm}`);
  };

  return (
    <div className="relative">
      <button onClick={() => setSearchTerm('')} className="text-white text-lg">
        Search
      </button>
      <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg p-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded-md border border-gray-300"
        />
        <button onClick={handleSearch} className="w-full mt-2 p-2 bg-blue-600 text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
