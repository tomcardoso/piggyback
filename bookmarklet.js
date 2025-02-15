(function() {

  'replaceme';

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

    const map = {
      'requestor-category': options.indexOf(piggybackData.requestor),
      'delivery-method': options.indexOf(piggybackData.delivery),
      'address-fieldset-state-province-select': piggybackData.province,
      'address-fieldset-country': piggybackData.country,
      'preferred-language-of-correspondence': piggybackData.lang,
      'consent': 'Yes'
    };

    el.value = map[fieldContents];
  }

  function setInputValue(el, fieldContents) {

    const map = {
      'given-name': piggybackData.givenName,
      'family-name': piggybackData.familyName,
      'your-e-mail-address': piggybackData.email,
      'your-telephone-number': piggybackData.tel,
      'address-fieldset-address': piggybackData.address,
      'address-fieldset-city': piggybackData.city,
      'address-fieldset-postal-code': piggybackData.postal
    };

    el.value = map[fieldContents];

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
