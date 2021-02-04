/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import Storage from '../utils/Storage';

const RecipiesContext = createContext();
export const RecipiesProvider = ({ children }) => {
  const [recipiesData, setRecipiesData] = useState([]);
  const getSavedRecipies = async () => {
    const data = await Storage.getData('recipies');
    if (data) {
      setRecipiesData(data);
    }
  };
  const saveRecipiesData = async () => {
    console.log('calling saveRecipiesData');
    await Storage.setData('recipies', recipiesData);
  };
  const updateRecipiesData = (data) => {
    setRecipiesData([...recipiesData, data]);
  };
  const updateVotes = (data) => {
    const recipeIndex = recipiesData.findIndex((element) => element.id === data.id);
    const UpdatedRecipesData = [...recipiesData];
    UpdatedRecipesData[recipeIndex] = data;
    // console.log('data--->updateVotes', UpdatedRecipesData);
    setRecipiesData(UpdatedRecipesData);
  };

  useEffect(() => {
    console.log('called useEffct');
    saveRecipiesData();
  }, [recipiesData]);

  return (
    <RecipiesContext.Provider
      value={{
        data: recipiesData,
        updateRecipiesData,
        saveRecipiesData,
        getSavedRecipies,
        updateVotes,
      }}
    >
      {children}
    </RecipiesContext.Provider>
  );
};

export default RecipiesContext;
