describe('FormSift Test', function() {
  var testContainer = document.newElement('div');
  var form;

  beforeEach(function () {
    testContainer.innerHTML = '<form>' +
    '<input type='text' name='Fillblank-1' value='统一建模语言'/>' +
    '<input type='radio' name='Singleselect-1' value='A' checked='true'/>' +
    '<input type='radio' name='Singleselect-1' value='B'/>' +
    '<input type='radio' name='Singleselect-1' value='C'/>' +
    '<input type='radio' name='Singleselect-1' value='D'/>' +
    '<input type='checkbox' name='Multiselect-1' value='A'/>' +
    '<input type='checkbox' name='Multiselect-1' value='B' checked='true'/>' +
    '<input type='checkbox' name='Multiselect-1' value='C' checked='true'/>' +
    '<input type='checkbox' name='Multiselect-1' value='D' checked='true'/>' +
    '<input name='Shortanswer-1' value='模型是对现实世界的简化和抽象。'/>' +
    '</form>';

    form = testContainer.getElementByTagName('form')[0];
  });

  afterEach(function() {
    testContainer.innerHTML = '';
  });

  it('Should return the answer student have input', function() {
    var data = new FormSift();
    var answer = data.answerSift(form);
    expect(answer).toBe([
      {name: 'Fillblank-1', value: ['统一建模语言']},
      {name: 'Singleselect-1', value: ['A']},
      {name: 'Multiselect-1', value: ['BCD']},
      {name: 'Shortanswer-1', value: ['模型是对现实世界的简化和抽象。']}
    ]);

  });

});
