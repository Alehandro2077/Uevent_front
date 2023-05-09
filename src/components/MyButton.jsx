import { Button } from "react-bootstrap";
import React from "react";
import styled from "styled-components";



const MyButton = (props) => {
  return (
    <CustomButton variant="primary" type="submit">
      {props.text}
    </CustomButton>
  );
}
const CustomButton = styled(Button)`
  background-color: rgb(96, 179, 75);
`;
export default MyButton