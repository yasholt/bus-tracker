import React, {Component} from 'react';
import PreloaderGif from '../../../images/preloader.gif';
import './Preloader.css';

class Preloader extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="preloader-component">
                <img src={PreloaderGif} alt="Preloader"/>
            </div>
        )
    }
}

export default Preloader;