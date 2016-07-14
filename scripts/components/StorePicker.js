import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function(e) {
    e.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    // transition from storepicker to app
    this.history.pushState(null, '/store/' + storeId);
  },
  render: function() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type='text' ref='storeId' defaultValue={h.getFunName()}/>
        <input type='submit'/>
      </form>
    );
  }

});

export default StorePicker;
