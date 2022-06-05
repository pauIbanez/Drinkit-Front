import Link from "next/link";
import styled from "styled-components";
import { lightWhite, mainTeal, sectionBlue } from "../../styles/colors";
import { Back } from "../../styles/global";
import {
  globalFooterHeight,
  globalPageHorizontalPadding,
} from "../../styles/variables";
import IconButton from "../Buttons/IconButton/IconButton";
import TextIconButton from "../Buttons/TextIconButton/TextIconButton";

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

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
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
          <ButtonHolder>
            <TextIconButton
              color={mainTeal}
              icon="/icons/clink.png"
              size={{ height: 45, width: 127 }}
              text="Start"
            />

            <IconButton
              alt="lobby settings"
              color={mainTeal}
              icon="/icons/config.png"
              size={{ height: 45, width: 45 }}
            />
          </ButtonHolder>
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
