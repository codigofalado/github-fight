import React, {
  forwardRef,
  RefForwardingComponent,
  useState,
  useImperativeHandle,
} from 'react';
import { FaPlus, FaCheck } from 'react-icons/fa';

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

export interface FighterRef {
  isSelected: boolean;
}

interface Props {
  data: Pull;
}

const Fighter: RefForwardingComponent<FighterRef, Props> = ({ data }, ref) => {
  const [selected, setSelected] = useState(false);

  const Icon = selected ? FaCheck : FaPlus;

  function toogleSelected() {
    setSelected(!selected);
  }

  useImperativeHandle(ref, () => ({
    isSelected: selected,
  }));

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

export default forwardRef(Fighter);
