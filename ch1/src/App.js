import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Plan  from './Plan'



class App extends Component {
  state={
    items:[],
    text :""
  }

  handleChange = e =>{
    this.setState({text: e.target.value})
  }

  handleAdd = e =>{
    if(this.state.text !== ""){
      const items=[...this.state.items,this.state.text];
      this.setState({items:items,text:""});
    }
  }

  handledelete = id =>{
    console.log("deleted",id);
    const Olditems=[...this.state.items]
    const items=Olditems.filter((element,i) => {
      return i !== id
    })
    this.setState({items:items})
  }

  render(){
    return(
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto shadow-ld p-3'>
            <h1 className='text-center'>Today's Plan</h1>
            <h2 className='row'>
              <div className='col-9'>
              <input type='text' className='form-control' placeholder='Write Plan here' value={this.state.text} onChange={this.handleChange}></input>
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className='container-fluid'>
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value,i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handledelete} />
                    })
                  }
                  {/* {console.log(this.state.items)} */}
                </ul>
              </div>
            <div>
              
            </div>
            </h2>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
