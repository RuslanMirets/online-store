import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: 'white', marginLeft: 'auto' }}>
            <Button variant={'outline-light'} className="mx-4">
              Админ панель
            </Button>
            <Button variant={'outline-light'}>Войти</Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white', marginLeft: 'auto' }}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
