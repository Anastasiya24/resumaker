import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Typography from '@material-ui/core/Typography';

const colors = ["#ff4f66", "#7971ea", "#5900d8"];
const project = [
    { color: "#ff4f66", id: 'P1', name: 'Factory', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default modpr text, and a search for lorem ipsum will uncover many web sites still in their infancy. ' },
    { color: "#7971ea", id: 'P2', name: 'Resumaker', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' },
    { color: "#5900d8", id: 'P3', name: 'Player', description: 'Contrary to popular bprief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure ' },
];

const projectEmployees = [
    { id: 'E1', name: 'Artur', lastName: 'Ivanov' },
    { id: 'E2', name: 'Artem', lastName: 'Ivanov' },
    { id: 'E3', name: 'Andrey', lastName: 'Ivanov' }
];

class ProjectAnimated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: undefined,
            activeProject: null
        }
    };

    render() {
        return (
            <div>
                <Typography variant='headline'>
                    Projects
                </Typography>
                <Flipper flipKey={this.state.focused} duration={750}>
                    <main>
                        {typeof this.state.focused === "string" ? (
                            <Flipped flipId={this.state.activeProject.id}>
                                <div
                                    className="focusedItem"
                                    style={{ backgroundColor: this.state.focused }}
                                    onClick={() => this.setState({ focused: null })}
                                >
                                    <Flipped
                                        inverseFlipId={this.state.focused}
                                        transformOrigin="0 0"
                                    >
                                        <div>
                                            <Flipped flipId={`${this.state.focused}-text`} translate>
                                                <div>
                                                    <span>{this.state.activeProject.name}</span>
                                                    <h1>Yes</h1>
                                                    <h3>{this.state.activeProject.description}</h3>
                                                    {projectEmployees.map(em =>
                                                        <div key={em.id}
                                                            style={{ margin: 30, cursor: 'pointer', padding: 10, border: '2px solid #E4F4F6' }}
                                                            onClick={() => this.props.history.push(`/employee/${em.id}`)}
                                                        >
                                                            <Typography variant='headline'>
                                                                {em.name} {em.lastName}
                                                            </Typography>
                                                        </div>
                                                    )}
                                                </div>
                                            </Flipped>
                                        </div>
                                    </Flipped>
                                </div>
                            </Flipped>
                        ) : (
                                <ul className="list">
                                    {project.map(pr => (
                                        <Flipped flipId={pr.id} key={pr.id}>
                                            <li
                                                className="listItem"
                                                style={{ backgroundColor: pr.color }}
                                                onClick={() => this.setState({ focused: pr.color, activeProject: pr })}
                                            >
                                                <Flipped inverseFlipId={pr.id}>
                                                    <div>
                                                        <Flipped flipId={`${pr.id}-text`} translate>
                                                            <span>{pr.name}</span>
                                                        </Flipped>
                                                    </div>
                                                </Flipped>
                                            </li>
                                        </Flipped>
                                    ))}
                                </ul>
                            )}
                    </main>
                </Flipper>
            </div>
        );
    }
}

export default ProjectAnimated;