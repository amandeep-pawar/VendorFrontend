import React from "react";
import "../body/Search2.css";

function Search2() {
  return (
   <div>
     
        <div className="element"> 
         { <h1 className="twinkle">Search Vendors</h1>}
      <div class="search-container">
        <div class="location-area">
          <input type="text" placeholder="Enter location" />
        </div>
        <div class="text-area">
          <input type="text" placeholder="Search Vendors Here" />
        </div>
        <div class="filter-area">
          <select>
            <option>Filter 1</option>
            <option>Filter 2</option>
            <option>Filter 3</option>
          </select>
        </div>
        <div class="search-button">
          <button>Search</button>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Search2;
