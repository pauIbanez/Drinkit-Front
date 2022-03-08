import styled from "styled-components";
import { lightWhite, sectionBlue } from "../../styles/colors";
import { globalHeaderHeight } from "../../styles/variables";

export interface HeaderProps {
  title: String;
  subtitle: String;
}

const HeaderHolder = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: ${globalHeaderHeight};

  background-color: ${sectionBlue};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h3`
  margin: 0;

  font-weight: 600;
  font-size: 14px;

  color: ${lightWhite};
`;
const Title = styled.h2`
  color: white;

  font-weight: 800;
  font-size: 20px;

  margin: 0;
`;

const Header = ({ title, subtitle }: HeaderProps): JSX.Element => {
  return (
    <HeaderHolder>
      <Subtitle>{subtitle.toUpperCase()}</Subtitle>
      <Title>{title.toUpperCase()}</Title>
    </HeaderHolder>
  );
};

export default Header;
