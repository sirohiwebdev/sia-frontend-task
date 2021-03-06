import React from 'react';
import styled from 'styled-components';
import { Row, Column, Paragraph, themeColor, themeSpacing } from '@datapunt/asc-ui';

import { login } from 'shared/services/auth/auth';

import Button from 'components/Button';
import ButtonBar from 'components/ButtonBar';

const Notification = styled.div`
  border-left: 3px solid ${themeColor('success')};
  margin: ${themeSpacing(6)} 0;
  padding-left: ${themeSpacing(5)};
`;

const LoginPage = () => (
  <Row data-testid="loginPage">
    <Column span={12}>
      <Notification>
        <Paragraph>Om deze pagina te zien dient u ingelogd te zijn.</Paragraph>

        <ButtonBar>
          <Button
            variant="primary"
            onClick={() => {
              login('datapunt');
            }}
            type="button"
          >
            <span className="value">InLoggen</span>
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              login('grip');
            }}
            type="button"
          >
            <span className="value">Inloggen ADW</span>
          </Button>
        </ButtonBar>
      </Notification>
    </Column>
  </Row>
);

export default LoginPage;
