import Link from "next/link";
import styled from "styled-components";
import { lightWhite, sectionBlue } from "../../styles/colors";
import { Back } from "../../styles/global";
import {
  globalFooterHeight,
  globalPageHorizontalPadding,
} from "../../styles/variables";

export interface PiramideFooterProps {
  isLeader: boolean;
  onLeaveClick(): void;
}

interface LeaveButtonProps {
  onClick(): void;
}

const FooterHolder = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${globalPageHorizontalPadding} 0 ${globalPageHorizontalPadding};

  height: ${globalFooterHeight};

  background-color: ${sectionBlue};
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
`;

const WaitingText = styled.p`
  margin: 0;
  color: ${lightWhite};
  font-size: 13px;
`;

export const LeaveButton = ({ onClick }: LeaveButtonProps): JSX.Element => {
  return (
    <Link href={"/"} passHref>
      <Back onClick={onClick}>Leave</Back>
    </Link>
  );
};

const PiramideFooter = ({
  isLeader,
  onLeaveClick,
}: PiramideFooterProps): JSX.Element => {
  return (
    <FooterHolder>
      {isLeader ? (
        <>
          <LeaveButton onClick={onLeaveClick} />
          <p>test</p>
        </>
      ) : (
        <>
          <LeaveButton onClick={onLeaveClick} />
          <WaitingText> Waiting for leader to start...</WaitingText>
        </>
      )}
    </FooterHolder>
  );
};

export default PiramideFooter;
