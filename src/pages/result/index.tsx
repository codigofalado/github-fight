import React from 'react';

import Button from '~/components/Button';
import Layout from '~/components/Layout';

import { useRepository } from '~/hooks/repository';

import trophy from '~/assets/trophy.svg';

import { Header, Podium, Rank, Position, ButtonContainer } from './styles';

const Result: React.FC = () => {
  const { owner, repoName, fighters } = useRepository();

  const calculatePoints = fighters.map(fighter => {
    const usersReacted = fighter.reactions.nodes.map(node => node.user.login);
    const points = Array.from(new Set(usersReacted)).length;

    return { ...fighter, points };
  });

  const placing = calculatePoints.sort((prev, current) =>
    prev.points > current.points ? -1 : 1,
  );

  return (
    <Layout title="Result">
      <Header>
        <div>
          <h1>
            <a
              href={`https://github.com/${owner}`}
              target="_black"
              rel="noopener noreferrer"
            >
              {owner}
            </a>
          </h1>
          <h2>
            <a
              href={`https://github.com/${owner}/${repoName}`}
              target="_black"
              rel="noopener noreferrer"
            >
              {repoName}
            </a>
          </h2>
        </div>
        <img src={trophy} alt="Trophy icon" />
      </Header>

      <Podium>
        {placing.slice(0, 3).map((fighter, index) => (
          <li key={`podium_${fighter.id}`}>
            <strong>{`${index + 1}º - ${fighter.points}`}</strong>
            {fighter.author.login}
          </li>
        ))}
      </Podium>

      <ButtonContainer>
        <Button to="/battlefield">Start Over</Button>
      </ButtonContainer>

      <Rank>
        {placing.map((fighter, index) => (
          <Position key={fighter.id}>
            <a href={fighter.url} target="_black" rel="noopener noreferrer">
              <span>{`${index + 1}º`}</span>
              <img src={fighter.author.avatarUrl} alt={fighter.author.login} />

              <div>
                <h3>{fighter.author.login}</h3>
                <p>{`#${fighter.number} - ${fighter.title}`}</p>
              </div>

              <div>
                <span>{fighter.points}</span>
                <strong>Votos</strong>
              </div>
            </a>
          </Position>
        ))}
      </Rank>
    </Layout>
  );
};

export default Result;
