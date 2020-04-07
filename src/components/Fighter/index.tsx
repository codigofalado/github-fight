import React, { FC, useState, useContext } from 'react';
import { FaPlus, FaCheck } from 'react-icons/fa';

import RepositoryContext, { PullRequest } from '~/contexts/RepositoryContext';

import { SearchButton } from '../SearchRepository/styles';

import { Container } from './styles';

interface Props {
  data: PullRequest;
}

const Fighter: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState(false);
  const { fighters, setFighters } = useContext(RepositoryContext);

  const Icon = selected ? FaCheck : FaPlus;

  function toogleSelected() {
    if (!selected && !fighters.includes(data)) {
      setFighters([...fighters, data]);
    }

    if (selected && fighters.includes(data)) {
      setFighters(fighters.filter(fighter => fighter.id !== data.id));
    }

    setSelected(!selected);
  }

  return (
    <Container selected={selected}>
      <img src={data.author.avatarUrl} alt={data.author.login} />
      <div>
        <h2>{data.author.login}</h2>
        <p>
          #{data.number} - {data.title}
        </p>
      </div>
      <SearchButton onClick={toogleSelected}>
        <Icon size={24} />
      </SearchButton>
    </Container>
  );
};

export default Fighter;
