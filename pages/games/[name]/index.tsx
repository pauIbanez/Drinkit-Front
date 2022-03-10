import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import { lightWhite, mainTeal } from "../../../styles/colors";
import { CenteredContainer } from "../../../styles/global";
import { APIGame } from "../../../types/Game";

interface Props {
  game: APIGame;
}

interface StaticProps {
  params: {
    name: string;
  };
}

const InfoSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-top: 10px;
`;

const SectionInfo = styled.p`
  color: ${lightWhite};
  font-size: 14px;
  margin: 0;
`;

const GameDetails = ({ game }: Props) => {
  return (
    <Layout pageTitle={game.name} color={mainTeal}>
      <CenteredContainer>
        <InfoSection>
          <Title>{game.name}</Title>
          <SectionTitle>Setup</SectionTitle>
          <SectionInfo>
            To play the piramide 4 cards are dealt to each player. You will only
            be able to see them once the game starts, so make sure to remember
            them! The rest of the cards are put in a pyramid form. Starting from
            the bottom, each row of the pyramid is an extra sip, so the first
            row is 1 sip, the seccond 2 sips and so on.
          </SectionInfo>
          <SectionTitle>How to play</SectionTitle>
          <SectionInfo>
            {`In each round one card will be lifted up from the pyramid. That
            card’s value in sips is as much as the row it’s in. Once a card has
            been lifed every payer can assign the card’s number of sips to
            another player if they have the same card in their hand, but you can
            lie. If the recieving player chooses to believe it they must drink
            the card’s number of sips. If the reciever does not believe that the
            giver actually has that same card in hi hand, the giver must show
            their card to the rest of the players. if it’s correct the reciver
            drinks double, if it’s not correct, the giver drinks double.`}
          </SectionInfo>
        </InfoSection>
      </CenteredContainer>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { name } }: StaticProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}games/list`);
  const body = await response.json();

  const game = body.games.find(
    (game: APIGame) => game.name.toLowerCase() === name
  );
  return {
    props: {
      game,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}games/list`);
  const body = await response.json();

  const paths = body.games.map(
    (game: APIGame): StaticProps => ({
      params: { name: game.name.toLowerCase() },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export default GameDetails;
