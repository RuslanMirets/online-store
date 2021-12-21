import React from 'react';
import { useState } from 'react';
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
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Добавить тип</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl
            placeholder="Введите название типа"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateType;
