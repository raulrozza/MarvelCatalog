import React from 'react';

// Assets
import marvelLogo from '../../assets/img/marvel_logo.png';

// Styles
import { Container, Logo, Navlink, TextLogo } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="img-container">
        <Logo src={marvelLogo} alt="Marvel's" />
        <TextLogo>Catalog</TextLogo>
      </div>

      <ul className="links-container">
        <Navlink to="/novels">Novels</Navlink>
      </ul>
    </Container>
  );
};

export default Navbar;
