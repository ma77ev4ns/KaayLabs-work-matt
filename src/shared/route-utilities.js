import React from 'react';
import { Route } from 'react-router-dom';

const renderMergedProperties = (component, ...rest) => {
  const finalProperties = Object.assign({}, ...rest);
  return React.createElement(component, finalProperties);
};

const PropertiesRoute = ({ component, path, exact, location, ...rest }) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProperties) =>
      renderMergedProperties(component, routeProperties, rest)
    }
  />
);

export { PropertiesRoute as PropsRoute };
