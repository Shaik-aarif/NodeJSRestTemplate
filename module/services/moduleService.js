const getMethod = async (requestObject) => {
  try {
        // database operaton or async operation
      const data = /* await */ "operation";
      return {data}
  } catch (error) {
      throw new Error(`Failed to fetch data : ${error.message}`)
  }
};

export { getMethod };
