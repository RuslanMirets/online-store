import React, { useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Добавить бренд</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl
            placeholder="Введите название бренда"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateBrand;
