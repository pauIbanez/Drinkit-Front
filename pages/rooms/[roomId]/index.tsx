import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout/Layout";
import WSContext from "../../../contexts/wsContext";
import State from "../../../types/State";

interface Message {
  data: string;
}

const LobbyPage = (): JSX.Element => {
  const router = useRouter();
  const { roomId } = router.query;
  const { user } = useSelector((state: State) => state);
  const { wsInstance, ready } = useContext(WSContext);

  useEffect(() => {
    if (ready && roomId && user.id) {
      wsInstance.send(
        JSON.stringify({
          reason: "lobby",
          game: "piramide",
          type: "join",
          lobby: roomId,
          userId: user.id,
        })
      );
      wsInstance.onmessage = ({ data }: Message) => {
        console.log(JSON.parse(data));
      };
    }
  }, [ready, roomId, user.id, wsInstance]);

  return (
    <Layout>
      <p>Lobby page</p>
    </Layout>
  );
};

export default LobbyPage;
