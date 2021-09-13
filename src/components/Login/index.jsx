import {
  BgImage,
  Container,
  Content,
  CTA,
  CTALogoOne,
  CTALogoTwo,
  Description,
  SignUp,
} from './LoginStyles';
import logoOne from '../../assets/images/cta-logo-one.svg';
import logoTwo from '../../assets/images/cta-logo-two.png';

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={logoOne} alt="logo one" />
          <SignUp>Get All There</SignUp>
          <Description>
            get premier access to raya and the last dragon for an additional fee
            with a Disney+ subscription. As of 03/26/2021, the price of disney+
            and the disney bundle will increase by $1
          </Description>
          <CTALogoTwo src={logoTwo} alt="logo two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
