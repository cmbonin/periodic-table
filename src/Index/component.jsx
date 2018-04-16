import React from 'react';
import PeriodicTable from '../PeriodicTable/component';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          <div className="container">
            <h1>Periodic table</h1>
          </div>
        </header>
        <main className="main-content">
          <div className="container">
            <PeriodicTable />
          </div>
        </main>
      </div>
    );
  }
}
