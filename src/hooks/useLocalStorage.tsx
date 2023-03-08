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

export function delStorageElement(id: string) {
  const myLocalData = localStorage.getItem(StorageKeys.CART);

  if (myLocalData) {
    const indexToDelete = [...JSON.parse(myLocalData)].lastIndexOf(id);
    const newData = [...JSON.parse(myLocalData)];

    newData.splice(indexToDelete, 1);

    localStorage.setItem(StorageKeys.CART, JSON.stringify(newData));
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

export function deleteAllLocalFromCart() {
  localStorage.removeItem(StorageKeys.CART);
}
