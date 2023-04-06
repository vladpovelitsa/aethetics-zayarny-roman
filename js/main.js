
document.getElementById("open_popup_btn").addEventListener("click", function() {
	document.getElementById("call_back").classList.add("open")
} )

document.getElementById("close_popup_btn").addEventListener("click", function() {
	document.getElementById("call_back").classList.remove("open")
} )

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("call_back").classList.remove("open")
    }
});

document.querySelector("#call_back .popup_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("call_back").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});



document.getElementById("open_tnx_btn").addEventListener("click", function() {
	document.getElementById("call_tnx").classList.add("open")
} )

document.getElementById("close_tnx_btn").addEventListener("click", function() {
	document.getElementById("call_tnx").classList.remove("open")
} )

document.getElementById("open_tnx_btn").addEventListener("click", function() {
	document.getElementById("call_back").classList.remove("open")
} )

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("call_tnx").classList.remove("open")
    }
});

document.querySelector("#call_tnx .popup_box_tnx").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("call_tnx").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});





function checkParams() {
  var name = $('#name').val();
  var phone = $('#phone').val();

  if(name.length >= 2 && phone.length >= 9 ) {
      $('#open_tnx_btn').removeAttr('disabled');
  } else {
      $('#open_tnx_btn').attr('disabled', 'disabled');
  }
}
