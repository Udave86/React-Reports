import React, { Component } from 'react';
import './reports.css';

import Button from '@material-ui/core/Button';
import { Draggable, Droppable } from 'react-drag-and-drop';

export class Reports extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           data: ''
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState() {
        this.setState({data: 'Row Id'})
     }

  render() {
    return (
        <div className="container">
        <div className="row box mt-5 ">
            <div className="col-2 ">
            <Button variant="contained" color="primary">
                 Add
            </Button>
            </div>
            <div className="col-6">
            <form>
                <div className="row">
                    <div className="col">
                        <select id="inputState" class="form-control">
                            <option selected>Order Reports</option>
                            <option>Progress Reports</option>
                        </select>
                        </div>
                    <div class="col">
                    <select id="inputState" class="form-control">
                            <option selected>Table</option>
                            <option>...</option>
                        </select>
                        </div>
                </div>
                </form>
            </div>
            <div className="col-4 ">
            <Button variant="contained" color="primary">
                 Generate Result
            </Button>
            <Button variant="contained" color="warm" className="ml-2">
                 Clear Result
            </Button>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-2 ">
            <h6> Dimensions </h6>
                <ul className="list-group">
                <Draggable type="text" data="Row Id"> 
                <li className="list-group-item"> 
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onClick = {this.updateState}>Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </li>
                </Draggable>
                <Draggable type="Category" data="Category"><li className="list-group-item"> Category </li></Draggable>
                <Draggable type="Sub Category" data="Sub Category"><li className="list-group-item"> Sub Category </li></Draggable>
                <Draggable type="Order Date" data="Order Date"><li className="list-group-item"> Order Date </li></Draggable>
                <Draggable type="Ship Date" data="Ship Date"><li className="list-group-item"> Ship Date </li></Draggable>
                </ul>
                <h6 className="mt-2"> Measures </h6>
                
            </div>
            <div className="col-10 mt-5">
            <Droppable
                types={['data']} // <= allowed drop types
                onDrop={this.onDrop.bind(this)}>
                <div className="row box">
                    <div className="col ">
                        
                        
                <ul className="Smoothie">
                <h6 className="text-left"> Row {this.state.data}</h6>
                </ul>
                
                    </div>
                    <div className="col border-left">
                        <h6 className="text-left"> Columns </h6>
                    </div>
                </div>{/*1st row end here*/}
                <div className="row box mt-3">
                    <div className="col ">
                        <h6 className="text-left"> Fliters </h6>
                    </div>
                    <div className="col border-left">
                        <h6 className="text-left"> test1 </h6>
                    </div>
                </div>{/*2nd row end here*/}
                <div className="row box mt-3">
                    <div className="col ">
                        <h6 className="text-left mb-5"> No Data </h6>
                        <hr/>
                    </div>
                </div>{/*3rd row end here*/}
            
            {/*row and other column end here*/}
            </Droppable>
        </div>
        </div>
        </div>
    )
  }
  onDrop(data) {
    console.log(data);
  }

}

export default Reports;
