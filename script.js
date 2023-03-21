// complete the given function

function palindrome(str){
  var palin = str.toLowerCase();
	let i=0,j=i-1;
	while(i<j){
	// palin = str.charAt[i==j]
		if(palin.charAt(i)==palin.charAt(j)){
			i++;
			j--;
		}else {
			return false;
		}
		
	}
	return true;
}
module.exports = palindrome