import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MAIN_PAGE } from '../constants/labelTypes';

const Header = () => {
  return (
    <Nav activeKey="/">
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>{MAIN_PAGE}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default Header;