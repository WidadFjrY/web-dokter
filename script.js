function verifikasi() {
  const textVerif = document.getElementById("verifikasi-captcha");
  const loginPage = document.getElementById("login-page");
  const overlay = document.getElementById("overlay");
  const verifPage = document.getElementById("verifikasi");

  console.log(textVerif.value);
  if (textVerif.value === "mwxe2") {
    textVerif.style.display = "none";
    loginPage.style.display = "none";
    overlay.style.display = "none";
    verifPage.style.display = "none";
    loginPage.style.filter = "none";
  } else {
    alert("Verifikasi Gagal");
  }
}

function login() {
  const loginPage = document.getElementById("login-page");
  const overlay = document.getElementById("overlay");

  overlay.style.display = "flex";
  loginPage.style.display = "flex";
}

function verif() {
  const verif = document.getElementById("verifikasi");
  const loginPage = document.getElementById("login-page");

  loginPage.style.filter = "blur(5px)";
  verif.style.display = "flex";
}
