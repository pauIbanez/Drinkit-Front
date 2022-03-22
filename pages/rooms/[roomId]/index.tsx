import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout/Layout";
import useWebsockets from "../../../hooks/useWebscokets/useWebsockets";
import State from "../../../types/State";

const lobbyPage = (): JSX.Element => {
  const router = useRouter();
  const { sendMessage, connection } = useWebsockets();
  const { user } = useSelector((state: State): State => state);
  const { roomId } = router.query;

  useEffect(() => {
    if (connection) {
      sendMessage({
        reason: "lobby",
        game: "piramide",
        type: "join",
        lobby: roomId,
        player: user.id,
      });
    }
  }, [connection, roomId, sendMessage, user.id]);

  return (
    <Layout>
      <p>Lobby page</p>
    </Layout>
  );
};

export default lobbyPage;
