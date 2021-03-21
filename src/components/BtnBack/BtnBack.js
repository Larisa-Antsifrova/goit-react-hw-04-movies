import React from 'react';

const BtnBack = ({ history }) => {
  return <button onClick={history.goBack}>Back</button>;
};

export default BtnBack;
