import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';
import {MAX_PRIORITY, MIN_PRIORITY} from "../../constants";

const ToDoItem = ({ upPriority, downPriority, removeTask, id, text, username, priority  }) => (
  <li className="todo-item">
    <span className="text">{text}</span>
    <span className="user">{username}</span>
    <div className="panel">
      <span className="priority">{priority}</span>
      <button onClick={() => upPriority(id)} className={priority === MAX_PRIORITY ? 'hide' : 'show button'}>Up</button>
      <button onClick={() => downPriority(id)} className={priority === MIN_PRIORITY ? 'hide' : 'show button'}>Down</button>
      <button onClick={() => removeTask(id)} className='button'>Delete</button>
    </div>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
}

export default ToDoItem;
