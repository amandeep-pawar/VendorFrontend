import React from "react";
import Navbar from "../header/Navbar";
// import Search from "../body/Search";

import Search2 from "../body/Search2";
import Card from "../body/Card";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <Search /> */}

      <Search2 /><br/>
      <Card/>
    </div>
  );
}

export default Home;
