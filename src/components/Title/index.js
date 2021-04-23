import React, { useState } from "react";
import styled from "styled-components";
import useWindowSize from "../WindowSize";


const TitleStyled = styled.input`
  border: none;
  outline: none;
  font-size: 1.5em;
  font-weight: 700;
`;

const Title = () => {
  const [windowWidth, windowHeight] = useWindowSize()

  const [title, setTitle] = useState("");
  return (
    <label>
      <TitleStyled
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
    </label>
  );
};

export default React.memo(Title);
