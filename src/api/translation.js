import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

export const translationAdd = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });

    if (!response.ok) {
      throw new Error("could not update the translation");
    }

    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const orderClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("could not update the translation");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
