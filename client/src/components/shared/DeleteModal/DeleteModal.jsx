import React, {Component} from 'react';
import Modal from 'react-modal';
import './DeleteModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0
    }
};

class DeleteModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deleteModalIsOpen: props.deleteModalIsOpen
        };
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentWillReceiveProps(nextProps) {
        const {deleteModalIsOpen} = nextProps;
        this.setState({
            deleteModalIsOpen
        })
    }

    render() {
        const {deleteModalIsOpen} = this.state;
        const {toggleDeleteModal, confirmDeleteModal} = this.props;

        return (
            <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={toggleDeleteModal}
                style={customStyles}
                contentLabel="Delete Redeem Modal">
                <div className="modal-component delete-modal">
                    <button
                        className="modal-close"
                        onClick={toggleDeleteModal}>
                    </button>
                    <h3>Are you sure ?</h3>
                    <button
                        className="modal-confirm"
                        onClick={confirmDeleteModal}>
                        Confirm
                    </button>
                </div>
            </Modal>
        );
    }
}

export default DeleteModal;