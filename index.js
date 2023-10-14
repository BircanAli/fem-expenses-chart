async function getData() {
  const response = await fetch(
    "https://fem-expense-chart.netlify.app/data.json"
  ).then((res) => res);

  const data = response.json();

  return data;
}
const value = await getData();
console.log(value);
const valueInObject = value.reduce((acc, curr) => {
  const { day: valueDay, amount } = curr;
  acc[valueDay] = amount;
  return acc;
}, {});

const span = document.querySelectorAll(".day span");

span.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    const spanName = element.getAttribute("name");
    const contentData = `$${valueInObject[spanName]}`;

    e.target.setAttribute("data-content", contentData);
  });
});
