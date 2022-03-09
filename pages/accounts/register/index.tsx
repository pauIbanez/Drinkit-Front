import Link from "next/link";
import Layout from "../../../components/Layout/Layout";
import {
  CenteredContainer,
  Linkedin,
  MainTitle,
  Tips,
} from "../../../styles/global";

const RegisterPage = () => {
  return (
    <Layout
      pageTitle="Register"
      header={{ title: "register", subtitle: "welcome" }}
    >
      <MainTitle>DRINK IT</MainTitle>
      <CenteredContainer>
        <p>placeholder form</p>
        <Tips>
          Already have an account?{" "}
          <Link href={"/accounts/login"} passHref>
            <Linkedin>Log in</Linkedin>
          </Link>
        </Tips>
      </CenteredContainer>
    </Layout>
  );
};

export default RegisterPage;
