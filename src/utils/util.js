/* eslint-disable func-names */
import users from '../../res/data/users';
import Storage from './Storage';

const Util = {};

Util.createUID = () => Math.random().toString(36).substring(2) + new Date().getTime().toString(36);

Util.checkLogin = (credentials) => {
  //   console.log('credentials------>', credentials);
  const obj = users.find(
    (o) => o.username === credentials.userName && o.password === credentials.password
  );
  if (obj !== undefined) {
    return { status: true, currentUser: obj };
  }
  return { status: false, user: {}};
};

export default Util;
