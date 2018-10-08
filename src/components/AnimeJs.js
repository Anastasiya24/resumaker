import React, { Component } from 'react';
import anime from "animejs"

const items = [
    { id: 'A1', text: 'aa' },
    { id: 'A2', text: 'bb' },
    { id: 'A3', text: 'vv' },
]

class An extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            click: null
        };

        items.map(et =>
            this[et.id] = React.createRef()
        )
    };

    componentDidUpdate() {
        
    }

    add(el) {
        anime({
            targets: this[el].current,
            translateX: 770
        });
        this.setState({
            click: el
        })
    }

    render() {
        return (
            <div>
                <h1>AnimeJs</h1>
                {items.map(el =>
                    (<div key={el.id}>
                        <div ref={this[el.id]} style={{ backgroundColor: 'red', width: 800 }} onClick={this.add.bind(this, el.id)}>{el.text}</div>
                        <br />
                    </div>)
                )}
            </div>
        )
    }
}

export default An