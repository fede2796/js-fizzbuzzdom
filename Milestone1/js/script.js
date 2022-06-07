 // Scrivo i numeri da 1 a 100
for(let i=1; i <= 100; i++){
    let number;
    number = i ;  
    //Se il numero è un multiplo di 3 prende il valore di Fizz
    //Se il numero è un multiplo di 5 prende il valore di Buzz
    //Se il numero è un multiplo di entrambi prende il Valore di Fizzbuzz
    if(i % 3 === 0){
        number = 'Fizz';
    }
    else if(i % 5 === 0){
        number = 'Buzz';
    }
    if(i % 3 === 0 && i % 5 === 0){
        number = 'FizzBuzz'
    }
    
    console.log(i + ' ' + number);
}
