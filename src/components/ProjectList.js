import React from 'react';

class Pr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            an: false
        }
        this.onClickAn = this.onClickAn.bind(this);
    };

    onClickAn() {
        if (this.state.an)
            this.setState({ an: false });
        else this.setState({ an: true })
    };

    render() {
        const demo = (this.state.an ? 'es' : 'no')
        return (
            <div>
                <div className={demo} style={{ backgroundColor: 'red', display: 'inline-block' }} onClick={this.onClickAn}>
                    <h1>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                    <h1>Text</h1>
                </div>
            </div>
        )

    }
}

export default Pr;