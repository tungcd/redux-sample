import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortValue: 0
        }
    }

    onToggleForm = () => {
        this.props.onClearAdd();
        this.props.onToggleForm();
        
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        }
        );
    }

    render() {

        var {
            sortBy,
            sortValue } = this.state;
            var { isDisplayForm } = this.props; 

        return (
            
            <div className="App">
                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        <TaskForm /> 
                        </div>
                        <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            <button type="button"
                                className={isDisplayForm === true ? "btn btn-danger" : "btn btn-primary"}
                                onClick={this.onToggleForm}
                            >
                                <span className={isDisplayForm === true ? '' : "fa fa-plus mr-5"} />{isDisplayForm === true ? 'Đóng' : 'Thêm công việc'}
                            </button>

                            <Control />

                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return{
        isDisplayForm: state.isDisplayForm,
        itemEditting : state.itemEditting
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
      onToggleForm : () =>{
        dispatch(actions.toggleForm())  
      },
      onClearAdd : (task) =>{
        dispatch(actions.clearAdd(task))  
      }
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
