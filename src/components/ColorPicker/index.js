import React from "react";
import styled from "styled-components";
import BoxColorPreview from "../BoxColorPreview";

const ColorPickerWrapperStyled = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 14em;
  margin-top: 1em;
`;

const RadioButtonStyled = styled.input`
  display: none;
`;

const ColorPicker = ({ colors = [], activeColor, setActiveColor }) => {

  if (!colors.length) return null;
  return (
    <ColorPickerWrapperStyled>
      {colors.map((color, i) => (
        <label key={i}>
          <RadioButtonStyled
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <BoxColorPreview color={color}/>
        </label>
      ))}
    </ColorPickerWrapperStyled>
  );
};

export default ColorPicker;
