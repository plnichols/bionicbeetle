const ApiRequest = {
  handleResponse: function(response) {
    if (!response.ok) {
      throw new Error('Error: [' + response.status + '] ' + response.statusText);
    }

    return response.json();
  },

  handleError: function HandleError(error) {
    console.error(error.message);
  }
};

export { ApiRequest };
