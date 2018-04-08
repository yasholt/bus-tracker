import React, {Component} from 'react';
import './Error.css';

class Error extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: props.errorMsg
        }
    }

    render() {
        const {errorMsg} = this.state;
        const {hideError} = this.props;

        return (
            <div className="error-component">
                <div className="error-message">
                    {errorMsg}
                </div>
                <div className="close-button">
                    <button
                        onClick={hideError}/>
                </div>
            </div>
        )
    }
}

export default Error;