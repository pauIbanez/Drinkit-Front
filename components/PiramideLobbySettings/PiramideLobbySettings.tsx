import styled from "styled-components";
import { backgroundBlue } from "../../styles/colors";
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

  height: 543px;
  width: 329px;
`;

const PiramideLobbySettings = ({
  lobbySettings,
  wsInstance,
  onBackgroundClick,
}: PiramideLobbySettingsProps) => {
  return (
    <Closer>
      <Popup></Popup>
    </Closer>
  );
};

export default PiramideLobbySettings;
