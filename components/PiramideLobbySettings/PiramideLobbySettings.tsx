import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { backgroundBlue, lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import PiramideLobby from "../../types/PiramideLobby";
import Toggle from "../Toggle/Toggle";

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

const PiramideLobbySettings = ({
  lobbySettings,
  wsInstance,
  onBackgroundClick,
}: PiramideLobbySettingsProps) => {
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
  };

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
              <Toggle onClick={toggle} toggled={toggled} />
            </ToggleHolder>
          </Setting>
        </SettingHolder>
      </Popup>
    </Closer>
  );
};

export default PiramideLobbySettings;
