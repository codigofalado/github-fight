import React, { FC } from 'react';
import { FaPlus } from 'react-icons/fa';

import { SearchButton } from '../SearchRepository/styles';

import { Container } from './styles';

interface Pull {
  id: string;
  title: string;
  number: number;
  author: {
    avatarUrl: string;
    login: string;
  };
}

interface Props {
  data: Pull;
}

const Fighter: FC<Props> = ({ data }) => (
  <Container>
    <img src={data.author.avatarUrl} alt={data.author.login} />
    <div>
      <h2>{data.author.login}</h2>
      <p>
        #{data.number} - {data.title}
      </p>
    </div>
    <SearchButton>
      <FaPlus size={24} />
    </SearchButton>
  </Container>
);

export default Fighter;
