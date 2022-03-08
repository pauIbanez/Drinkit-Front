import Layout from "../../../components/Layout/Layout";
import { MainTitle } from "../../../styles/global";

const RegisterPage = () => {
  return (
    <Layout
      pageTitle="Register"
      header={{ title: "register", subtitle: "welcome" }}
    >
      <MainTitle>DRINK IT</MainTitle>
    </Layout>
  );
};

export default RegisterPage;
