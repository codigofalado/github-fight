/* eslint-disable no-confusing-arrow */
import React, { FC, useContext } from 'react';

import Layout from '~/Layout';

import RepositoryContext from '~/contexts/RepositoryContext';

import trophy from '~/assets/trophy.svg';

import { Header, Podium, Rank, Position } from './styles';

const Result: FC = () => {
  const { owner, repoName, fighters } = useContext(RepositoryContext);

  const calculatePoints = fighters.map(fighter => {
    const usersReacted = fighter.reactions.nodes.map(node => node.user.login);
    const points = Array.from(new Set(usersReacted)).length;

    return {
      ...fighter,
      points,
    };
  });

  const placing = calculatePoints.sort((prev, current) =>
    prev.points > current.points ? -1 : 1
  );

  return (
    <Layout title="Result">
      <Header>
        <div>
          <h1>{owner}</h1>
          <h2>{repoName}</h2>
        </div>
        <img src={trophy} alt="Trophy icon" />
      </Header>
      <Podium>
        {placing.slice(0, 3).map((fighter, index) => (
          <li key={`podium_${fighter.id}`}>
            <strong>
              {index + 1}º - {fighter.points}
            </strong>
            {fighter.author.login}
          </li>
        ))}
      </Podium>
      <Rank>
        {placing.map((fighter, index) => (
          <Position key={fighter.id}>
            <span>{index + 1}º</span>
            <img src={fighter.author.avatarUrl} alt={fighter.author.login} />
            <div>
              <h3>{fighter.author.login}</h3>
              <p>
                #{fighter.number} - {fighter.title}
              </p>
            </div>
            <div>
              <span>{fighter.points}</span>
              <strong>Votos</strong>
            </div>
          </Position>
        ))}
      </Rank>
    </Layout>
  );
};

export default Result;
