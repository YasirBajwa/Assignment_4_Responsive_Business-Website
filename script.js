filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-work-section");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Extra animation script




TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h3");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});
