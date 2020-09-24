import React, { useCallback, useState } from 'react';

// Assets
import marvelLogo from '../../assets/img/marvel_logo.png';

// Components
import SearchBar from '../SearchBar';

// Icons
import { FaBars } from 'react-icons/fa';

// Libs
import { Link } from 'react-router-dom';

// Recoil
import { useSetRecoilState } from 'recoil';
import filter from '../../atoms/filter';

// Styles
import { Container, Logo, Navlink, TextLogo } from './styles';

const Navbar: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const setFilters = useSetRecoilState(filter);

  const toggleMenu = () => setMenuToggle(toggle => !toggle);

  const handleOnNavigate = useCallback(() => {
    setMenuToggle(false);
    setFilters('');
  }, [setFilters]);

  return (
    <Container showMenu={menuToggle}>
      <Link to="/" className="img-container">
        <Logo src={marvelLogo} alt="Marvel's" />

        <TextLogo>Catalog</TextLogo>
      </Link>

      <ul className="links-container">
        <SearchBar />

        <Navlink to="/novels" onClick={handleOnNavigate}>
          Novels
        </Navlink>

        <Navlink to="/characters" onClick={handleOnNavigate}>
          Characters
        </Navlink>

        <Navlink to="/stats" onClick={handleOnNavigate}>
          Stats
        </Navlink>
      </ul>

      <div className="menu-toggle">
        <FaBars onClick={toggleMenu} />
      </div>
    </Container>
  );
};

export default Navbar;
