import Link from "next/link";
import InputField from "../../../components/Forms/InputField/InputField";
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
        <form>
          <InputField
            label="Name"
            name="name"
            onChange={(event) => {}}
            type="text"
            value=""
          />
        </form>
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
