export const storageSave = (key, value) => {
  if (!key) {
    throw new Error("no key provided");
  }

  if (!value) {
    throw new Error("no value provided");
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export const storageRemove = (key) => {
  localStorage.removeItem(key);
};
