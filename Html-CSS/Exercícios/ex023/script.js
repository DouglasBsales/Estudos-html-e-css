const texto = "arara";

const reverso = texto.split('').reverse().join('');

if(texto === reverso){
    console.log(`A palavra ${texto} é uma palavra polindroma`)
}
    else {
        console.log(`A palavra ${texto} nao é uma palavra polindroma`);
}
