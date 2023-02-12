import React from "react";
import "../body/Search.css";
// import Search2 from "./Search2";

function Search() {
  return (
    <div>
      <div className="s012">
        <form>
          <fieldset>
            <legend>Search Vendors</legend>
          </fieldset>
          <div className="inner-form">
            <header>
              <div className="travel-type-wrap">
                <div className="item active">
                  <div className="group-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                  </div>
                  <span>HOTEL ONLY</span>
                </div>
                <div className="item">
                  <div className="group-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                  </div>
                  <span>HOTEL + FLIGHT</span>
                </div>
                <div className="item">
                  <div className="group-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    ></svg>
                  </div>
                  <span>HOTEL + FLIGHT + CAR</span>
                </div>
                <div className="item">
                  <div className="group-icon">
                    <svg
                      className="svg-inline--fa fa-building fa-w-14"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="building"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    ></svg>
                    <svg
                      className="svg-inline--fa fa-car fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="car"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    ></svg>
                  </div>
                  <span>HOTEL + CAR</span>
                </div>
              </div>
            </header>
           {/* {<Search2/>} */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
