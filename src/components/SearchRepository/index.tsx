import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { useRepository } from '~/hooks/repository';

import Repository, { Data } from '../Repository';

import { Container, SearchButton } from './styles';

interface QueryData {
  repository: Data;
}

interface Props {
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const QUERY = gql`
  query repository($owner: String!, $repoName: String!) {
    repository(owner: $owner, name: $repoName) {
      url
      owner {
        avatarUrl(size: 120)
        login
      }
      name
      description
      issues {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      stars: stargazers {
        totalCount
      }
      forks {
        totalCount
      }
    }
  }
`;

const SearchRepository: React.FC<Props> = ({ setDisabled }) => {
  const [text, setText] = useState('');
  const {
    owner,
    setOwner,
    repoName,
    setRepoName,
    pullCount,
    setPullCount,
  } = useRepository();

  const [getRepository, { data, loading, error }] = useLazyQuery<QueryData, {}>(
    QUERY,
    {
      variables: {
        owner: text.split('/')[0],
        repoName: text.split('/')[1],
      },
    },
  );

  const errorMessage = useMemo(() => {
    if (!text) {
      return 'Typed one repository, ex: codigofalado/desafio333';
    }

    if (error?.graphQLErrors[0].path) {
      return error?.message.split('GraphQL error: ');
    }

    return 'Make sure you typed the right repository, ex: codigofalado/desafio333';
  }, [text, error]);

  useEffect(() => {
    const name = data?.repository?.name;
    const login = data?.repository?.owner?.login;
    const totalCount = data?.repository?.pullRequests?.totalCount;

    if (login && login !== owner) setOwner(login);

    if (name && name !== repoName) setRepoName(name);

    if (totalCount && totalCount !== pullCount) setPullCount(totalCount);
  }, [data, setOwner, setRepoName, owner, repoName, pullCount, setPullCount]);

  useEffect(() => {
    setDisabled(!data || loading);
  }, [setDisabled, loading, data]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    getRepository();
  }

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder="author/repository"
            value={text}
            onChange={handleInputChange}
          />
          {error && <p>{errorMessage}</p>}
        </div>
        <SearchButton isLoading={loading}>
          {loading ? <FaSpinner size={24} /> : <FaSearch size={24} />}
        </SearchButton>
      </form>

      {data && !loading && <Repository data={data.repository} />}
    </Container>
  );
};

export default SearchRepository;
