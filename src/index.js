import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {Carousel} from 'react-responsive-carousel'

class Image extends React.Component{
    
    
    render() {
        return (
            <Carousel>
                <div>
                    <img src="jain.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
};
ReactDOM.render(<Image/>, document.getElementById('root'));