import React, { Component } from 'react';

export default class Checkbox3 extends Component {
  handleClick = value => () => {
    console.log('handleClick', value);
    this.props.onChange(value);
  };

  render() {
    let { value } = this.props;
    let yes = value === 'yes';
    let no = value === 'no';

    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick(yes ? 'unknown' : 'yes')}
        >
          {yes ? 'Unknown' : 'Approved'}
        </button>
        <button
          type="button"
          onClick={this.handleClick(no ? 'unknown' : 'no')}
        >
          {no ? 'Unknown' : 'Rejected'}
        </button>
        <div>
          {yes &&
            <span>Approved</span>}
          {no &&
            <span>Rejected</span>}
          {!yes &&
            !no &&
            <span>Unknown</span>}
        </div>
      </div>
    );
  }
}
