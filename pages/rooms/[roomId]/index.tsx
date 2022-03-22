import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import WSContext from "../../../contexts/wsContext";

interface Message {
  data: string;
}

const LobbyPage = (): JSX.Element => {
  const router = useRouter();
  const { roomId } = router.query;

  const { wsInstance, ready } = useContext(WSContext);

  useEffect(() => {
    if (ready && roomId) {
      wsInstance.send(
        JSON.stringify({
          reason: "lobby",
          game: "piramide",
          type: "join",
          lobby: roomId,
          userId: "6234bafc6ef9f9168034f489",
        })
      );
      wsInstance.onmessage = ({ data }: Message) => {
        console.log(JSON.parse(data));
      };
    }
  }, [ready, roomId, wsInstance]);

  return (
    <Layout>
      <p>Lobby page</p>
    </Layout>
  );
};

export default LobbyPage;
