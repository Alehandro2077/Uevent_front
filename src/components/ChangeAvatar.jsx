import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Axios from 'axios'

const ChangeAvatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  console.log(selectedFile)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedFile)
    const formData = new FormData();
      formData.append('image', selectedFile);

      console.log(formData);
      const response = await Axios.patch('http://localhost:5000/api/user/avatar', formData, {withCredentials: true });
      console.log(response);
      window.location.href = "/Profile"
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" name="image" onChange={handleFileSelect} />
        </Form.Group>
        <button className="myButton" type="submit" >Upload</button>
      </Form>
    </>
  );
};

export default ChangeAvatar;
