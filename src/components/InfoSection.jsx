import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;

const Container = styled.div`
  padding: 3rem calc(100vw - 1300px) / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 760px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 760px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paraOne,
  paraTwo,
  buttonLabel,
  image,
  reverse
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paraOne}</p>
          <p>{paraTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
