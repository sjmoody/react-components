// TODO

// Example React component: returns JSX
// var App = () => (
//   <div>Some cliche salutation</div>
// );

// Render a component
// ReactDOM.render(<App />, document.getElementById("app "));

// This would be dynamic but getting error
// var GroceryList = (props) => (
//   {
//     for (item of props.groceries){
//       <GroceryListItem item={props.groceries[item]}/>
//     }
//     </ul>
//   }
// );



// var GroceryList = (props) => (
//   <ul>
//     <GroceryListItem item={props.groceries[0]}/>
//     <GroceryListItem item={props.groceries[1]}/>
//   </ul>
// );


// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );


// ReactDOM.render(<GroceryList groceries={['Cucumbers', 'Kale']} />, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.gli}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(gli =>
      <GroceryListItem gli={gli} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList groceries={['Cucumbers', 'Kale']} />, document.getElementById("app"));
