import React from 'react';
import { Message } from 'semantic-ui-react';

const Error = ({ error }) => {
  return (
    <Message>
      <Message.Header>Error</Message.Header>
      <p>{error}</p>
    </Message>
  );
};
export default Error;
