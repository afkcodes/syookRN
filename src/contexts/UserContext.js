/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import Storage from '../utils/Storage';

const UserContext = createContext();
export const RecipiesProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});
  const getUser = async () => {
    const data = await Storage.getData('user');
    if (data) {
      setCurrUser(data);
    }
  };
  const updateUserData = (data) => {
    setCurrUser(data);
  };

  const saveUser = async () => {
    console.log('calling saveRecipiesData');
    await Storage.setData('user', currUser);
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
