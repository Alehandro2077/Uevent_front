import React from "react";
import "../App.css";
import Axios from 'axios'
import { Form } from "react-bootstrap";
import ImportFoto from "../img/AddFoto.png";

import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [type, setType] = React.useState('master_class')
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  const [adress, setAdress] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [tickets_count, setTicketsCount] = React.useState('')

  const addEmployee = (e) => {
    Axios.post('http://localhost:5000/api/event/create', {
        title, description, type, startDate, endDate, adress, price, tickets_count
    }, {withCredentials: true}).then((res) => {
      window.location.href = "/main"
        console.log(res)
    }); navigate('/main', { replace: true })
}   

    console.log(type)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Use selectedFile to upload the photo to the server
  };
  return (
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="menu">
              
            </div>
          </div>
          <div class="col-12  col-md-9">
            <div class="AddProduct">
              <div class="col-md-9">
                <input
                  type="text"
                  placeholder="Title"
                  className="AddProductInput"
                  onChange={e => setTitle(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="AddProductInput"
                  onChange={e => setAdress(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Count of tickets"
                  className="AddProductInput"
                  onChange={e => setTicketsCount(e.target.value)}
                />
              </div>
              <div class="col-md-9">
                <input
                  type="number"
                  placeholder="Price $"
                  className="AddProductInput"
                  id="Price"
                  onChange={e => setPrice(e.target.value)}
                />
                
              </div>
              <div class="col-md-9">
                <div class="NameSelect">
                  <div class="row">
                    <div class="col-md-3">
                      <p>Start date</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
              <input class="custom-select"
                  type="date"
                  placeholder="End date"
                  className="AddProductInput"
                  onChange={e => setStartDate(e.target.value)}
                />
              </div>
              <div class="col-md-9">
                <div class="NameSelect">
                  <div class="row">
                    <div class="col-md-3">
                      <p>End date</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
              <input class="custom-select"
                  type="date"
                  placeholder="End date"
                  className="AddProductInput"
                  onChange={e => setEndDate(e.target.value)}
                />
              </div>
              <div class="col-md-9">
                <div class="NameSelect">
                  <div class="row">
                    <div class="col-md-3">
                      <p>Type</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <select class="custom-select" onChange={e => {
                  const options = [...e.target.selectedOptions];
                  const values = options.map(option => option.value);
                  setType(values[0]);
                }}>
                  <option value="master_class">Master class</option>
                  <option value="training">Business training</option>
                  <option value="discoveries">Discoveries</option>
                  <option value="seminar">Seminar</option>
                  <option value="concerts">Concert</option>
                  <option value="festivals">Festival</option>
                </select>
              </div>
              <div class="col-md-9">
                <p class="AddDescriptionP">Description</p>
                <textarea cols="30" rows="3" class="AddDescription"
                onChange={e => setDescription(e.target.value)}></textarea>
              </div>
              <div class="col-md-9">
                <input className="myCrEventBut" type="button" value="Publish" onClick={() => {
                  addEmployee()
                        }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateEvent;
