import React, { useState } from 'react';

// Assets
import marvelLogo from '../../assets/img/marvel_logo.png';

// Components
import SearchBar from '../SearchBar';

// Icons
import { FaBars } from 'react-icons/fa';

// Styles
import { Container, Logo, Navlink, TextLogo } from './styles';

const Navbar: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(toggle => !toggle);

  return (
    <Container showMenu={menuToggle}>
      <div className="img-container">
        <Logo src={marvelLogo} alt="Marvel's" />

        <TextLogo>Catalog</TextLogo>
      </div>

      <ul className="links-container">
        <SearchBar />

        <Navlink to="/novels" onClick={() => setMenuToggle(false)}>
          Novels
        </Navlink>

        <Navlink to="/characters" onClick={() => setMenuToggle(false)}>
          Characters
        </Navlink>
      </ul>

      <div className="menu-toggle">
        <FaBars onClick={toggleMenu} />
      </div>
    </Container>
  );
};

export default Navbar;
