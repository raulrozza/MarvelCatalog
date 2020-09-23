import React, { useState } from 'react';

// Icons
import { FaSearch } from 'react-icons/fa';

// Styles
import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [focused, setFocused] = useState(false);

  const focusBar = () => setFocused(true);

  const blurBar = () => setFocused(false);

  return (
    <Container focused={focused}>
      <input type="text" onFocus={focusBar} onBlur={blurBar} />
      <button type="button">
        <FaSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
