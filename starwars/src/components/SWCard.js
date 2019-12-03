import React from "react";
import styled from "styled-components";


const Card = styled.div`
  width: 350px;
  height: 250px;
  font-size: 15px;
  color: black;
  background: sandybrown;
  margin: 10px;
  border-radius: 30px;
  
  &:hover {
    color: steelblue;
    background: wheat;

 }
`;

const SWCard = props => {
    return (
    <div className="star-card" key={props.id}>
        <Card>
          <h2>{props.name}</h2>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Weight: {props.weight}</p>
          <p>Birth Year: {props.birth_year}</p>
        </Card>
    </div>
      
    );
  };
  
  export default SWCard;
    