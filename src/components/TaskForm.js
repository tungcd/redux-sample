import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }

    }

    // componentWillMount = () => {
    //   if(this.props.taskEditing){
    //     this.setState({
    //       id: this.props.taskEditing.id,
    //       name: this.props.taskEditing.name,
    //       status: this.props.taskEditing.status
    //     });
    //   }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState({
                id: nextProps.itemEditting.id,
                name: nextProps.itemEditting.name,
                status: nextProps.itemEditting.status
            });
        }
    }

    onChange = (event) => {

        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.props.onToggleForm();

    }

    onClearTask = (event) => {
        event.preventDefault();
        this.props.onClearTask();
    }

    render() {

        if (!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span className="fa fa-time-circle text-right"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form  >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                            required="required"
                            value={this.state.status}
                            onChange={this.onChange}
                            name="status"
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit"
                                onClick={this.onSubmit}
                                className="btn btn-warning"
                            >Lưu lại</button>&nbsp;
              <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={this.onClearTask}
                            >
                                Hủy Bỏ
                </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditting: state.itemEditting
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: task => {
            dispatch(actions.addTask(task))
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearForm: () => {
            dispatch(actions.clearForm())
        },
        onOpenForm: task => {
            dispatch(actions.editItem(task))
        },
        onClearTask: task => {
            dispatch(actions.clearTask(task))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
