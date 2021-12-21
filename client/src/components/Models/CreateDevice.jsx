import React, { useContext, useState } from 'react';
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Row,
} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Добавить устройство</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Dropdown style={{ marginBottom: '20px' }}>
            <DropdownToggle>Выберите тип</DropdownToggle>
            <DropdownMenu>
              {device.types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown style={{ marginBottom: '20px' }}>
            <DropdownToggle>Выберите бренд</DropdownToggle>
            <DropdownMenu>
              {device.brands.map((brand) => (
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl style={{ marginBottom: '20px' }} placeholder="Введите название устройства" />
          <FormControl
            type="number"
            placeholder="Введите стоимость устройства"
            style={{ marginBottom: '20px' }}
          />
          <FormControl type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <FormControl placeholder="Введите название" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Введите название описание" />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)} variant="outline-danger">
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateDevice;
