import styled from "styled-components";
import { lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import { APIGame } from "../../types/Game";

interface Props {
  game: APIGame;
}

const StyledGame = styled.li`
  width: 100%;
  height: 105px;
  background-color: ${mainTeal};
  border-radius: ${globalRadius};
  color: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const TextSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon = styled.div`
  background-color: white;
  width: 60px;
  height: 60px;
`;

const GameName = styled.h2`
  font-weight: 800;
  font-size: 20;
  margin: 0;
`;

const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.p`
  color: ${lightWhite};
  margin: 0;
  font-size: 10px;
`;

const Game = ({ game }: Props): JSX.Element => {
  return (
    <StyledGame>
      <TextSection>
        <GameName>{game.name.toUpperCase()}</GameName>
        <GameInfo>
          <InfoItem>{`Drunkness: ${game.drunkness}`}</InfoItem>
          <InfoItem>{`Time: ${game.duration}mins`}</InfoItem>
          <InfoItem>{`Players: ${game.minPlayers} - ${game.maxPlayers}`}</InfoItem>
        </GameInfo>
      </TextSection>
      <Icon />
    </StyledGame>
  );
};

export default Game;