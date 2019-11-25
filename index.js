const input = () => {
  let query = document.querySelector("input").value;
  let body = document.body;
  let circle = document.getElementById("dot");

  if (!query.startsWith("#")) {
    query = `#${query}`;
  }

  // Manages circle
  setTimeout(() => {
    // Removes old circle
    circle.parentNode.removeChild(circle);

    // Sets new bg color
    body.style.backgroundColor = query;

    // Creates new circle with id="dot"
    circle = document.createElement("span");
    body.appendChild(circle);
    circle.id = "dot";
  }, 2001);

  // Grows circle to cover page
  circle.style.backgroundColor = query;
  circle.style.height = "4096px";
  circle.style.width = "4096px";
};

const inputShort = e => {
  // Checks if enter key is pressed
  e.keyCode == 13 ? input() : null;
};

// When creating the random color function, create a new function taking all the circle deletion/creation etc. to save writing is again
