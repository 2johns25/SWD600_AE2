// DROPDOWN BUTTONS

var dropDown = function(e) {
    var shownMenu = document.getElementsByClassName("drop_down_list"),
      targetButton = event.target.closest(".btn");
    [].forEach.call(shownMenu, function(el) {
      if (targetButton == null || (targetButton != null && el != targetButton.nextElementSibling)) {
        setTimeout(function(){ el.classList.remove("show")}, 50);
      }
    });
    if (!!targetButton) {
      targetButton.nextElementSibling.classList.toggle("show");
    }
  };
  window.addEventListener("click", dropDown, false);

