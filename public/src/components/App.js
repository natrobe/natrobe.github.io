import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [
        { key: 1, name: 'Simon' },
        { key: 2, name: 'Simona' },
        { key: 3, name: 'Simonab' },
        { key: 4, name: 'Simonac' },
        { key: 5, name: 'Simonad' },
        { key: 6, name: 'Simonaefff' },
      ],
    };
    this.update = this.update.bind(this);
  }

  update (e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    });
  }

  render () {
    let rows = this.state.data.map(person => <PersonRow data={person} />);

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};

const PersonRow = (props) =>
  <tr>
    <td>{props.data.key}</td>
    <td>{props.data.name}</td>
  </tr>;

export default App;
