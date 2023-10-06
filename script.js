const password = form.querySelector("#password");

function setBgImageBlurAmount(percentage) {
  const bgImage = document.getElementById("bg-image");
  bgImage.style.filter = `blur(calc(var(--blur-amount)*${percentage}))`;
}

password.addEventListener("input", function ({ target: { value } }) {
  const passValue = value.trim();
  const PASSWORD_LENGTH = 10;

  if (passValue.length <= PASSWORD_LENGTH) {
    setBgImageBlurAmount(
      (PASSWORD_LENGTH - passValue.length) / PASSWORD_LENGTH
    );
  }
});