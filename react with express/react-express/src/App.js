import React from "react";
import 'devextreme/dist/css/dx.light.css';
import "./App.css";

import ODataStore from "devextreme/data/odata/store";

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  Editing,
  FilterRow,
  ColumnChooser,
} from "devextreme-react/data-grid";

import { employees } from "./employess";

const pageSizes = [10, 25, 50, 100];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DataGrid
            dataSource={employees}
            keyExpr="EmployeeID"
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            onContentReady={this.onContentReady}
          >
            <Column dataField="FullName"></Column>
            <Column dataField="Position"></Column>
            <Column dataField="BirthDate" dataType="date" width={100}></Column>
            <Column dataField="HireDate" dataType="date" width={100}></Column>
            <Column dataField="City" />
            <Column
              dataField="Country"
              sortOrder="asc"
            ></Column>
            <Column dataField="Address" />
            <Column dataField="HomePhone" />
            <Column dataField="PostalCode" />
            <Editing
              mode="popup"
              allowUpdating={true}
              allowDeleting={true}
              allowAdding={true}
            />
            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
            <FilterRow visible={true} />
            <SearchPanel visible={true} />
            <ColumnChooser enabled={true} />
          </DataGrid>
        </header>
      </div>
    );
  }

  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(["EnviroCare"]);
      this.setState({
        collapsed: true,
      });
    }
  }
}

export default App;
