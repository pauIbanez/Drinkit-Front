import styled from "styled-components";
import { backgroundBlue } from "./colors";

export const PageHolder = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${backgroundBlue};
`;

export const MainTitle = styled.h1`
  color: white;
  font-weight: 800;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px;
`;
