alert(Number.isInteger(123));
 alert(Number.isInteger(1.5));
 
 alert(getPrimes(0, 5));
 
 function getPrimes(min, max){

for (let i = min; i <= max; i++) { // Для всех i...

 alert( i ); // простое число
 
}

 }

 //     function getPrimes(min, max) {
  // var sieve = [], i, j, primes = [];
  // for (i = min; i <= max; ++i) {
    //       primes.push(i);
   //       for (j = i << 1; j <= max; j += i) {
       //        sieve[j] = true;
       //    }
      // }
 //  return primes;
//}

     // alert(getPrimes(0, 5));
 
 //Number.getPrimes(1, 5);
 
 //console.log(getPrimes);
		
//function getPrimes(max) {
  //  var sieve = [], i, j, primes = [];
    //for (i = 2; i <= max; ++i) {
      //  if (!sieve[i]) {
            // i has not been marked -- it is prime
        //    primes.push(i);
          //  for (j = i << 1; j <= max; j += i) {
            //    sieve[j] = true;
            //}
        //}
    //}
   // return primes;
//}