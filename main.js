let preElement = document.querySelectorAll("pre");
let copySign;

Array.from(preElement).forEach((e) => {
  e.innerHTML += `
  <i class="bi bi-clipboard2-minus-fill copy"></i>
  `;
  copySign = document.querySelectorAll(".copy");
});

Array.from(copySign).forEach((e, index) => {
  e.onclick = function () {
    let element = preElement[index];

    const storage = document.createElement("textarea");
    storage.value = element.textContent;
    element.appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand("copy");
    element.removeChild(storage);

    e.classList.remove("bi-clipboard2-minus-fill");
    e.classList.add("bi-clipboard2-check-fill");

    setTimeout(() => {
      e.classList.add("bi-clipboard2-minus-fill");
      e.classList.remove("bi-clipboard2-check-fill");
    }, 2000);
  };
});
