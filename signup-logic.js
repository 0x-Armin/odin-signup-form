function checkPwdMatch() {
  const pwd = document.getElementById('pwd');
  const cfmPwd = document.getElementById('cfmPwd');

  if (pwd.value === cfmPwd.value) {
    pwd.setCustomValidity('');
    pwd.classList.remove('error')
    cfmPwd.classList.remove('error');
  } else {
    pwd.setCustomValidity('Passwords do not match');
    pwd.classList.add('error');
    cfmPwd.classList.add('error');
  }
}