const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  console.log(h, m, s);

  const temp = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span>
  `;

  clock.innerHTML = temp;
};

setInterval(tick, 1000);
