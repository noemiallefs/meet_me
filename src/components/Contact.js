import React from "react";
import styled from 'styled-components';
import { Address } from "@styled-icons/entypo";
import { Mail } from "@styled-icons/foundation";
import { PhoneIphone } from "@styled-icons/material-sharp";

import { COLORS } from "../styles/Colors";

const SectionContact = styled.section`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 5px;
  background: linear-gradient(${COLORS.blackJet}, ${COLORS.black});
  color: ${COLORS.whiteSnow};
`
const Grid = styled.div`
  display: flex;
  gap: 10px;
  max-width: 90%;
  margin: 50px auto;
  align-items: stretch;
  grid-area: content;
  justify-content: center;

  @media (max-width: 1504px) {
    flex-direction: column;
  }
  @media (min-width: 698px) {
    max-width: 57%;
  }
  @media (min-width: 1504px) {
    max-width: 79%;
  }
`;
const CardWrapper = styled.div`
  background-color: ${COLORS.whiteSnow};
  color: ${COLORS.black};
  width: 100%;
  height: auto;
  border-radius: 2px;
`;
const CardHeader = styled.header`
  margin: 10% 30% 10% 30%;
  border-bottom: 2px solid ${COLORS.primary};
  h3 {
    font-size: 13.5px;
  }
`;
const CardBody = styled.div`
  margin: 0 20% 15% 20%;
  line-height: 30px;
  font-size: 11.5pt;
  a {
    color: ${COLORS.black};
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: none;
      color: ${COLORS.primaryIntense};
    }
  }
`;

const StyledAddress = styled(Address)`
  color: ${COLORS.primary};
  width: 25px;
  height: 25px;
  margin-bottom: 7px;
`
const StyledMail = styled(Mail)`
  color: ${COLORS.primary};
  width: 25px;
  height: 25px;
  margin-bottom: 7px;
`
const StyledPhone = styled(PhoneIphone)`
  color: ${COLORS.primary};
  width: 25px;
  height: 25px;
  margin-bottom: 7px;
`

const Contact = () => {
  return (
    <SectionContact>
      <Grid>
        <CardWrapper>
          <CardHeader>
            <StyledAddress />
            <h3>Address</h3>
          </CardHeader>
          <CardBody>
            EcoPast (GI-1553), Universidade de Santiago de Compostela, 15782, Spain.
          </CardBody>
        </CardWrapper>
        <CardWrapper>
          <CardHeader>
            <StyledMail />
            <h3>e-mail</h3>
          </CardHeader>
          <CardBody>
            <a href={`mailto: noemiallefs@gmail.com`}>noemiallefs@gmail.com</a>
          </CardBody>
        </CardWrapper>
        <CardWrapper>
          <CardHeader>
            <StyledPhone />
            <h3>Phone</h3>
          </CardHeader>
          <CardBody>
            +34 672 617 442
          </CardBody>
        </CardWrapper>
      </Grid>
    </SectionContact>
  );
}

export default Contact;