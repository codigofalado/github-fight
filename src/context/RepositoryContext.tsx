import React, { FC, Dispatch, SetStateAction, useState } from 'react';

interface ContextValue {
  owner: string;
  repoName: string;
  setOwner: Dispatch<SetStateAction<string>>;
  setRepoName: Dispatch<SetStateAction<string>>;
}

const RepositoryContext = React.createContext<ContextValue>({
  owner: '',
  repoName: '',
  setOwner: () => {},
  setRepoName: () => {},
});

const RepositoryProvider: FC = ({ children }) => {
  const [owner, setOwner] = useState('');
  const [repoName, setRepoName] = useState('');

  return (
    <RepositoryContext.Provider
      value={{
        owner,
        repoName,
        setOwner,
        setRepoName,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export { RepositoryProvider };
export default RepositoryContext;
