import Link from "next/link";
import Layout from "../../../components/Layout/Layout";
import { Linkedin, MainTitle, Tips } from "../../../styles/global";

const RegisterPage = () => {
  return (
    <Layout
      pageTitle="Register"
      header={{ title: "register", subtitle: "welcome" }}
    >
      <MainTitle>DRINK IT</MainTitle>
      <p>placeholder form</p>
      <Tips>
        Already have an account?{" "}
        <Link href={"/accounts/login"} passHref>
          <Linkedin>Log in</Linkedin>
        </Link>
      </Tips>
    </Layout>
  );
};

export default RegisterPage;
