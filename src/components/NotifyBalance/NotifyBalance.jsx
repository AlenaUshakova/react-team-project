import React, { useEffect, useState } from 'react';
import {
  NotifyBalanceContainer,
  NotifyBalanceText,
  NotifyBalanceTitle,
  StyledBackdrop,
} from './NotifyBalance.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export default function NotifyBalance() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  // Handle close
  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove('no-scroll');
  };
  // Close on backdrop click
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };
  // Add / Remove no-scroll class on body
  useEffect(() => {
    body.classList.add('no-scroll');
    return () => body.classList.remove('no-scroll');
  }, []);

  return createPortal(
    isModalOpen && (
      <StyledBackdrop onClick={handleBackdropClick}>
        <NotifyBalanceContainer>
          <NotifyBalanceTitle>
            Hello! To get started, enter the current balance of your account!
          </NotifyBalanceTitle>
          <NotifyBalanceText>
            You can't spend money until you have it
          </NotifyBalanceText>
        </NotifyBalanceContainer>
      </StyledBackdrop>
    ),
    modalRoot
  );
}
