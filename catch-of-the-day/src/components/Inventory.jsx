import React, {Component} from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.renderInventory = this
      .renderInventory
      .bind(this);

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    //take copy of fish and update with new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this
      .props
      .updateFish(key, updatedFish);
  }

  renderInventory(key) {

    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input
          onChange={(e) => this.handleChange(e, key)}
          type="text"
          name="name"
          value={fish.name}
          placeholder="Fish Name"/>
        <input
          onChange={(e) => this.handleChange(e, key)}
          name="price"
          value={fish.price}
          type="text"
          placeholder="Fish Price"/>
        <select
          onChange={(e) => this.handleChange(e, key)}
          name="status"
          value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          onChange={(e) => this.handleChange(e, key)}
          name="desc"
          defaultValue={fish.desc}
          placeholder="Fish Desc"/>
        <input
          onChange={(e) => this.handleChange(e, key)}
          name="image"
          value={fish.image}
          type="text"
          placeholder="Fish Image"/>

        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object
          .keys(this.props.fishes)
          .map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fish</button>
      </div>
    );
  }
}

export default Inventory;