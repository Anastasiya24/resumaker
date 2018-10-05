import React, { Component } from 'react';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExcelPicture from './img/microsoft-excel.png'

const allResume = [
    { name: 'A1', comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'A2', comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'A3', comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'A4', comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { name: 'A5', comment: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
];

class HistoryResume extends Component {
    constructor(props){
        super(props);
        this.onLoadResume = this.onLoadResume.bind(this)
    }
    
    onLoadResume(resume){
        console.log(`Resume ${resume}`)
    }

    render() {
        return (
            <div>
                {allResume.map(el =>
                    <div key={el.name} 
                        style={{margin: 30, cursor: 'pointer', padding:10, border:'2px solid #E4F4F6'}}
                        onClick={() => this.onLoadResume(el.name)}
                    >
                        <Grid container spacing={16}>
                            <Grid  item xs={1}>
                                <img src={ExcelPicture} alt='excel' style={{ width: '70px' }} />
                            </Grid>
                            <Grid  item xs={10}>
                                <Typography variant='headline'>
                                    {el.name}
                                </Typography>
                                <Typography variant="subheading" >
                                    {el.comment}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                )}

            </div>
        )
    }
}

export default HistoryResume