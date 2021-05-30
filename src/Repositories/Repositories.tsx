import React, { useState } from 'react';
import { Input } from 'antd';
import { useSubscription } from 'observable-hooks';

import { useGetRepositories } from './useGetRepositories';

export interface Props {
  userId?: string;
  isOpen?: boolean;
}

export const Repositories: React.FC<Props> = (props) => {
  const [userId, setUserId] = useState(props.userId);

  /** */
  // repositories
  const { repositories, repositories$, getRepositories } = useGetRepositories(props.userId);
  useSubscription(repositories$, (v) => console.log(v, 'at repositories$'));

  return (
    <div>
      <h2>Repositories</h2>
      <Input
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
          getRepositories(e.target.value);
        }}
      />
      <div>
        {repositories?.response &&
          repositories.response.map((item, index) => <h2 key={index}>{item?.name}</h2>)}
      </div>
    </div>
  );
};

export default Repositories;
