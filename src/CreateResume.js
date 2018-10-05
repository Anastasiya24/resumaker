import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Project from './Project';
import PopupAddResume from './PopupAddResume';

class CreateResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
        this.onClickAddResume = this.onClickAddResume.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    onClickAddResume() {
        this.setState({
            openPopup: <PopupAddResume handleClose={this.handleClose} />
        })
    };

    handleClose() {
        this.setState({
            openPopup: false
        })
    };

    render() {
        return (
            <section style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className="summary">
                    <center>
                        <Typography variant="subheading" component="p" >
                            Summary
                        </Typography>
                        <TextField
                            id="multiline-flexible"
                            label="Summary"
                            multiline
                            rowsMax="4"
                            //  value={this.state.multiline}
                            //  onChange={this.handleChange('multiline')}
                            placeholder="Summary"
                            style={{ marginBottom: '20px' }}
                        />
                        {/* <TextField
                            id="standard-full-width"
                            label="Summary"
                            fullWidth
                            style={{margin: 8}}
                        /> */}
                    </center>
                </div>
                <div className='projectInfo'>
                    <center>
                        <Project />
                    </center>
                </div>
                <center style={{ marginTop: '20px' }}>
                    <Button variant="outlined" color="secondary" onClick={this.onClickAddResume}>
                        Add the resume
                    </Button>
                    {this.state.openPopup}
                </center>
            </section>
        )
    }
}

export default CreateResume