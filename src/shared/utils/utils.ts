export const generateRandomName = () => {
  return 'name-' + Math.random().toString(36).slice(2, 9);
};
