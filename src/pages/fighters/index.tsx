import React, { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import Button from '~/components/Button';
import Fighter from '~/components/Fighter';
import Layout from '~/components/Layout';

import { PullRequest, useRepository } from '~/hooks/repository';

import { Container, SelectAllButton } from './styles';
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

const repositoriesQuery = gql`
  query repository($owner: String!, $repoName: String!, $pullCount: Int!) {
    repository(owner: $owner, name: $repoName) {
      url
      name
      owner {
        login
      }
      pullRequests(states: OPEN, first: $pullCount) {
        nodes {
          id
          url
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

const Fighters: React.FC = () => {
  const { owner, repoName, pullCount, fighters, setFighters } = useRepository();

  const { data, loading } = useQuery<QueryData>(repositoriesQuery, {
    variables: {
      owner,
      repoName,
      pullCount: Math.min(pullCount, 100),
    },
  });

  /**
   * Removing the PRs by dependabot
   */
  const pullRequests = useMemo(
    () =>
      data?.repository.pullRequests.nodes.filter(
        pr => pr.author.login !== 'dependabot',
      ),
    [data],
  );

  const ButtonIsDisabled = fighters.length <= 1;

  const isToSelect = fighters !== pullRequests;

  function selectAllFighters(): void {
    if (pullRequests) {
      setFighters(isToSelect ? pullRequests : []);
    }
  }

  return (
    <Layout title="Fighters">
      <Container>
        <div>
          <h1>Select the Fighters</h1>
          <SelectAllButton onClick={selectAllFighters}>
            {`${isToSelect ? 'S' : 'Des'}elect all`}
          </SelectAllButton>
        </div>

        <ul>
          {data &&
            !loading &&
            pullRequests?.map(pull => <Fighter data={pull} key={pull.id} />)}
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
