const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const bodyTextColor = document.querySelector("h1");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {

    const element = document.getElementById(`${e.target.id}`);
    const data = element.getAttribute("data");
  
    if (e.target.id === "Yellow" && data == "./Properties/Yellow.jpg") {
      // body.style.backgroundColor = e.target.id;
      // document.body.style.backgroundImage = "url('./Properties/Yellow.jpg')";
      document.body.style.backgroundImage = `url(${data})`;
      bodyTextColor.style.color = "black";
    }

    if (e.target.id === "Blue" && data == "./Properties/Blue.jpeg") {
      // body.style.backgroundColor = e.target.id;
      // bodyTextColor.style.color = "black";
      // document.body.style.backgroundImage = "url('./Properties/Blue.jpeg')";
      document.body.style.backgroundImage = `url(${data})`;
    }

    if (e.target.id === "Black" && data == "./Properties/Black.jpeg") {
      // body.style.backgroundColor = e.target.id;
      bodyTextColor.style.color = "white";
      // document.body.style.backgroundImage = "url('./Properties/Black.jpeg')";
      document.body.style.backgroundImage = `url(${data})`;
    }

    if (e.target.id === "Red" && data == "./Properties/Red.jpg") {
      // body.style.backgroundColor = e.target.id;
      bodyTextColor.style.color = "black";
      document.body.style.backgroundImage = `url(${data})`;
    }

    if (e.target.id === "White" && data == "./Properties/white.jpeg") {
      // body.style.backgroundColor = e.target.id;
      bodyTextColor.style.color = "black";
      document.body.style.backgroundImage = `url(${data})`;
    }
  });
});
