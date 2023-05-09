import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar.jsx";
import SubEvent from "../components/MyTicketsFavorites.jsx";
import Scroll from "../components/Scroll.jsx";

const Favorites = () => {
    return (
      <main>
        <div class="container">
          <div class="row">
          <SearchBar />
            <div class="col-12  col-md-9">
              <div class="product">
                <SubEvent />
                <SubEvent />
                <SubEvent />
              </div>
            </div>
            {/* <Scroll /> */}
          </div>
        </div>
      </main>
    );
}
export default Favorites;
