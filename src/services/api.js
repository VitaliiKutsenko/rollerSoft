const users = [
  {
    login: 'vitalii89',
    password: '11223344',
  },
  {
    login: 'vitalii89',
    password: '11223344',
  },
  {
    login: 'vitalii89',
    password: '11223344',
  },
  {
    login: 'vitalii89',
    password: '11223344',
  },
  {
    login: 'vitalii89',
    password: '11223344',
  },
];

function getUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.find(item => {
        if (item.login === data.login && item.password === data.password) {
          resolve({
            success: true,
            name: data.name,
          });
        } else {
          reject({
            error: true,
            message: 'Not valid user or password',
          });
        }
      });
    }, 550);
  });
}

function getSize(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const size = users.find(size => size.id === id);

      if (size) {
        resolve(size);
      } else {
        reject(new Error('getSize: Size not found'));
      }
    }, 250);
  });
}

export { getUser, getSize };
