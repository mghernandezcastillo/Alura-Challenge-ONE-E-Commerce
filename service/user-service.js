const getUsersData = () => {
  const url = "../users.json";
  return fetch(url).then((response) => {
    return response.json();
  });
};

export const userServices = {
  getUsersData,
};
