var x = process.argv.slice(2);

var ans=0;

for(let i of x){
    ans+= Number(i);
}

console.log(ans);