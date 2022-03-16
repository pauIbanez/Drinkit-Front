import Link from "next/link";
import Layout from "../../../../components/Layout/Layout";
import {
  CenteredContainer,
  Info,
  InfoHolder,
  InfoTitle,
  Linkedin,
} from "../../../../styles/global";

interface Props {
  activated: boolean;
}

const activationPage = ({ activated }: Props) => {
  return (
    <>
      {activated ? (
        <Layout pageTitle="Activation">
          <CenteredContainer>
            <InfoHolder>
              <InfoTitle>Activation</InfoTitle>
              <Info>
                Nisuuu, your user has been succesfully activated! Proceed to{" "}
                <Link href={"/accounts/login"} passHref>
                  <Linkedin>Log in</Linkedin>
                </Link>
              </Info>
            </InfoHolder>
          </CenteredContainer>
        </Layout>
      ) : (
        <></>
      )}
    </>
  );
};

export default activationPage;
