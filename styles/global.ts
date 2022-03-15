import styled from "styled-components";
import { lightWhite, mainTeal } from "./colors";
import { globalPageBottomPadding } from "./variables";

export const PageHolder = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${({ color }) => color};
  padding-bottom: ${globalPageBottomPadding}px;
`;

export const MainTitle = styled.h1`
  color: white;
  font-weight: 800;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px;
`;

export const Tips = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
`;

export const Linkedin = styled.a`
  color: ${mainTeal};
  text-decoration: none;
  margin: 0;
`;

export const CenteredContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
  position: relative;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 290px;
  gap: 17px;
`;

export const Back = styled.a`
  color: ${lightWhite};
  text-decoration: none;
  font-size: 20px;
  z-index: 3;
`;
