comb=(s)=>[...s].sort().join('');
var vampire_test = function(a, b){
return comb(a + '' + b)==comb((a*b).toString());

}


vampire_test(30, 51)