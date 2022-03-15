import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view'


import BaseModal from './BaseModal';

import { ContainerModal, HeaderModal, BodyModal } from '@styles/global.style';
import IconClose from '@public/images/icon-close.svg';

interface ModalProps {
  isOpen: boolean;
  shouldCloseOnOverlayClick?: boolean;
  referenceCode: string;
  payload: any;
  onRequestClose: () => void;
}

export default function SwarmReferenceModal({
  isOpen,
  shouldCloseOnOverlayClick,
  referenceCode,
  payload,
  onRequestClose,
}: ModalProps) {
  return (
    <BaseModal
      maxWidth={640}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onRequestClose}
    >
      <ContainerModal>
        <HeaderModal>
          <div className="flex items-center justify-between">
            <p>ORDER REFERENCE</p>
            <button
              className="flex justify-center items-center w-4 h-w-4"
              onClick={onRequestClose}
            >
              <IconClose />
            </button>
          </div>
        </HeaderModal>
        <BodyModal>
          <div className="container">
            <p className='text-center'>Send your Order Reference below to <a href="#cashier">Cashier</a> !</p>
            <div className='w-full border rounded-xl h-24 mt-2'>
              <p className='break-words mx-3 my-3 text-lg font-bold'>{referenceCode}</p>
            </div>
            {/* <div className='mt-5'>
              <p className='mb-2'>Uploaded data to SWARM Preview :</p>
              <ReactJson src={payload} collapseStringsAfterLength={25} name={"payload"} collapsed={true} />
            </div> */}
          </div>
        </BodyModal>
      </ContainerModal>
    </BaseModal>
  );
}
