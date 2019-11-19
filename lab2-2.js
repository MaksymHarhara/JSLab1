
let regexp1 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

var stri = "my@mail.com @ his@site.com.uk";

alert(stri.match(regexp1));

//function emailIsValid (email) {
 // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//}

//alert(emailIsValid('tyler@tyler@tylermcginnis.com')); // false
//alert(emailIsValid('tyler@tylermcginnis.com')); // true


var str = 'On the 03/09/2015 I am swiming in a pool, that was build on the 27-03-1994';

var res = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
alert(res);


//function is_Natural(n) 
 //     {
//	   if (typeof n !== 'number') 
//	        return 'Not a number'; 
//			
//	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
//	    }
//console.log(is_Natural(-15));
//console.log(is_Natural(1));console.log(is_Natural(10.22));
//console.log(is_Natural(10/0));


let regexp = /#([a-f0-9]{3}){1,2}\b/gi;

var str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert( str.match(regexp) );


//let regexp1 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

var str3 = "my@mail.com <img>@ his@site.com.uk   </img>";

alert(str3.match("img"));


var string = "border-radius:10px 20px 30px 40px";
var numbers = string.match(/\d+/g).map(Number);
alert(numbers);



function ValidateIPaddress(ipaddress) {  
  if (/([0-9]{1,3}[\.]){3}[0-9]{1,3}/.test(ipaddress)) {  
    return (true)  ;
  }
else{  
  alert("You have entered an invalid IP address!")  ;
  return (false)  ;
}  
}

var str2 ="115.42.150";
var str4 ="192.168.0.56";

alert(ValidateIPaddress(str2));
alert(ValidateIPaddress(str4));



//function findRGBA(RGBA) {
//if(/rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)/.test(RGBA));
//return(alert(str5.match(regexp)
//}
//var str5 ="background: rgba(0, 0, 0, 0.5);";
//alert(findRGBA(str5));


let regexp2 = /rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)/;

var str5 = "background: rgba(0, 0, 0, 0.5);";

alert( str5.match(regexp2) );


//alert(findDates(14/12/19));

//function findDates(text) {
//if (^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$ ) {

//return (true);
//alert("true");

//}
//else {
//alert("You have entered an invalid IP address!")  ;
 // return (false) ;
//}
//}