// Post request to the server made by the user.

const handleSubmit = async(url = '', data = {}) => {
  console.log(data);

      //first we will create the const for the response that will await for the info to be fetched in our localhost in order to be given.
      const response = await fetch("http://localhost:8081"+url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "same-origin",
        });

        try {
          const newData = await response.json();
          console.log(newData);
          return newData;
      } catch (error) {
          console.log("error", error);
      }
    }
    
async function final(e) {
  const request = await fetch('http://localhost:8081/all');
  try {
      const allData = await request.json();
      console.log(allData);
        
        pic.innerHTML = `<img src="${allData.picture}" alt="City Img" class="position2">`;
        forecast.innerHTML = `<p class="superpuesto"> The weather forecast at your arrival in ${allData.location} is: ${allData.forecast}.</p>
        <p class="position">Min temp: ${allData.mintemp} &#176C </p>
        <p class="position">Max temp: ${allData.hightemp} &#176C </p>`;

        error.innerHTML = ``;
      
  } catch (error) {
      console.log("Error", error);
      error.innerHTML = `Error`;
  }
}

export {handleSubmit,
  final,
};