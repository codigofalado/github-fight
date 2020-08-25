import React, { useMemo } from 'react';
import { FaPlus, FaCheck } from 'react-icons/fa';

import { PullRequest, useRepository } from '~/hooks/repository';

import { SearchButton } from '../SearchRepository/styles';
import { Container } from './styles';

interface Props {
  data: PullRequest;
}

const Fighter: React.FC<Props> = ({ data }) => {
  const { fighters, setFighters } = useRepository();

  const selected = useMemo(
    () => !!fighters.find(fighter => fighter.id === data.id),
    [fighters, data.id],
  );

  const Icon = selected ? FaCheck : FaPlus;

  function toogleSelected(): void {
    if (!selected && !fighters.includes(data)) {
      setFighters([...fighters, data]);
    }

    if (selected && fighters.includes(data)) {
      setFighters(fighters.filter(fighter => fighter.id !== data.id));
    }

    // setSelected(!selected);
  }

  return (
    <Container selected={selected}>
      <img src={data.author.avatarUrl} alt={data.author.login} />
      <div>
        <h2>{data.author.login}</h2>
        <p>{`#${data.number} - ${data.title}`}</p>
      </div>
      <SearchButton onClick={toogleSelected}>
        <Icon size={24} />
      </SearchButton>
    </Container>
  );
};

export default Fighter;
