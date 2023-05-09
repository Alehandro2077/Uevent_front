import React from 'react';
import '../App.css';
import MyButton from "../components/MyButton.jsx"
import {Link} from "react-router-dom"



const SearchBar = () =>
{   
  const [title, setTitle] = React.useState('');
        return (
          <div class="col-12 col-md-3">
            <div class="menu">
              <div class="row">
                <div class="col-md-10">
                  <input
                    class="MenuInput"
                    type="text"
                    placeholder="Default input"
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                <div class="col-md-2">
                  <Link to={`/search/${title}`} ><button className="myButton">Search</button></Link>
                </div>
              </div>
              
            </div>
          </div>
        );
}
export default SearchBar;