import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="mx-auto mb-3">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mb-3" placeholder="Введите ваш email..." />
          <Form.Control className="mb-3" placeholder="Введите ваш пароль..." />
          <Row className={'d-flex justify-content-between align-items-center'}>
            {isLogin ? (
              <div style={{ width: 'auto' }}>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div style={{ width: 'auto' }}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <div style={{ width: 'auto' }}>
              <Button variant="outline-success">{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
