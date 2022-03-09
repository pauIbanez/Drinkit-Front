import Link from "next/link";
import InputField from "../../../components/Forms/InputField/InputField";
import RegisterForm from "../../../components/Forms/RegisterForm/RegisterForm";
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
        <RegisterForm />
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
