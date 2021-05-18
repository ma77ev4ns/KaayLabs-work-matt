import React from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute as PropertiesRoute } from '../shared/route-utilities';
import Search from './search'
import DetailPage from './detail-page'


const SupplierRelationshipManagement = (properties) => {
    const { match, location } = properties;
    const pathLength = location.pathname.split('/').filter((item) => !!item);
    return (
      <Switch>
        <PropertiesRoute
          path={`${match.url}/supplier-detail/:id(\\d+)`}
          component={DetailPage}
          {...properties}
        />
        <PropertiesRoute
          path={match.url}
          component={ Search }
          {...properties}
        />
      </Switch>
    );
  };
  
  export default SupplierRelationshipManagement;