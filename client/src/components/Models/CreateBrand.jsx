import React from 'react';
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

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">Добавить бренд</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl placeholder="Введите название бренда" />
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

export default CreateBrand;
