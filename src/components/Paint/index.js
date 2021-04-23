import React, { useState, useEffect, useRef, useCallback } from "react";
import Title from "../Title";
import ColorPicker from "../ColorPicker";
import randomColor from "randomcolor";
import styled from "styled-components";
import useWindowSize from '../WindowSize'
import Canvas from "../Canvas";
import RefreshButton from "../RefreshButton";

const ContentWrapperStyled = styled.div`
  margin: 1em 0 0 4em;
`;

const HeaderStyled = styled.header`
border-top: 10px solid ${props => props.activeColor};
border-bottom: 1px solid ${props => props.activeColor};
padding-bottom: 1em;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 1em 4em;
`;

const Paint = () => {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((res) => res.json())
      .then((res) => {
        setColors(res.colors.map((color) => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);
  useEffect(getColors, []);

  const [visible, setVisible] = useState(false)
  let timeoutId = useRef()
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisible(true)
    clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => setVisible(false), 500)
  })
  return (
    <>
      <HeaderStyled activeColor={activeColor}>
        <ContentWrapperStyled>
          <Title />
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </ContentWrapperStyled>

        <RefreshButton cb={getColors} color={activeColor} />
      </HeaderStyled>
      {activeColor && (
        <Canvas color={activeColor} height={window.innerHeight} />
      )}
      <div className={`window-size ${visible ? '' : 'hidden'}`}>
        {windowWidth} x {windowHeight}
      </div>
    </>
  );
};

export default Paint;
