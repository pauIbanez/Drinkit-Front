import styled from "styled-components";
import { lightWhite } from "../../styles/colors";

interface Props {
  title: String;
  subtitle: String;
}

const HeaderHolder = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Header = ({ title, subtitle }: Props): JSX.Element => {
  return (
    <HeaderHolder>
      <Subtitle>{subtitle.toUpperCase()}</Subtitle>
      <Title>{title.toUpperCase()}</Title>
    </HeaderHolder>
  );
};

export default Header;
