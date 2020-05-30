import React, { FC } from 'react';

import { Container } from './styles';

type Label = {
  totalCount: number;
};

export interface Data {
  owner: {
    avatarUrl: string;
    login: string;
  };
  url: string;
  name: string;
  description: string;
  pullRequests: Label;
  issues: Label;
  stars: Label;
  forks: Label;
}

interface Props {
  data: Data;
}

const Repository: FC<Props> = ({ data }) => (
  <Container>
    <div>
      <img src={data.owner.avatarUrl} alt={data.owner.login} />
      <h2>
        <a href={data.url} target="_black" rel="noopener noreferrer">
          {data.name}
        </a>
      </h2>
      <p>{data.description}</p>
    </div>

    <ul>
      <li>
        Stars&nbsp;
        <strong>{data.stars.totalCount}</strong>
      </li>
      <li>
        Forks&nbsp;
        <strong>{data.forks.totalCount}</strong>
      </li>
      <li>
        Issues&nbsp;
        <strong>{data.issues.totalCount}</strong>
      </li>
      <li>
        Pull Requests&nbsp;
        <strong>{data.pullRequests.totalCount}</strong>
      </li>
    </ul>
  </Container>
);

export default Repository;
