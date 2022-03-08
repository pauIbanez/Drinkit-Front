import styled from "styled-components";
import { backgroundBlue } from "./colors";
import { globalPageHorizontalPadding } from "./variables";

export const PageHolder = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${backgroundBlue};
  padding: 0 ${globalPageHorizontalPadding};
`;
