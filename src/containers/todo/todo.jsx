import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, upPriority, downPriority, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';
import {MAX_PRIORITY, MIN_PRIORITY} from "../../constants";

class ToDo extends Component {

  state = {
    taskText: '',
    priority: 0,
    userId: this.props.users[0].id,
/*    validationTask: {
      description: true,
      priority: true,
      user: true,
    }*/
  }

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  handleInputChange = ({ target: { value } }) => {
    if (isFinite(value)) {
      value = value > MAX_PRIORITY ? MAX_PRIORITY : (value < MIN_PRIORITY ? MIN_PRIORITY: value);
      this.setState({
        priority: value,
      })
    }
  }

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      userId: value,
    })
  }

  addTask = () => {
    const { taskText, priority, userId } = this.state;
    const { addTask, users } = this.props;

    if (users[0].id === userId) {
      return;
    }
    addTask((new Date()).getTime(), taskText, users.find(usr => usr.id === userId).name, priority , false);
    this.setState({
      taskText: '',
      priority: 0,
      userId: this.props.users[0].id,
    });
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'asc':
        return tasks.sort((a, b) => b.priority - a.priority);
      case 'desk':
        return tasks.sort((a, b) => a.priority - b.priority);
      default:
        return tasks;
    }
  }


  render() {
    const { taskText, priority, user } = this.state;
    const { tasks, upPriority, downPriority, removeTask, filters, changeFilter, users } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);

    return (
      <div className="todo-wrapper">
        <ToDoInput onclick={this.addTask} users={users}
          textarea={taskText} textareaHandle = {this.handleTextareaChange}
          priority={priority} inputHandle = {this.handleInputChange}
          user={user} selectHandle = {this.handleSelectChange}/>
        {isTasksExist && <ToDoList upPriority={upPriority} downPriority={downPriority} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters, users}) => ({
  tasks,
  filters,
  users,
}), { addTask, removeTask, upPriority, downPriority, changeFilter })(ToDo);
