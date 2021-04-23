import React from 'react'
import styled from 'styled-components';


const RefreshButtonStyled = styled.button`
border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 2em;
    color: ${props => props.color};
    `;

const RefreshButton = ({ cb , color}) => {
  return <RefreshButtonStyled onClick={cb} color={color}>&#8634;</RefreshButtonStyled>
}

export default React.memo(RefreshButton);