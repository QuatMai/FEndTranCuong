

$(document).ready(function () {
  // Mở modal khi click vào nút Sign In hoặc Sign Up
  document.getElementById('signInBtn').onclick = function () {
    openModal('loginFormContainer');
  }

  document.getElementById('signUpBtn').onclick = function () {
    openModal('registerFormContainer');
  }

  // Hàm mở modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  // Hàm đóng modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Đóng modal khi click ra ngoài nội dung form
  window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }

  // Smooth scroll for anchor links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
