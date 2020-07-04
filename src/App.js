import React from 'react';
import btsLogo from './BTS 3 Discs - Gradient.png';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    }
  }
  
  addItem(todoValue) {
    if (todoValue !== '') {
      
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ''
      });
    }

    console.log(this.state.list);
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });

    console.log(this.state.list);
  }

  isDoneToDo(id) {
    const updatedList = [...this.state.list];

    for(let i = 0; i < updatedList.length; i++) {
      if ( updatedList[i].id === id) {
        updatedList[i].isDone = true;
      }
    }
  
    this.setState({
      list: updatedList
    });

    console.log(this.state.list);
  }

  
  updateInput(input) {
    this.setState({
      newItem: input
    });

    console.log(this.state.list);
  }

  render() {
    return(
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-3">
            </div>
            
            <div className="col-6 struct-holder">
              <div className="struct-img">
                <img src={btsLogo} width="5%" className="logo-img" />
              </div>
                <h1 className="app-title">ToDo  App</h1>
                <hr style={{border: '0.1em solid #f33b70', borderRadius: '2em', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />

                <div className="todo-holder">
                  <div className="form-group">
                    <h5 className="InputItem">Add Item's..</h5>
                    <div className="row">
                      <div className="col-9">
                        <input type="text" className="form-control" value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} id="InputItem" aria-describedby="emailHelp" placeholder="Add Item's here.." required /> 
                      </div>
                      <div className="col-3">
                        <button type="button" className="btn btn-warning" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length} >Add ToDo</button>
                      </div>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Please enter ToDo Item in above box.</small>
                  </div>

                  <div className="todo-list-container">
                    <ul className="todo-list">
                      {this.state.list.map(item => {
                        return(
                          <li key={item.id}>
                            <div className="form-group form-check ">
                              <div className="row">
                                <div className="col-8 todo-list-text">
                                  <input type="checkbox"  name="idDone" checked={item.isDone} onChange={() => this.isDoneToDo(item.id)} className="form-check-input" id="exampleCheck1" />
                                  <h6 className="form-check-label"  style={{paddingTop: '0.1em'}}>{item.value}</h6>
                                </div>
                                <div className="col-4">
                                  <button type="button" onClick={() => this.deleteItem(item.id)} className="btn btn-warning">Delete ToDo</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            
            <div className="col-3">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;