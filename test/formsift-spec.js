describe('FormSift Test', function() {
  var testContainer = document.newElement('div');
  var form;

  beforeEach(function () {
    testContainer.innerHTML = '<form>' +
    '<input type='text' name='Fillblank' value='统一建模语言'/>' +
    '<input type='radio' name='Singleselect' value='A' checked='true'/>' +
    '<input type='radio' name='Singleselect' value='B'/>' +
    '<input type='radio' name='Singleselect' value='C'/>' +
    '<input type='radio' name='Singleselect' value='D'/>' +
    '<input type='checkbox' name='Multiselect' value='A'/>' +
    '<input type='checkbox' name='Multiselect' value='B' checked='true'/>' +
    '<input type='checkbox' name='Multiselect' value='C' checked='true'/>' +
    '<input type='checkbox' name='Multiselect' value='D' checked='true'/>' +
    '<input name='Shortanswer' value='模型是对现实世界的简化和抽象。'/>' +
    '</form>';

    form = testContainer.getElementByTagName('form')[0];
  });

  afterEach(function() {
    testContainer.innerHTML = '';
  });

  it('Should return the answer student have input', function() {
    var data = new FormSift();
    var answer = data.answerSift(form);
    expect(answer).toBe()

  });


})
