const input = () => {
  const query = document.querySelector("input").value;
  const body = document.body;
  let circle = document.getElementById("dot");

  // Deletes current circle
  setTimeout(() => {
    // Removes old circle
    circle.parentNode.removeChild(circle);

    // Sets new bg color
    body.style.backgroundColor = `#${query}`;

    // Creates new circle with id="dot"
    circle = document.createElement("span");
    body.appendChild(circle);
    circle.id = "dot";
  }, 2001);

  // Grows circle to cover page
  circle.style.backgroundColor = `#${query}`;
  circle.style.height = "4096px";
  circle.style.width = "4096px";
};

const inputShort = e => {
  // Checks if enter key is pressed
  e.keyCode == 13 ? input() : null;
};
