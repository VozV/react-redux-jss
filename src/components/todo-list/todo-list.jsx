import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, upPriority, downPriority }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, user, priority}) => (
      <ToDoItem upPriority={upPriority} downPriority={downPriority} removeTask={removeTask} id={id} key={id} text={text} username={user} priority={priority}/>
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  upPriority: PropTypes.func,
  downPriority: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  upPriority: () => {},
  downPriority: () => {},
}

export default ToDoList;
