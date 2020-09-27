import React, { useState } from "react";
import styled from "styled-components";

export const Marks = (props) => {
  const [pressed, setPressed] = useState(true);
  const onChange = () => {
    setPressed(!pressed);
  };

  return (
    <Square onClick={onChange}>
      <Tick
        pressed={pressed}
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8L9 14"
          stroke="#B30064"
        stroke={props.color}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 3L9 14"
          stroke={props.color}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Tick>
    </Square>
  );
};

const Square = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #e8edf5;
  border: 1px solid #e6eaef;
  border-radius: 5px;
  width: 24px;
  height: 24px;
`;

const Tick = styled.svg`
  display: ${(props) => (props.pressed ? "block" : "none")};
`;

