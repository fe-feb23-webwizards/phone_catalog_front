// eslint-disable-next-line no-shadow
export enum StorageKeys {
  CART = 'cart',
  FAVOURITES = 'favourites',
}

type Props = {
  id: string,
  key: StorageKeys,
};

export function addToLocalStorage({ id, key }: Props) {
  const myLocalData = localStorage.getItem(key); // stringify data from localStorage

  if (myLocalData) {
    const newData = [...JSON.parse(myLocalData), id]; // create new data for localStorage

    localStorage.setItem(key, JSON.stringify(newData)); // updating localStorage
  } else {
    localStorage.setItem(key, JSON.stringify([id]));
  }
}

export function deleteFromLocalStorage({ id, key }: Props) {
  const myLocalData = localStorage.getItem(key);

  if (myLocalData) {
    const newData = JSON.parse(myLocalData).filter((idEl: string) => idEl !== id);

    localStorage.setItem(key, JSON.stringify(newData));
  }
}

export function getLocalStorageData(key: StorageKeys) {
  const myLocalData = localStorage.getItem(key);

  return myLocalData ? JSON.parse(myLocalData) : [];
}
