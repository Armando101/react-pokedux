export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const addCustomPokenmon = (store) => (next) => (action) => {
  const featured = [{ name: "Custom pokemon" }, ...action.action.payload];
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: featured },
  };
  next(updatedAction);
};
