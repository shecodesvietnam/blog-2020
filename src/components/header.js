import PropTypes from "prop-types";
import React from "react";
import { Sticky, Container, Image } from 'semantic-ui-react';

const Header = () => (
  <Sticky>
    <Container fluid style={{backgroundColor: "#161616"}}>
      <Image 
        src='https://shecodesvietnam.github.io/homepage-2020/assets/logo-2020.png' width='150'
        as='a'
        href='https://shecodesvietnam.github.io/homepage-2020/'
        target='_blank'
        style={{margin:'10'}}
      />
      <a>Hackathon 2020</a>
    </Container>
  </Sticky>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
