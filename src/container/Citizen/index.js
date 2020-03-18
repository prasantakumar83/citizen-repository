import React, { Component } from 'react';
import '../.././App.css';
import AgGrid from '../../components/AgGrid';
import {defColumnDef,CITIZEN_GRID_COLUMN_HEADER} from '../.././utils/Helper';

class Citizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: null
        };
      }

    componentDidMount() {
          fetch('http://localhost:8080/view-all-citizen')
         .then(result => result.json())
         .then(rowData => this.setState({rowData: rowData}))
    }
    render() {
        return (
            <div className="App">
            <h1 className="h2">Citizen Details</h1>
            <AgGrid 
             width= "100%" 
             height="600px"
             defColumnDef= {defColumnDef}
             columnDefs= {CITIZEN_GRID_COLUMN_HEADER}
             hasPagination={true}
             rowData={this.state.rowData}
            />
            </div>
        );
    }
}

export default Citizen;
