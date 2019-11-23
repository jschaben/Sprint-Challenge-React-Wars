import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 450px;
  height: 250px;
  font-size: 20px;
  color: white;
  background: grey;
  margin: 10px;
  border-radius: 20px;

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
        </Card>
      </div>
    );
  };
  
  export default SWCard;
    