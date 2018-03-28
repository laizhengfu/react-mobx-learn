import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footText: 'Footer'
        };

        this.changeText = this.changeText.bind(this);
    }

    changeText() {
        this.setState({
            footText: this.state.footText === 'Footer' ? 'Footer changed' : 'Footer'
        });
    }

    render() { 
        return (
            <div>
                <div>{this.state.footText}</div>
                <button type="button" onClick={this.changeText}>Click Button</button>
            </div>
        )
    }
}
 
export default Footer;