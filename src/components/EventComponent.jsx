import React from "react";
import "../App.css";
import CarFoto from "../img/LogoNight.png";
import { Link } from "react-router-dom";
class EventComonent extends React.Component {
  render() {
    return (
<div class="Profile">
            <div class="col-md-9">
                <div class="row" >
                    <div class="col-md-3">
                        <img class="CarFoto" src={CarFoto} alt=""/>
                    </div>
                    <div class="col-md-7" >
                       <Link to="/productOwerview" class='Title'>Bomb Party</Link>
                        <div class='ProductProperty'>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-2" >
                                            {/* <img class="IcoFoto" src={Distance} alt="wwfwf"/> */}
                                        </div>
                                        <div class="col-md-8">
                                            <p>Type: Caraoke</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2" >
                                            {/* <img class="IcoFoto" src={Fuel} alt="wwfwf"/> */}
                                        </div>
                                        <div class="col-md-8">
                                            <p>Petrol</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-2" >
                                            {/* <img class="IcoFoto" src={Transmission} alt="wwfwf"/> */}
                                        </div>
                                        <div class="col-md-8">
                                            <p>Automatic</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2" >
                                            {/* <img class="IcoFoto" src={V} alt="wwfwf"/> */}
                                        </div>
                                        <div class="col-md-8">
                                            <p>2.5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="col-md-2">
                            <p class= "Price">20 000$</p>
                            <br/>
                            {/* <img class="LikeBtn" src={Like}></img> */}
                            
   
                    </div>    

                                  
                </div>
            </div>
        </div>
    );
  }
}
export default EventComonent;

{
  /* <div class="col-md-4">
                <img class="CarFoto" src={CarFoto} alt=""/>
                    <h5>Mustang Mach-e 2021</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-3" >
                                    <img class="IcoFoto" src={Distance} alt="wwfwf"/>
                                </div>
                                <div class="col-md-9">
                                    <p>80t km</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3" >
                                    <img class="IcoFoto" src={Fuel} alt="wwfwf"/>
                                </div>
                                <div class="col-md-9">
                                    <p>Petrol</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-3" >
                                    <img class="IcoFoto" src={Transmission} alt="wwfwf"/>
                                </div>
                                <div class="col-md-9">
                                    <p>Automatic</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3" >
                                    <img class="IcoFoto" src={V} alt="wwfwf"/>
                                </div>
                                <div class="col-md-9">
                                    <p>2.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> */
}
