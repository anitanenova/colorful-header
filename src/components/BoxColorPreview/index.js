import React from "react";
import styled from "styled-components";

const BoxColorPreviewStyled = styled.span`
background-color: ${props => props.color};
width: 1.5em;
height: 1.5em;
border: 2px solid black;
display: inline-block;

&:hover {
  transform: scale(1.5);
  border: 1px solid black;
  transition: 0.2s;
}
`;

const BoxColorPreview = ({ color }) => {
  return <BoxColorPreviewStyled color={color}/>;
};

export default BoxColorPreview;
