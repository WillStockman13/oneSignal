import React from 'react';

const App = ({ children }) => (
  <div className="App container">
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;