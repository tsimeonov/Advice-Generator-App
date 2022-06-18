const heading = document.querySelector("h1");
const para = document.querySelector("p");
const btn = document.querySelector(".dice");

btn.addEventListener("click", () => {
  const api = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const id = `Advice #${data.slip.id}`;
      heading.textContent = id;
      const message = data.slip.advice;
      para.textContent = `"${message}"`;
    });
});
