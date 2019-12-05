const apiURL = 'https://ponychallenge.trustpilot.com/';

const createMaze = async (data) => {
  let requestURL = apiURL+'pony-challenge/maze';
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      }),
    });
    if (!response.ok)
      throw new Error(response.ok);

    output = await response.json();

  } catch (err) {
    output = err;
  }

  return output;
}

const movePony = async (mazeID,data) => {
  let requestURL = apiURL+'pony-challenge/maze/'+mazeID;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      }),
    });
    if (!response.ok)
      throw new Error(response.ok);

    output = await response.json();

  } catch (err) {
    output = err;
  }

  return output;
}

const mazeInfo = async (mazeID) => {
  let requestURL = apiURL+'pony-challenge/maze/'+mazeID;

  let output = await fetch(requestURL, {
    method: 'get',
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    }),
  });
  let outputData = await output.json();
  return outputData;
}

export { createMaze, movePony, mazeInfo, apiURL }
