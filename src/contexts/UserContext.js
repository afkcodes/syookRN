/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import Storage from '../utils/Storage';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});
  const getUser = async (key) => {
    const data = await Storage.getData(key);
    console.log('data--->', data);
    if (data) {
      setCurrUser(data);
    }
  };
  const updateUserData = (data) => {
    setCurrUser(data);
  };

  const saveUser = async () => {
    await Storage.setData(currUser.currentUser.username, currUser);
  };
  return (
    <UserContext.Provider
      value={{
        user: currUser,
        getUser,
        updateUserData,
        saveUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
