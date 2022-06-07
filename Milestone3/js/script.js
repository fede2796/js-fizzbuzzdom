 // Scrivo i numeri da 1 a 100
 const ncontainer = document.querySelector('.number-container')
 for(let i=1; i <= 100; i++){
    let number;
    number = i ; 
    //Assegno il colore
    let colorname;  
    //Se il numero è un multiplo di 3 prende il valore di Fizz
    //Se il numero è un multiplo di 5 prende il valore di Buzz
    //Se il numero è un multiplo di entrambi prende il Valore di Fizzbuzz
    if(i % 3 === 0){
        number = 'Fizz';
        colorname = 'fizz';
    }
    else if(i % 5 === 0){
        number = 'Buzz';
        colorname = 'buzz';
    }
    if(i % 3 === 0 && i % 5 === 0){
        number = 'FizzBuzz';
        colorname = 'fizzbuzz';
    }
    const newBox = `<div class="box ${colorname}"> ${number}</div>` ;
    ncontainer.innerHTML += newBox;
    console.log(i + ' ' + number);
}