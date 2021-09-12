import { Modal, Row } from 'antd';
import React from 'react';
import { ModalDetails } from './styles/modal-details.styled';

/**
 * @interface Props
 * @prop {boolean} Props.showDirectorDetails - Value denoting whether the director detail modal is shown or hidden
 * @prop {void} Props.setShowDirectorDetails - Show or hide the director details modal
 */
interface Props {
  showDirectorDetails: boolean;
  setShowDirectorDetails: (show: boolean) => void;
}

export const DirectorDetails: React.FC<Props> = ({
  setShowDirectorDetails,
  showDirectorDetails,
}) => {
  return (
    <Modal
      visible={showDirectorDetails}
      onCancel={() => setShowDirectorDetails(false)}
      footer={null}
    >
      <ModalDetails>
        <Row>
          <span className="director_modal__title">Christopher Nolan</span>
        </Row>
        <Row>
          <img
            src="https://www.looper.com/img/gallery/we-finally-know-what-christopher-nolans-next-movie-will-be/intro-1631232254.jpg"
            style={{ width: '100%', marginTop: '20px' }}
          />
        </Row>
        <Row>
          <p style={{ marginTop: '20px' }}>
            Born and raised in London, Nolan developed an interest in filmmaking
            from a young age. After studying English literature at University
            College London, he made his feature debut with Following (1998).
            Nolan gained international recognition with his second film, Memento
            (2000), for which he was nominated for the Academy Award for Best
            Original Screenplay.
          </p>
        </Row>
      </ModalDetails>
    </Modal>
  );
};
