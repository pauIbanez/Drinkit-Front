import styled from "styled-components";
import { lightWhite, sectionBlue } from "../../styles/colors";
import { globalFooterHeight } from "../../styles/variables";

export interface PiramideFooterProps {
  isLeader: boolean;
}

const FooterHolder = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: ${globalFooterHeight};

  background-color: ${sectionBlue};
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
`;

const PiramideFooter = ({ isLeader }: PiramideFooterProps): JSX.Element => {
  return (
    <FooterHolder>
      {isLeader && (
        <>
          <p>is Leader</p>
          <p>test</p>
        </>
      )}
    </FooterHolder>
  );
};

export default PiramideFooter;
