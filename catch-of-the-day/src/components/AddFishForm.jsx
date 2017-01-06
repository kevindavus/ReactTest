import React, {Component} from 'react';

class AddFishForm extends Component {
  createFish(event) {
    event.preventDefault();
    console.log('Make fish 🐠');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }

    this
      .props
      .addFish(fish);
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input type="text" ref={(input) => this.name = input} placeholder="Fish Name"/>
        <input
          type="text"
          ref={(input) => this.price = input}
          placeholder="Fish Price"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish Desc"/>
        <input
          type="text"
          ref={(input) => this.image = input}
          placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}
export default
AddFishForm;