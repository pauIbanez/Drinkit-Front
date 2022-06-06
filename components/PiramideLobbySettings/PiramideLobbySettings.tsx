import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { backgroundBlue, lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import PiramideLobby from "../../types/PiramideLobby";

interface PiramideLobbySettingsProps {
  lobbySettings: PiramideLobby;
  wsInstance: WebSocket;
  onBackgroundClick(): void;
}

const Closer = styled.section`
  display: flex;
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.45);
`;

const Popup = styled.div`
  background-color: ${backgroundBlue};
  border-radius: ${globalRadius};
  color: white;

  height: 543px;
  width: 329px;

  overflow-y: scroll;
  padding: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin: 0;
`;

const SettingHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 10px 0;
`;

const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SettingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SettingTitle = styled.h4`
  margin: 0;
  font-size: 14px;
`;

const SettingDescription = styled.p`
  margin: 0;

  font-size: 10px;
  color: ${lightWhite};
`;

const ToggleHolder = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const toggleHeight = 20;
const toggleWidth = 50;

const ToggleBackground = styled.div`
  position: relative;
  height: ${toggleHeight}px;
  width: ${toggleWidth}px;

  border-radius: ${toggleHeight / 2}px;
  background-color: rgba(0, 0, 0, 0.3);
`;

interface ToggleProps {
  toggled: boolean;
}

const ToggleHandle = styled.div`
  background-color: white;
  width: ${toggleHeight}px;
  height: ${toggleHeight}px;
  position: absolute;
  border-radius: ${toggleHeight / 2}px;

  z-index: 2;

  ${(props: ToggleProps) =>
    props.toggled && `transform: translateX(${toggleWidth - toggleHeight}px);`}

  transition: all 0.3s ease-in-out;
`;

const ToggleFilledBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 10px;
  ${(props: ToggleProps) =>
    props.toggled && `background-color: ${mainTeal}; width: ${toggleWidth}px;`}

  border-radius: ${toggleHeight / 2}px;

  z-index: 1;

  transition: all 0.3s ease-in-out;
`;

const PiramideLobbySettings = ({
  lobbySettings,
  wsInstance,
  onBackgroundClick,
}: PiramideLobbySettingsProps) => {
  const [toggled, setToggled] = useState(false);

  return (
    <Closer onClick={onBackgroundClick}>
      <Popup
        onClick={(event: BaseSyntheticEvent) => {
          event.stopPropagation();
        }}
      >
        <SectionTitle>Game Settings</SectionTitle>
        <SettingHolder>
          <Setting>
            <SettingInfo>
              <SettingTitle>Two Decks</SettingTitle>
              <SettingDescription>
                Play with double the cards! With two decks enabled you can host
                games of up to 12 players.
              </SettingDescription>
            </SettingInfo>
            <ToggleHolder>
              <ToggleBackground
                onClick={() => {
                  setToggled(!toggled);
                }}
              >
                <ToggleFilledBackground toggled={toggled} />
                <ToggleHandle toggled={toggled} />
              </ToggleBackground>
            </ToggleHolder>
          </Setting>
        </SettingHolder>
      </Popup>
    </Closer>
  );
};

export default PiramideLobbySettings;
