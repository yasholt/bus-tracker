import React, {Component} from 'react';
import './Pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: props.amount,
            currentPage: props.currentPage,
            startPage: 0,
            prevPage: 0,
            nextPage: 0,
            endPage: 0,
            countPages: 0,
            showPagination: false
        };

        this.renderNumericButtons = this.renderNumericButtons.bind(this);
    }

    componentWillMount() {
        this.changeLinks();
    }

    componentWillReceiveProps(nextProps) {
        const {amount, currentPage} = nextProps;

        this.setState({
            amount,
            currentPage
        }, () => {
            this.changeLinks();
            this.setState({
                showPagination: true
            });
        });
    }

    changeLinks() {
        const {amount, currentPage} = this.state;
        let newPrevPage, newNextPage, newEndPage, newCountPages;

        newCountPages = Math.ceil(amount / 10);
        newEndPage = newCountPages - 1;
        (currentPage === 0) ? newPrevPage = 0 : newPrevPage = currentPage - 1;
        (currentPage === newEndPage) ? newNextPage = newEndPage : newNextPage = currentPage + 1;

        this.setState({
            prevPage: newPrevPage,
            nextPage: newNextPage,
            endPage: newEndPage,
            countPages: newCountPages
        })
    }

    renderNumericButtons() {
        const {currentPage, endPage, countPages} = this.state;
        const {getData} = this.props;
        let numericButtonsCount;
        let mapArray = [];

        (countPages < 3) ? numericButtonsCount = countPages : numericButtonsCount = 3;

        if (currentPage <= 1) {
            for (let i = 0; i < numericButtonsCount; i++) {
                mapArray.push(i);
            }
        } else if (currentPage === endPage) {
            for (let i = 0; i < numericButtonsCount; i++) {
                mapArray.unshift(currentPage - i);
            }
        } else {
            mapArray = [currentPage - 1, currentPage, currentPage + 1];
        }

        return mapArray.map(item => {
            return (
                <button
                    key={'numericButton' + item}
                    className={(currentPage === item) ? 'active' : ''}
                    onClick={() => getData(item)}>
                    {item + 1}
                </button>
            )
        });
    }

    render() {
        const {startPage, prevPage, nextPage, endPage, currentPage, showPagination, amount} = this.state;
        const {getData} = this.props;
        const {renderNumericButtons} = this;

        return (
            <div className="pagination-component">
                {(showPagination && amount !== 0) &&
                    <div>
                        <button
                            className="start-button"
                            onClick={() => getData(startPage)}
                            disabled={currentPage === startPage}>
                        </button>
                        <button
                            className="prev-button"
                            onClick={() => getData(prevPage)}
                            disabled={currentPage === prevPage}>
                        </button>
                        {renderNumericButtons()}
                        <button
                            className="next-button"
                            onClick={() => getData(nextPage)}
                            disabled={currentPage === nextPage}>
                        </button>
                        <button
                            className="end-button"
                            onClick={() => getData(endPage)}
                            disabled={currentPage === endPage}>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Pagination;