const makeChange = (c) => {
  // your name here
	 let obj={q:0,d:0,n:0,p:0},r;
  r=(c-c%25)/25;
  obj.q=r;
  c=(c-r*25)%25;
  r=Math.floor(c/10);
 obj.d=r;
 c=c%10;
 r=Math.floor(c/5);
 obj.n=r;
 c=c%5;
 obj.p=c;
 return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
