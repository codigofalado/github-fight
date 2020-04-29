import React, { useContext, FC } from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Button from '~/components/Button';
import Fighter from '~/components/Fighter';
import Layout from '~/Layout';

import RepositoryContext, { PullRequest } from '~/contexts/RepositoryContext';

import { Container } from './styles';
import { ButtonGroup } from '~/styles/button';

interface QueryData {
  repository: {
    owner: {
      login: string;
    };
    name: string;
    pullRequests: {
      nodes: PullRequest[];
    };
  };
}

const QUERY = gql`
  query repository($owner: String!, $repoName: String!, $pullCount: Int!) {
    repository(owner: $owner, name: $repoName) {
      name
      owner {
        login
      }
      pullRequests(states: OPEN, first: $pullCount) {
        nodes {
          id
          title
          number
          author {
            avatarUrl(size: 80)
            login
          }
          reactions(first: 100) {
            totalCount
            nodes {
              user {
                login
              }
            }
          }
        }
      }
    }
  }
`;

const Fighters: FC = () => {
  const { owner, repoName, pullCount, fighters } = useContext(
    RepositoryContext,
  );

  const { data, loading } = useQuery<QueryData>(QUERY, {
    variables: {
      owner,
      repoName,
      pullCount: pullCount > 100 ? 100 : pullCount,
    },
  });

  const ButtonIsDisabled = fighters.length <= 1;

  return (
    <Layout title="Fighters">
      <Container>
        <h1>Select the Fighters</h1>
        <ul>
          {data &&
            !loading &&
            data.repository.pullRequests.nodes.map(pull => (
              <Fighter data={pull} key={pull.id} />
            ))}
        </ul>
        <ButtonGroup>
          <Button to="/battlefield">Back</Button>
          <Button to="/result" disabled={ButtonIsDisabled}>
            Next
          </Button>
        </ButtonGroup>
      </Container>
    </Layout>
  );
};

export default Fighters;
