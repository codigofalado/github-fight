import React, { useState, useContext } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface PullRequest {
  id: string;
  url: string;
  title: string;
  number: number;
  author: {
    avatarUrl: string;
    login: string;
  };
  reactions: {
    totalCount: number;
    nodes: Array<{
      user: {
        login: string;
      };
    }>;
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

const RepositoryProvider: React.FC = ({ children }) => {
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

function useRepository(): ContextValue {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw Error('useRepository must be used within an RepositoryProvider');
  }

  return context;
}

export { RepositoryProvider, useRepository };
