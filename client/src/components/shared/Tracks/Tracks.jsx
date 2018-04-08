import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';

import Pagination from '../../shared/Pagination/Pagination';
import Error from '../../shared/Error/Error';
import Preloader from '../../shared/Preloader/Preloader';
import DeleteModal from '../../shared/DeleteModal/DeleteModal';

import {tracksService} from '../../../services/tracks'
import {authModule}  from '../../../modules/auth';
import {tableStyles}  from '../../../constants/tableStyles';
import {formatDate} from '../../../helpers/formatDate';

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackID: '',
            isRequestActive: false,
            tracks: [],
            amount: 0,
            currentPage: 0,
            errorMsg: '',
            deleteModalIsOpen: false,
        };
        this.getTracks = this.getTracks.bind(this);
        this.hideError = this.hideError.bind(this);
        this.showError = this.showError.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        this.confirmDeleteModal = this.confirmDeleteModal.bind(this);
    }

    componentDidMount() {
        this.getTracks(this.state.currentPage);
    }

    getTracks(page) {
        const {isUserAdmin} = authModule;
        const {auth} = this.props;

        this.setState({
            isRequestActive: true
        });

        if (isUserAdmin(auth)) {
            tracksService
                .getTracksByAdmin(page, 10)
                .then(response => {
                    this.setState({
                        isRequestActive: false,
                        tracks: response.data.tracks,
                        amount: response.data.amount,
                        currentPage: page
                    })
                });
        } else {
            tracksService
                .getTracksByDriver(page, 10, auth.id)
                .then(response => {
                    this.setState({
                        isRequestActive: false,
                        tracks: response.data.tracks,
                        amount: response.data.amount,
                        currentPage: page
                    })
                });
        }
    }

    toggleDeleteModal(trackID) {
        this.setState({
            deleteModalIsOpen: !this.state.deleteModalIsOpen,
            trackID
        })
    }

    confirmDeleteModal() {
        const {currentPage, trackID} = this.state;
        const {auth} = this.props;
        const {showError, getTracks, toggleDeleteModal} = this;
        const {isUserAdmin} = authModule;

        toggleDeleteModal();

        if (isUserAdmin(auth)) {
            tracksService
                .deleteTrackByAdmin(trackID)
                .then(() => {
                    getTracks(currentPage);
                })
                .catch(error => {
                    console.log('error',/* error.response.data.message*/);
                    showError(error);
                })
        } else {
            tracksService
                .deleteTrackByDriver(trackID)
                .then(() => {
                    getTracks(currentPage);
                })
                .catch(error => {
                    console.log('error',/* error.response.data.message*/);
                    showError(error);
                })
        }
    }

    deleteTrack() {
        const {isUserAdmin} = authModule;
        const {auth} = this.props;

        if (isUserAdmin(auth)) {
            //admin stuff
        } else {
            /*tracksService.deleteTrack(selectedRows)
                .then(() => {
                    this.getRedeems(currentPage);
                })
                .catch(error => {
                    this.showError(error);
                });*/
        }
    }

    hideError() {
        this.setState({
            errorMsg: ''
        })
    }

    showError(errorMsg) {
        this.setState({
            errorMsg: errorMsg
        })
    }

    render() {
        const {isRequestActive, errorMsg, tracks, amount, currentPage, deleteModalIsOpen} = this.state;
        const {getTracks, toggleDeleteModal, confirmDeleteModal, hideError} = this;

        return (
            <div className="tracks-component">
                <div className="table-container">
                    <div className="controls-block">
                        <Pagination
                            amount={amount}
                            getData={getTracks}
                            currentPage={currentPage}/>
                    </div>
                    {(!isRequestActive && (errorMsg === '')) &&
                    <div className="table-block">
                        <MuiThemeProvider>
                        <Table>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                                style={tableStyles.tableHeaderStyles}>
                                <TableRow
                                    style={tableStyles.headerTableRowStyles}>
                                    <TableHeaderColumn
                                        style={{width:'100px'}}>
                                        <span className="table-header-span">ID</span>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <span className="table-header-span">Track Name</span>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <span className="table-header-span">Creation Date</span>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <span className="table-header-span">Update date</span>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        style={{width:'100px'}}>
                                        <span className="table-header-span">Actions</span>
                                    </TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={false}>
                                {
                                    tracks.map(item => {
                                        return (
                                            <TableRow
                                                style={tableStyles.bodyTableRowStyles}
                                                key={item.id}>
                                                <TableRowColumn
                                                    style={{width: '100px'}}>
                                                    <span
                                                        onClick={(e) => {e.stopPropagation()}}
                                                        className="table-body-span">
                                                        {item.id}
                                                    </span>
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    <span
                                                        onClick={(e) => {e.stopPropagation()}}
                                                        className="table-body-span">
                                                        {item.trackName}
                                                    </span>
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    <span
                                                        onClick={(e) => {e.stopPropagation()}}
                                                        className="table-body-span">
                                                        {formatDate(item.createdAt)}
                                                    </span>
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    <span
                                                        onClick={(e) => {e.stopPropagation()}}
                                                        className="table-body-span">
                                                        {formatDate(item.updatedAt)}
                                                    </span>
                                                </TableRowColumn>
                                                <TableRowColumn
                                                    style={{width: '100px'}}>
                                                    <span onClick={(e) => {e.stopPropagation()}}
                                                          className="table-body-span actions">
                                                        <i className="material-icons particular-item-control"
                                                           title="Delete Track"
                                                           onClick={() => toggleDeleteModal(item.id)}>
                                                            delete
                                                        </i>
                                                        <i className="material-icons particular-item-control"
                                                           title="Edit Track">
                                                            edit
                                                        </i>
                                                    </span>
                                                </TableRowColumn>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        </MuiThemeProvider>
                    </div>
                    }
                </div>

                {(isRequestActive && (errorMsg === '')) &&
                    <Preloader/>
                }

                {(errorMsg !== '') &&
                <Error
                    hideError={hideError}
                    errorMsg={errorMsg}/>
                }

                {deleteModalIsOpen &&
                <DeleteModal
                    deleteModalIsOpen={deleteModalIsOpen}
                    confirmDeleteModal={confirmDeleteModal}
                    toggleDeleteModal={toggleDeleteModal}/>
                }
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Tracks);