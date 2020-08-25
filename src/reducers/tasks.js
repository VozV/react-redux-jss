import { ADD_TASK, REMOVE_TASK, MAX_PRIORITY, MIN_PRIORITY, DOWN_PRIORITY, UP_PRIORITY } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, text, user, priority, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          user,
          priority,
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
    case UP_PRIORITY:
        return [...state].map(task => {
          if (task.id === id && task.priority < MAX_PRIORITY) {
            ++task.priority;
          }
          return task;
        });
    case DOWN_PRIORITY:
        return [...state].map(task => {
          if (task.id === id && task.priority > MIN_PRIORITY) {
            --task.priority;
          }
          return task;
        });
    default:
      return state;
  }
}

export default tasks;
