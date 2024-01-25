import { useState } from 'react';
import Modal from 'react-modal';
import {
  CourseCustomItem,
  ModalContainer,
  ModalInfoSpan,
  CloseModalButton,
} from './CourseItem.styled';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(37, 37, 37, 0.80)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

const CourseItem = ({
  title,
  imageSrc,
  subjectCoordinator,
  coordinatorEmail,
  schedule,
  classroom,
}) => {
  const [isModalOppen, setIsModalOppen] = useState(false);

  const closeModal = () => {
    setIsModalOppen(false);
  };

  const afterOpenModal = () => {};

  return (
    <CourseCustomItem>
      <img
        src={imageSrc}
        width="230"
        height="80"
        onClick={() => setIsModalOppen(true)}
      />
      <p>{title}</p>
      <Modal
        isOpen={isModalOppen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseModalButton onClick={closeModal}>x</CloseModalButton>
        <ModalContainer>
          <img src={imageSrc} width="600" height="226" />
          <h3>{title}</h3>
          <p>
            <ModalInfoSpan>Subject Coordinator:</ModalInfoSpan>{' '}
            {subjectCoordinator}
          </p>
          <p>
            <ModalInfoSpan>Coordinator email:</ModalInfoSpan> {coordinatorEmail}
          </p>
          <p>
            <ModalInfoSpan>Schedule:</ModalInfoSpan> {schedule}
          </p>
          <p>
            <ModalInfoSpan>Classroom:</ModalInfoSpan> {classroom}
          </p>
        </ModalContainer>
      </Modal>
    </CourseCustomItem>
  );
};

export default CourseItem;
