import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    console.log('changing the URL')
    //grab text from box
    console.log('/store/' + this.storeInput.value)
    //add /store/:storeID
    const storeId = this.storeInput.value;
    this
      .context
      .router
      .transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <div>
        <form className="store-selector" onSubmit={(e) => this.goToStore(event)}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
            ref={(input) => {
            this.storeInput = input
          }}/>
          <button type="submit">Visit Store ➙</button>
        </form>
      </div>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
