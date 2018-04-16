import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './styles.scss';

export default class Element extends React.Component {
  render () {
    const details = this.props.elem;
    const inlineStyles = {
      gridColumn: details.xpos,
      gridRow: details.ypos
    };
    const category = (details.category || '').toLowerCase().split(/[\s\-]+/).join('_');
    const classNames = `${styles.element} ${styles[category]}`;
    const tooltip = `<div class=${styles.tooltip}>
      <div>${details.summary}</div>
      <div class=${styles.state}>state: <span>${details.state}</span></div>
    </div>`;
    return (
        <div style={ inlineStyles } className={classNames}  data-html={true} data-tip={tooltip}>
          <div className={styles.elName}>{details.name}</div>
          { details.symbol || '' }
          <ReactTooltip place="right" type="light" effect="float"/>
        </div>
    );
  }
}
