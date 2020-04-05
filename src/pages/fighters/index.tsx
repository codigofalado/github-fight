import React, { useContext } from 'react';

import Layout from '~/Layout';
import gql from 'graphql-tag';

import Fighter from '~/components/Fighter';

import RepositoryContext from '~/context/RepositoryContext';

import { Container } from './styles';

import { useQuery } from '@apollo/react-hooks';

interface QueryData {
  repository: {
    owner: {
      login: string;
    };
    name: string;
    pullRequests: {
      nodes: {
        id: string;
        title: string;
        number: number;
        author: {
          avatarUrl: string;
          login: string;
        };
      }[];
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
      pullRequests(states: CLOSED, first: $pullCount) {
        nodes {
          id
          title
          number
          author {
            avatarUrl(size: 80)
            login
          }
        }
      }
    }
  }
`;

function Fighters() {
  const { owner, repoName, pullCount } = useContext(RepositoryContext);

  const { data, loading } = useQuery<QueryData>(QUERY, {
    variables: {
      owner,
      repoName,
      pullCount,
    },
  });

  return (
    <Layout>
      <Container>
        <h1>Select the Fighters</h1>
        <ul>
          {data &&
            !loading &&
            data.repository.pullRequests.nodes.map(pull => (
              <Fighter data={pull} key={pull.id} />
            ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default Fighters;
