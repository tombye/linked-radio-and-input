var postMethod = document.getElementById('post-method'),
    emailMethod = document.getElementById('email-method'),
    emailAddress = document.getElementById('email-address'),
    onChange,
    selectMethod,
    chooseRadio,
    disableTextbox;

selectMethod = function (method) {
  if (method === 'email') {
    disableTextbox(false);
  } else {
    disableTextbox(true);
  }
};

chooseRadio = function (radioId) {
  if (radioId === 'email-method') {
    emailMethod.checked = true;
    postMethod.checked = false;
  } else {
    emailMethod.checked = false;
    postMethod.checked = true;
  }
};

disableTextbox = function (state) {
  emailAddress.disabled = state;
  emailAddress.setAttribute('aria-disabled', state);
};

onChange = function (e) {
  var method;

  if (this.checked === true) {
    if (this.id === 'email-method') {
      selectMethod('email');
    } else {
      selectMethod('post');
    }
  }
};

onClick = function (e) {
  var target = e.srcElement,
      currentValue;

  if (target.name === 'email-address') {
    currentValue = target.value;
    disableTextbox(false);
    chooseRadio('email-method');
    emailAddress.focus();
    emailAddress.value = currentValue;
  }
};

emailMethod.setAttribute("aria-controls", "email-address");
emailAddress.setAttribute("aria-disabled", true);
emailAddress.disabled = true;
postMethod.addEventListener('change', onChange, false);
emailMethod.addEventListener('change', onChange, false);
document.addEventListener('click', onClick, false);
