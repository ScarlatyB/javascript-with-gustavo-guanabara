
let p1 = window.document.getElementsByTagName('p')[0]
window.document.write('O verso que ele fez pra ela' + p1.innerText)
p1.style.fontSize = '30px' 

var nome= window.prompt('Qual é o seu nome?')
window.alert(`Olá, ${nome}`)



 var n = window.document.getElementsByName('nice')
n.innerText = 'Delicinha..' //se eu quiser modificcar o texto dessa variável
Ou se eu quiser modificar o texto de uma forma mais simples faço como vem a seguir
var n = window.document.getElementsByName('nice').innerText = 'dlccccc'
