import React from 'react';
import { User } from '../../Interfaces/Interfaces';
import { UserAddress } from '../UserAddres/UserAddres';

import './User.css';

type Props = {
  userData: User;
};

export const UserInfo: React.FC<Props> = ({ userData }) => (
  <>
    <h4 className="user__username">{userData.username}</h4>
    <p className="user__name">{userData.name}</p>
    <UserAddress address={userData.address} />
  </>
);
