import React, { FC, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Repository, { Data } from '../Repository';

import { Container, SearchButton } from './styles';

interface QueryData {
  repository: Data;
}

interface Props {
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const QUERY = gql`
  query repository($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      owner {
        avatarUrl
        login
      }
      name
      description
      issues {
        totalCount
      }
      pullRequests {
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

const SearchRepository: FC<Props> = ({ setDisabled }) => {
  const [text, setText] = useState('');

  const [getRepository, { data, loading }] = useLazyQuery<QueryData, {}>(
    QUERY,
    {
      variables: {
        owner: text.split('/')[0],
        repo: text.split('/')[1],
      },
    }
  );

  useEffect(() => {
    setDisabled(!data || loading);
  }, [setDisabled, loading, data]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSearch() {
    getRepository();
  }

  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="author/repository"
          value={text}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch size={24} />
        </SearchButton>
      </div>

      {data && !loading && <Repository data={data.repository} />}
    </Container>
  );
};

export default SearchRepository;
