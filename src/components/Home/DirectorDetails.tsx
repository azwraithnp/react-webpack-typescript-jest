import { Modal, Row } from 'antd';
import React from 'react';
import Director from 'src/interfaces/director';
import { API_URL } from '../../../utils/urls';
import { ModalDetails } from './styles/modal-details.styled';

/**
 * @interface Props
 * @prop {boolean} Props.showDirectorDetails - Value denoting whether the director detail modal is shown or hidden, returns Director object when shown
 * @prop {void} Props.setShowDirectorDetails - Show or hide the director details modal
 */
interface Props {
  showDirectorDetails: Director | null;
  setShowDirectorDetails: (show: Director | null) => void;
}

/**
 *
 * @param {Props} Props passed to the component
 * @returns Detail view to show when director's name is clicked
 */
export const DirectorDetails: React.FC<Props> = ({
  setShowDirectorDetails,
  showDirectorDetails,
}) => {
  return (
    <Modal
      visible={!!showDirectorDetails}
      onCancel={() => setShowDirectorDetails(null)}
      footer={null}
    >
      <ModalDetails>
        <Row>
          <span className="director_modal__title">
            {showDirectorDetails?.name}
          </span>
        </Row>
        <Row>
          <img
            src={API_URL + showDirectorDetails?.cover?.url}
            style={{ width: '100%', marginTop: '20px' }}
          />
        </Row>
        <Row>
          <p style={{ marginTop: '20px' }}>
            {showDirectorDetails?.description}
          </p>
        </Row>
      </ModalDetails>
    </Modal>
  );
};
