import React, { Component } from 'react';
import { Box, Button, Content, Divider, Footer, Heading, Logo, Services, GlobalStyles } from 'components';
import { AppStyled } from './App.styles';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <GlobalStyles />
        <Content>
          <Box mt={50}>
            <Logo />
          </Box>

          <Box my={40}>
            <Heading h1>Front End Development</Heading>
            <Heading h2>Consultancy Services</Heading>
            <Heading h3>London, UK</Heading>
          </Box>

          <Divider my={80} />

          <Heading h2>Services</Heading>
          <Heading h3>Here are some of the services that we specialise in and can provide for your projects:</Heading>

          <Box my={60}>
            <Services />
          </Box>

          <Divider my={80} />

          <Box my={60}>
            <Heading h2>Contact</Heading>
            <Heading h3>Get in touch to discuss how we can help your team</Heading>

            <Button my={20} anchor href="mailto:info&#64;bionicbeetle&#46;com">
              Email us
            </Button>
          </Box>

          <Footer />
        </Content>
      </AppStyled>
    );
  }
}

export default App;
