const btn = document.querySelector("button");
const img = document.querySelector("img");
btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // xhr.open("GET", "https://httpbin.org/delay/5"); slow api
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    // console.log(JSON.parse(xhr.response)); // response ko object mai change krne ke liye

    img.src = xhr.response.message;
    console.log(xhr.response.message);
  });
});
