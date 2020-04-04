import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SearchButton } from './styles';

const SearchRepository: FC = () => (
  <Container>
    <div>
      <input type="text" placeholder="author/repository" />
      <SearchButton>
        <FaSearch size={24} />
      </SearchButton>
    </div>
  </Container>
);

export default SearchRepository;
