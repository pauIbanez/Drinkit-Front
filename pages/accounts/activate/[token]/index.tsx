import Link from "next/link";
import Layout from "../../../../components/Layout/Layout";
import {
  CenteredContainer,
  Info,
  InfoHolder,
  InfoTitle,
  Linkedin,
  MainTitle,
} from "../../../../styles/global";

interface Props {
  activated: boolean;
  error?: string;
}

const ActivationPage = ({ activated, error }: Props) => {
  return (
    <Layout
      pageTitle="Activation"
      header={{ title: "REGISTER", subtitle: "WELCOME" }}
    >
      <MainTitle>DRINK IT</MainTitle>
      <CenteredContainer>
        <InfoHolder>
          {activated ? (
            <>
              <InfoTitle>Activation</InfoTitle>
              <Info>
                Nisuuu, your user has been succesfully activated! Proceed to{" "}
                <Link href={"/accounts/login"} passHref>
                  <Linkedin>Log in</Linkedin>
                </Link>
              </Info>
            </>
          ) : (
            <>
              <InfoTitle>Activation failed</InfoTitle>
              <Info>Your user could not be activated. Reason: </Info>
              <Info>{error}</Info>
            </>
          )}
        </InfoHolder>
      </CenteredContainer>
    </Layout>
  );
};

interface Params {
  params: {
    token: string;
  };
}

export const getServerSideProps = async ({ params: { token } }: Params) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/activate/${token}`
  );
  const body = await response.json();

  if (body.error) {
    return {
      props: {
        activated: false,
        error: body.message,
      },
    };
  }

  return {
    props: {
      activated: true,
    },
  };
};

export default ActivationPage;
