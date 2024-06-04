import React, { useCallback, useState } from 'react';
import ODataStore from 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  DataGridTypes,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';
import jsonData from './datos.json';

const pageSizes = [10, 25, 50, 100];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onContentReady = useCallback((e: DataGridTypes.ContentReadyEvent) => {
    if (collapsed) {
      e.component.expandRow(['EnviroCare']);
      setCollapsed(false);
    }
  }, [collapsed]);

  return (
    <DataGrid
      dataSource={jsonData}
      allowColumnReordering={true}
      rowAlternationEnabled={true}
      showBorders={true}
      width="100%"
      onContentReady={onContentReady}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />
      <Grouping autoExpandAll={false} />

      <Column dataField="Futbolistas" groupIndex={0} />
      
      <Column dataField="name" dataType="string" />
      <Column dataField="teams" dataType="string" />
      <Column dataField="age" dataType="number" />

      <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={10} />
    </DataGrid>
  );
};

export default App;
