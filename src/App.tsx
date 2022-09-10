import React, { ReactElement } from 'react';
import styles from './App.module.scss';
import Content from 'components/Content/Content';
import Box from 'components/Box/Box';
import Logo from 'components/Logo/Logo';
import Heading from 'components/Heading/Heading';
import Divider from 'components/Divider/Divider';
import Services from 'components/Services/Services';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';

const App = (): ReactElement => {
  return (
    <div className={styles.app}>
      <Content>
        <Box mt={50}>
          <Logo />
        </Box>

        <Box my={40}>
          <Heading h1>Front End Development</Heading>
          <Heading h2>Consultancy Services</Heading>
          <Heading h3>London, UK</Heading>
        </Box>

        <Divider />

        <Heading h2>Services</Heading>
        <Heading h3>Here are some of the services that we specialise in and can provide for your projects:</Heading>

        <Box my={60}>
          <Services />
        </Box>

        <Divider />

        <Box my={60}>
          <Heading h2>Contact</Heading>
          <Heading h3>Get in touch to discuss how we can help your team</Heading>

          <Box my={20}>
            <Button anchor href="mailto:info&#64;bionicbeetle&#46;com">
              Email us
            </Button>
          </Box>
        </Box>

        <Footer />
      </Content>
    </div>
  );
};

export default App;
