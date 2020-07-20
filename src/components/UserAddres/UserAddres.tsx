import React from 'react';
import { Address } from '../../Interfaces/Interfaces';

import './UserAddress.css';

type Props = {
  address: Address;
};

export const UserAddress: React.FC<Props> = ({ address }) => (
  <div className="user__address">
    <span>{address.street}</span>
    &nbsp;
    <span>{address.suite}</span>
    &nbsp;
    <span>{address.city}</span>
    &nbsp;
    <span>{address.zipcode}</span>
    &nbsp;
    <span>
      {address.geo.lat}
      &nbsp;
      {address.geo.lng}
    </span>
  </div>
);
