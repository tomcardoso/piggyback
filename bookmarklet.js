(function() {

  const piggybackData = window.piggybackData;

  if (!piggybackData) return;

  const formFields = [
    'select#edit-requestor-category',
    'select#edit-delivery-method',
    'input#edit-given-name',
    'input#edit-family-name',
    'input#edit-your-e-mail-address',
    'input#edit-your-telephone-number',
    'textarea#edit-additional-comments',
    'input#edit-address-fieldset-address',
    'input#edit-address-fieldset-city',
    'select#edit-address-fieldset-state-province-select',
    'input#edit-address-fieldset-postal-code',
    'select#edit-address-fieldset-country',
    'select#edit-preferred-language-of-correspondence',
    'select#edit-consent',
    'input#edit-details'
  ];

  function setSelectValue(el, fieldContents) {

    const options = Array.from(el.options)
      .map(d => d.text);

    switch (fieldContents) {
      case 'requestor-category':
        el.value = options.indexOf(piggybackData.requestor);
        break;
      case 'delivery-method':
        el.value = options.indexOf(piggybackData.delivery);
        break;
      case 'address-fieldset-state-province-select':
        el.value = piggybackData.province;
        break;
      case 'address-fieldset-country':
        el.value = piggybackData.country;
        break;
      case 'preferred-language-of-correspondence':
        el.value = piggybackData.lang;
        break;
      case 'consent':
        el.value = 'Yes';
        break;
    }
  }

  function setInputValue(el, fieldContents) {
    switch (fieldContents) {
      case 'given-name':
        el.value = piggybackData.givenName;
        break;
      case 'family-name':
        el.value = piggybackData.familyName;
        break;
      case 'your-e-mail-address':
        el.value = piggybackData.email;
        break;
      case 'your-telephone-number':
        el.value = piggybackData.tel;
        break;
      case 'address-fieldset-address':
        el.value = piggybackData.address;
        break;
      case 'address-fieldset-city':
        el.value = piggybackData.city;
        break;
      case 'address-fieldset-postal-code':
        el.value = piggybackData.postal;
        break;
      default:
    }
  }

  function setTextareaValue(el) {
    el.value = piggybackData.additionalComments;
  }

  formFields.map(entry => {
    const element = document.querySelector(entry),
      fieldType = entry.replace(/#.+/, ''),
      fieldContents = entry.replace(/^.+#edit-/, '');
    switch (fieldType) {
      case 'select':
        setSelectValue(element, fieldContents);
        break;
      case 'input':
        setInputValue(element, fieldContents);
        break;
      case 'textarea':
        setTextareaValue(element);
        break;
    }
  });

  const submitBtn = document.querySelector('#edit-actions');

  submitBtn.style.display = '';

  if (submitBtn.scrollIntoView) submitBtn.scrollIntoView({ behavior: 'smooth' });

})();
