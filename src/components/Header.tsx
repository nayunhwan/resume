import React, { useReducer } from "react";
import styled from "styled-components";

interface Props {
  resume: Resume;
}

const Header: React.FC<Props> = ({ resume }) => {
  return (
    <div>
      <h1>{resume.name.kor}</h1>
    </div>
  );
};

export default Header;
