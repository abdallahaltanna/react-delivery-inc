import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import './AddPackageModule.css';
import { useAppContext } from '../../context/context';

const AddPackageModal = () => {
  const { addPackage, displayModal } = useAppContext();

  const [modalData, setModalData] = useState({
    id: '',
    weight: '',
    customerid: 0,
    price: 0,
    shippingOrder: 0,
  });

  const handlePackageInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setModalData({ ...modalData, [name]: value });
  };

  return (
    <Modal
      open={true}
      onClose={() => displayModal()}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='box-modal'>
        <form>
          <div>
            <TextField
              name='id'
              value={modalData.id}
              onChange={handlePackageInputs}
              label='ID'
              variant='standard'
              className='input-field'
            />

            <TextField
              name='weight'
              value={modalData.weight}
              onChange={handlePackageInputs}
              label='Weight'
              variant='standard'
              className='input-field'
            />

            <TextField
              name='customerId'
              value={modalData.customerId}
              onChange={handlePackageInputs}
              label='Customer ID'
              variant='standard'
              className='input-field'
            />

            <TextField
              name='price'
              value={modalData.price}
              onChange={handlePackageInputs}
              label='Price'
              variant='standard'
              className='input-field'
            />

            <TextField
              name='shippingOrder'
              value={modalData.shippingOrder}
              onChange={handlePackageInputs}
              label='Shipping Order'
              variant='standard'
              className='input-field'
            />
          </div>
          <Button
            onClick={() => {
              const { id, weight, customerId, price, shippingOrder } =
                modalData;
              if (!id || !weight || !customerId || !price || !shippingOrder) {
                return;
              }
              addPackage(modalData);
              displayModal();
            }}
            variant='contained'
            className='add_package_btn'
          >
            Add Package
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPackageModal;
