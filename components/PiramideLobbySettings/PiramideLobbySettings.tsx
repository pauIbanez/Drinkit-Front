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
  max-width: 250px;
  font-size: 10px;
  color: ${lightWhite};
  padding-right: 10px;
`;

const ToggleHolder = styled.div`
  width: 75px;
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
  const initialSettings = {
    twoDecks: false,
    jokers: false,
    leftovers: false,
  };

  const [settings, setSettings] = useState(initialSettings);

  const toggle = (settingName: string) => {
    const newSettings = { ...settings, [settingName]: !settings[settingName] };
    setSettings(newSettings);
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
              <Toggle
                onClick={toggle}
                name="twoDecks"
                toggled={settings.twoDecks}
              />
            </ToggleHolder>
          </Setting>
          <Setting>
            <SettingInfo>
              <SettingTitle>Jokers</SettingTitle>
              <SettingDescription>
                Play with jokers. Jokers cannot be in the player’s hands, and
                everyone drinks when one shows up in the pyramid
              </SettingDescription>
            </SettingInfo>
            <ToggleHolder>
              <Toggle
                onClick={toggle}
                name="jokers"
                toggled={settings.jokers}
              />
            </ToggleHolder>
          </Setting>
          <Setting>
            <SettingInfo>
              <SettingTitle>Leftovers</SettingTitle>
              <SettingDescription>
                The extra cards in the pyramid will not form a smaller one line,
                but will be put to the side of the lower rows of the pyramid,
                their value is double that of the row they are in.
              </SettingDescription>
            </SettingInfo>
            <ToggleHolder>
              <Toggle
                onClick={toggle}
                name="leftovers"
                toggled={settings.leftovers}
              />
            </ToggleHolder>
          </Setting>
        </SettingHolder>
      </Popup>
    </Closer>
  );
};

export default PiramideLobbySettings;
