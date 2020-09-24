import React, { useCallback, useEffect, useRef, useState } from 'react';

// Icons
import { FaSearch } from 'react-icons/fa';

// Recoil
import { useSetRecoilState } from 'recoil';
import filter from '../../atoms/filter';

// Styles
import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const setFilter = useSetRecoilState(filter);

  const focusBar = () => setFocused(true);

  const blurBar = () => setFocused(false);

  const handleSearch = useCallback(() => {
    const value = inputRef.current?.value;

    setFilter(value || '');
  }, [setFilter]);

  const handleEnterPressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') handleSearch();
    },
    [handleSearch],
  );

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.addEventListener('keypress', handleEnterPressed);
  }, [handleEnterPressed]);

  return (
    <Container focused={focused}>
      <input type="text" ref={inputRef} onFocus={focusBar} onBlur={blurBar} />
      <button type="button">
        <FaSearch onClick={handleSearch} />
      </button>
    </Container>
  );
};

export default SearchBar;
