export const logger = (store) => (next) => (action) => {
  // console.log(action);
  next(action);
};

export const addCustomPokenmon = (store) => (next) => (action) => {
  const featured = [...action.action.payload, { name: "Custom pokemon" }];
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: featured },
  };
  next(updatedAction);
};
