import React from "react";
import "../App.css";
import Axios from 'axios'
import { Form } from "react-bootstrap";
import ImportFoto from "../img/AddFoto.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditEventP = () => {
    const navigate = useNavigate();

    const { id } = useParams()

    const [selectedFile, setSelectedFile] = React.useState(null);
    const handleFileSelect = (e) => {
      setSelectedFile(e.target.files[0]);
    //   console.log(e.target.files[0])
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
          formData.append('image', selectedFile);
          const response = await Axios.patch(`http://localhost:5000/api/event/avatar/${id}`, formData, {withCredentials: true });
          console.log(response);
      };
  
    const [isLoading, setLoading] = React.useState(false);

    const [title, setTitle] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    const [type, setType] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [tickets_count, setTicketsCount] = React.useState('')


    
    React.useEffect(() => {
        const fetchGet = async () => {
        setLoading(true)
        try{
            const response = await Axios.get(`http://localhost:5000/api/event/${id}`, {withCredentials: true})
            setTitle(response.data.info.title)
            setAddress(response.data.info.address)
            setDescription(response.data.info.description)
            setType(response.data.info.type)
            setEndDate(response.data.info.endDate)
            setStartDate(response.data.info.startDate)
            setPrice(response.data.info.price)
            setTicketsCount(response.data.info.tickets_count)   

        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }}
        fetchGet();
    }, []);


    const addEmployee = (e) => {
        Axios.patch('http://localhost:5000/api/event/update/', {
            title, description, type, startDate, endDate, address, price, id, tickets_count
        }, { withCredentials: true }).then((res) => {
            console.log(res)  
            window.location.href = "/main"  
        }); navigate('/main', { replace: true })
    }

    return isLoading ? <></> : (
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <div class="menu">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>
                                        <div class="row">
                                            <img src={ImportFoto} className="ImportFoto1"></img>
                                        </div>
                                    </Form.Label>
                                    <Form.Control
                                        className="d-none"
                                        type="file"
                                        onChange={handleFileSelect}
                                        
                                    />
                                </Form.Group>
                                <button className="myButton" type="submit" onClick={() => {
                                    }} >Upload</button>
                            </Form>
                        </div>
                    </div>
                    <div class="col-12  col-md-9">
                        <div class="AddProduct">
                            <div class="col-md-9">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="AddProductInput"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="AddProductInput"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />

                                <input
                                    type="text"
                                    placeholder="Count of tickets"
                                    className="AddProductInput"
                                    value={tickets_count}
                                    onChange={e => setTicketsCount(e.target.value)}
                                />
                            </div>
                            <div class="col-md-9">
                                <input
                                    type="number"
                                    placeholder="Price $"
                                    className="AddProductInput"
                                    id="Price"
                                    value={price}
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
                                    value={startDate}
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
                                    value={endDate}
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
                                <textarea cols="30" rows="3" class="AddDescription" value={description}
                                onChange={e => setDescription(e.target.value)}
                                    ></textarea>
                            </div>
                            <div class="col-md-9">
                                <input className="myCrEventBut" type="button" value="Publish" onClick={() => {
                                    addEmployee()
                                    
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditEventP;