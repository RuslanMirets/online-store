import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col className={'mt-3'} md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image className={'mb-1'} width={150} height={150} src={device.img} />
        <div className={'d-flex justify-content-between align-items-center'}>
          <div className={'text-black-50'}>Samsung...</div>
          <div className={'d-flex align-items-center'}>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
