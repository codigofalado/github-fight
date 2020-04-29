import React, { FC, useState } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface PullRequest {
  id: string;
  title: string;
  number: number;
  author: {
    avatarUrl: string;
    login: string;
  };
  reactions: {
    totalCount: number;
    nodes: {
      user: {
        login: string;
      };
    }[];
  };
}

interface ContextValue {
  owner: string;
  repoName: string;
  pullCount: number;
  fighters: PullRequest[];
  setOwner: SetState<string>;
  setRepoName: SetState<string>;
  setPullCount: SetState<number>;
  setFighters: SetState<PullRequest[]>;
}

const RepositoryContext = React.createContext<ContextValue>({} as ContextValue);

const RepositoryProvider: FC = ({ children }) => {
  const [owner, setOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [pullCount, setPullCount] = useState(0);
  const [fighters, setFighters] = useState<PullRequest[]>([]);

  return (
    <RepositoryContext.Provider
      value={{
        owner,
        repoName,
        pullCount,
        fighters,
        setOwner,
        setRepoName,
        setPullCount,
        setFighters,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export { RepositoryProvider };
export default RepositoryContext;
