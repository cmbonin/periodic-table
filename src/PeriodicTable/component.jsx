import React from 'react';
import elements from '../data/elements';
import Element from '../Element/component';
import styles from './styles.scss';

export default class PeriodicTable extends React.Component {
  render () {
    const elementData = elements || [];
    const htmlElements = elementData.map((elem, index) => <Element key={index} elem={elem} /> );
    return (
      <div>
        <div className={styles.gridWrapper}>
          { htmlElements }
        </div>
      </div>
    );
  }
}
