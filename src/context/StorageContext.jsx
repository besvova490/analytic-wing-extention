/* eslint-disable no-return-await */
import React, { createContext, useContext, useState, useEffect } from "react";
import { Spin } from "antd";

// helpers
import { INITIAL_STORAGE, setStorageItem, getStorage } from "../helpers/storage";


export const StorageContext = createContext([INITIAL_STORAGE, () => null]);

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw Error("useStorage should br used within a StorageContext");
  }

  return context;
};

function withStorage(Component) {
  return function WrapperComponent(props) {
    const [storage, setStorageState] = useState(INITIAL_STORAGE);
    const [isStorageLoading, setIsStorageLoading] = useState(true);

    useEffect(() => {
      setIsStorageLoading(true);
      getStorage().then((data) => {
        setStorageState(data);
        setIsStorageLoading(false);
      });
    }, []);
  
    const updateStorage = async (key, data) => {
      return await setStorageItem(key, data).then(() => {
        setStorageState({ ...storage, [key]: data });
      });
    };

    const clearStorage = async () => {
      return await setStorageItem(INITIAL_STORAGE).then(() => {
        setStorageState(INITIAL_STORAGE);
      });
    };

    return (
      <StorageContext.Provider value={[storage, updateStorage, clearStorage]}>
        {
          isStorageLoading
            ? <div className="anwg-loading-indicator"><Spin/></div>
            : <Component {...props} />
        }
      </StorageContext.Provider>
    );
  };
}

export default withStorage;
