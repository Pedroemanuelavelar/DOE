//document é um objeto
//dentro do objeto document, está os metódos
//mas tudo que está dentro do document o objeto,no caso vai ser functions
//habilitar e desabilitar uma classe,pra isso utiliza-se o classList
//o togle ele coloca ou tira conforme uma classe adicionada
document
  .querySelector('header button')
  .addEventListener('click', function() {
      document
        .querySelector('.form')
        .classList.toggle('hide')
        
  })