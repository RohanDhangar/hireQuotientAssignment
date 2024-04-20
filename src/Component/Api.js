async function getAPIData(apiURL, params) {
  try {
    const url = new URL(apiURL);
    // url.search = new URLSearchParams(params).toString();

    // console.log(url.toString());

    const data = await fetch(url.toString());
    if (!data.ok) {
      throw new Error("Error occoured while getting the data");
    }

    return data.json();
  } catch (error) {
    console.log("API call is failed please try again");
    return null;
  }
}

export default getAPIData;
