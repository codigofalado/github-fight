import React, { FC, useState } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface ContextValue {
  owner: string;
  repoName: string;
  pullCount: number;
  setOwner: SetState<string>;
  setRepoName: SetState<string>;
  setPullCount: SetState<number>;
}

const RepositoryContext = React.createContext<ContextValue>({
  owner: '',
  repoName: '',
  pullCount: 0,
  setOwner: () => {},
  setRepoName: () => {},
  setPullCount: () => {},
});

const RepositoryProvider: FC = ({ children }) => {
  const [owner, setOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [pullCount, setPullCount] = useState(0);

  return (
    <RepositoryContext.Provider
      value={{
        owner,
        repoName,
        pullCount,
        setOwner,
        setRepoName,
        setPullCount,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export { RepositoryProvider };
export default RepositoryContext;
