let codigoPorta1 = prompt("Digite o código numérico de 4 dígitos para a primeira porta:");
  let codigoPorta2 = prompt("Digite a sequência de caracteres alfabéticos para a segunda porta:");
  let codigoPorta3 = prompt("Digite o código alfanumérico de 6 caracteres para a terceira porta:");

  let acessoConcedido = (
    codigoPorta1 % 2 === 0 &&
    codigoPorta2.split('').sort().join('') === codigoPorta2 &&
    (codigoPorta3.match(/\d/g) || []).length >= 2 &&
    (codigoPorta3.match(/[a-zA-Z]/g) || []).length >= 2
  );

  if (acessoConcedido) {
    alert("Acesso concedido! Bem-vindo à instalação secreta.");
  } else {
    alert("Códigos incorretos. Acesso negado.");
  }