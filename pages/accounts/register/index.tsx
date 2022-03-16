import Link from "next/link";
import { useState } from "react";
import RegisterForm from "../../../components/Forms/RegisterForm/RegisterForm";
import Layout from "../../../components/Layout/Layout";
import {
  CenteredContainer,
  Info,
  InfoHolder,
  InfoTitle,
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
        {!email ? (
          <>
            <RegisterForm onFinished={onFinished} />
            <Tips>
              Already have an account?{" "}
              <Link href={"/accounts/login"} passHref>
                <Linkedin>Log in</Linkedin>
              </Link>
            </Tips>
          </>
        ) : (
          <InfoHolder>
            <InfoTitle>Verification</InfoTitle>
            <Info>Your user has been submitted. Now just one last step!</Info>
            <Info>
              We&apos;ve sent you a verification email to {email} please check
              your inbox and start geting fucked up as soon as posible.
            </Info>
          </InfoHolder>
        )}
      </CenteredContainer>
    </Layout>
  );
};

export default RegisterPage;
