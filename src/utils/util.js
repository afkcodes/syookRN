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
Util.user = {};

Util.getUserData = async (username) => {
  const userData = await Storage.getData(username);
  if (userData) {
    console.log('userData------>', userData);
    Util.user = userData;
  }
};

Util.setUserData = async (key, val) => {
  await Storage.setData(key, val);
};

Util.setLoginStatus = async (status, user) => {
  await Storage.setData('userstatus', { status, user });
};

Util.getLoginStatus = async () => {
  const data = await Storage.getData('userstatus');
  console.log('data--->', data);
  if (data) {
    Util.user = data.user;
  }
  return data;
};
export default Util;
