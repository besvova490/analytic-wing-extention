import { useState, useEffect } from "react";

// helpers
import { getStorage, setStorageItem, INITIAL_STORAGE } from "../helpers/storage";


function useStorage() {
  const [storage, setStorageState] = useState(INITIAL_STORAGE);

  useEffect(() => {
    getStorage().then((data) => {
      setStorageState(data);
    });
  }, []);

  const updateStorage = (key, data) => {
    return setStorageItem(key, data).then(() => {
      setStorageState(prev => ({ ...prev, [key]: data }));
    });
  };

  const isEmpty = !(storage.webApp?.url || storage.webApp?.token) && !storage.userToken;
  console.log(isEmpty, storage.webApp?.url, storage.webApp?.token);

  return [storage, updateStorage, isEmpty];
}

export default useStorage;
