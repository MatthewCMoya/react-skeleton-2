import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Matt',
  phone: '444 443 4444'
}, {
  id: 2,
   name: 'moya',
  phone: '344 443 4444'
}, {
  id: 3,
   name: 'charles',
  phone: '664 443 4444'
}, {
  id: 4,
  name: 'charldddes',
  phone: '665 443 4444'
}]


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
