import React, { useCallback, useState, useContext } from 'react';
import {IntlProvider} from 'react-intl';
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
import mensajesEn from './lang/en-US.json';

const pageSizes = [10, 25, 50, 100];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onContentReady = useCallback((e: DataGridTypes.ContentReadyEvent) => {
    if (collapsed) {
      e.component.expandRow(['EnviroCare']);
      setCollapsed(false);
    }
  }, [collapsed]);

  var mensajes = mensajesEs;


  return (
    
      <div>
      <IntlProvider locale='es-MX' messages={mensajes}>
      <div>
          <button>Español</button>
          <button>Ingles</button>
        </div>
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
            
            <Column dataField="name" dataType="string" caption={mensajes['app.name']}/>
            <Column dataField="teams" dataType="string" caption={mensajes['app.teams']}/>
            <Column dataField="age" dataType="number" caption={mensajes['app.age']} />
            <Column dataField="salary" dataType="number" format="currency" caption={mensajes['app.salary']} />

            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
        </DataGrid> 
      </IntlProvider>
      </div>
    
  );
};

export default App;
