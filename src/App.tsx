import React, { useCallback, useState } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';
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
import mensajesEs from './lang/es-MX.json';

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
    
      <div>
      <IntlProvider locale='es-MX' messages={mensajesEs} >
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
        <Grouping autoExpandAll={true} />

        <Column dataField="Futbolistas" groupIndex={0} />
        
        <Column dataField="name" dataType="string" caption={mensajesEs['app.name']}/>
        <Column dataField="teams" dataType="string" caption={mensajesEs['app.teams']}/>
        <Column dataField="age" dataType="number" caption={mensajesEs['app.age']} />
        <Column dataField="salary" dataType="number" format="currency" caption={mensajesEs['app.salary']} />

        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid> 
    </IntlProvider>
      </div>
    
  );
};

export default App;
