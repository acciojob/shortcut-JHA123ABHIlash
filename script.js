function shortcut(s1, s2) {
  // your code here
	let op="";
	let str1=s1[0];
	let str2=s2[0];
	op=str1+str2;
	if(str1===undefined || str2===undefined){
return "";
	}else {
		return op;
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2)); 
