import Modal from 'react-modal';
import { Overlay } from '../Modal/Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

Modal.setAppElement('#root');

export const ImgModal = ({ imgLargeURL, alt, onClose, isModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="onRequestClose Example"
    >
      <Overlay>
        <img src={imgLargeURL} alt={alt} />
      </Overlay>
    </Modal>
  );
};
