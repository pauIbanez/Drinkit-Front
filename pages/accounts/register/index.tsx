import Link from "next/link";
import { useState } from "react";
import RegisterForm from "../../../components/Forms/RegisterForm/RegisterForm";
import Layout from "../../../components/Layout/Layout";
import {
  CenteredContainer,
  Linkedin,
  MainTitle,
  Tips,
} from "../../../styles/global";

const RegisterPage = () => {
  const [email, setEmail] = useState("");

  const onFinished = (email: string) => {
    setEmail(email);
  };

  return (
    <Layout
      pageTitle="Register"
      header={{ title: "register", subtitle: "welcome" }}
    >
      <MainTitle>DRINK IT</MainTitle>
      <CenteredContainer>
        <RegisterForm onFinished={onFinished} />
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
