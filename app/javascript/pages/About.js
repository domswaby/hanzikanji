import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center
  width: 100%;
`;


function About() {
  return (
    <Wrapper>
      <div>Testing</div>
    </Wrapper>
  );
}

export default About;
