import React from "react";
import PageContext from "../context/index";

const withContext = Component => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {context => <Component {...props} cardContext={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
