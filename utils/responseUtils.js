const prepareResponse = (status, message, result) => {
  let response = {
    status: status,
    message: message,
  };
  if (result) {
    response.result = result;
  }
  return response;
};

export { prepareResponse };