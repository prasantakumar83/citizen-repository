import React, { Component, Fragment } from 'react';
import '../.././App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AgGrid extends Component {
  render() {
     const {
       width,
       height,
       defColumnDef,
       columnDefs,
       hasPagination,
       rowData
      } = this.props
    return (
      <Fragment>
        <div
          className="ag-theme-balham"
          style={{
          height: height,
          width: width }}
        >
          <AgGridReact
            animateRows={true}
            defaultColDef={defColumnDef}
            columnDefs={columnDefs}
            pagination={hasPagination}
            paginationAutoPageSize={hasPagination}
            //rowData={this.state.rowData}
            rowData={rowData}
          >

          </AgGridReact>
        </div>
      </Fragment>
    );
  }
}

export default AgGrid;