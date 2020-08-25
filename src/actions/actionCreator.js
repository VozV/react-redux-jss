import {ADD_TASK, REMOVE_TASK, UP_PRIORITY, DOWN_PRIORITY, CHANGE_FILTER} from '../constants';

export const addTask = (id, text, user, priority) => ({
  type: ADD_TASK,
  id,
  text,
  user,
  priority,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const upPriority = id => ({
  type: UP_PRIORITY,
  id
});

export const downPriority = id => ({
  type: DOWN_PRIORITY,
  id
});

/*export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});*/

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
})
