const USERS = [
  {
    id: '0',
    name: 'Не выбрано',
  },
  {
    id: '1',
    name: 'User 1',
  },
  {
    id: '2',
    name: 'User 2',
  },
  {
    id: '3',
    name: 'User 3',
  }
];

const users = (state = USERS, { type }) => {
    switch (type) {
        default:
            return state;
    }
}

export default users;
