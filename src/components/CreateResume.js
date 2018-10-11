import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Project from './Project';
import PopupAddResume from './PopupAddResume';
import ProjectListInResume from './ProjectListInResume';
import NewProjectCard from './NewProjectCard';
import PopupHistoryProject from './PopupHistoryProject';
import PopupToConfirm from './PopupToConfirm';

class CreateResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,
            addNewProject: false,
            openHistoryProject: false
        }
        this.onClickAddResume = this.onClickAddResume.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onClickAddNewVersionProject = this.onClickAddNewVersionProject.bind(this);
        this.onClickAddNewProject = this.onClickAddNewProject.bind(this);
        this.onCloseNewProject = this.onCloseNewProject.bind(this);
        this.onClickAddedResume = this.onClickAddedResume.bind(this);
        this.onClickHistoryResume = this.onClickHistoryResume.bind(this);
        this.onClickRemoveProject = this.onClickRemoveProject.bind(this);
    };

    onClickAddResume() {
        this.setState({
            openPopup: <PopupAddResume handleClose={this.handleClose} />
        })
    };

    handleClose() {
        this.setState({
            openPopup: false,
            openHistory: false
        })
    };

    onClickAddNewVersionProject() {
        this.setState({
            openPopup: <Project handleClose={this.handleClose} />
        })
    };

    onCloseNewProject() {
        this.setState({
            addNewProject: false
        })
    };

    onClickAddedResume() {
        this.setState({
            addNewProject: false
        })
    };

    onClickHistoryResume() {
        this.setState({
            openHistory: <PopupHistoryProject handleClose={this.handleClose} />
        });
    };

    onClickRemoveProject() {
        this.setState({
            openPopup: <PopupToConfirm handleClose={this.handleClose} />
        })
    }

    onClickAddNewProject() {
        this.setState({
            addNewProject:
                <NewProjectCard
                    onCloseNewProject={this.onCloseNewProject}
                    onClickAddedResume={this.onClickAddedResume}
                />
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
                        <Typography variant="subheading" style={{ marginTop: '20px' }}>
                            Employee's projects
                        </Typography>
                        <ProjectListInResume
                            onClickAddNewVersionProject={this.onClickAddNewVersionProject}
                            onClickHistoryResume={this.onClickHistoryResume}
                            onClickRemoveProject={this.onClickRemoveProject}
                        />
                        {this.state.openHistory}
                        {this.state.openPopup}
                        {!this.state.addNewProject &&

                            <Button variant="contained" color="secondary"
                                onClick={this.onClickAddNewProject}
                                style={{ marginTop: '20px' }}
                            >
                                Add a new project
                        </Button>
                        }
                        {this.state.addNewProject}
                    </center>
                </div>
                <center style={{ marginTop: '20px' }}>
                    <Button variant="outlined" color="secondary" onClick={this.onClickAddResume}>
                        Export CV
                        </Button>
                    {this.state.openPopup}
                </center>
            </section>
        )
    }
}

export default CreateResume