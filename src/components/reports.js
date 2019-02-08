import React, { Component } from 'react';
import './reports.css';

import Button from '@material-ui/core/Button';

export class Reports extends Component {
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
                <div class="row">
                    <div class="col">
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
                    <li className="list-group-item"> Row Id </li>
                    <li className="list-group-item"> Category </li>
                    <li className="list-group-item"> Sub Category </li>
                    <li className="list-group-item"> Order Date </li>
                    <li className="list-group-item"> Ship Date </li>
                </ul>
                <h6 className="mt-2"> Measures </h6>
                <ul className="list-group">
                    <li className="list-group-item"> Sales </li>
                    <li className="list-group-item"> Quantity </li>
                    <li className="list-group-item"> Discount </li>
                    <li className="list-group-item"> Profit </li>
                </ul>
            </div>
            <div className="col-10 mt-5">
                <div className="row box">
                    <div className="col ">
                        <h6 className="text-left"> Row </h6>
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
            </div>
            {/*row and other column end here*/}

        </div>
        </div>
    )
  }
}

export default Reports;
