import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout/Layout";
import WSContext from "../../../contexts/wsContext";
import State from "../../../types/State";

const LobbyPage = (): JSX.Element => {
  const router = useRouter();
  const { roomId } = router.query;

  const { connection } = useContext(WSContext);

  return (
    <Layout>
      <p>Lobby page</p>
    </Layout>
  );
};

export default LobbyPage;
