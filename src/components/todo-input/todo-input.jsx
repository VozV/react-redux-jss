import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ onclick, users, textarea, textareaHandle, priority, inputHandle, user, selectHandle}) => (
  <div className='todo-input'>
    <textarea
      className='textarea-input'
      placeholder='Описание...'
      onChange={textareaHandle}
      value={textarea}
    />
    <select className='select-input' defaultValue={user} onChange={selectHandle}>
        {users.map(usr =>
          <option key={usr.id}  value={usr.id}>{usr.name}</option>
        )}
    </select>
      <input
        placeholder='Приоритет'
        onChange={inputHandle}
        value={priority}
      />
      <br/>
      <button className='button' onClick={onclick}>Добавить</button>
  </div>
);

ToDoInput.propTypes = {
  onclick: PropTypes.func,
  users: PropTypes.array,
  textarea: PropTypes.string,
  textareaHandle: PropTypes.func,
  priority: PropTypes.string,
  inputHandle: PropTypes.func,
  user: PropTypes.object,
  selectHandle: PropTypes.func,
}

ToDoInput.defaultProps = {
  onclick: () => {},
  users: [],
  textarea: '',
  priority: 0,
}

export default ToDoInput;
