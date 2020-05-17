const countAndSay = (n) => {
    let currentNum, i, occurance;
    let resultVal = '';
    
    if(n === 1) return '1';
    else {
      currentNum = countAndSay(n-1);
      i = 1;
      occurance = 1;
      while ( i < currentNum.length) {
        if (currentNum.charAt(i) === currentNum.charAt(i-1)) occurance++;
        else {
          resultVal+= occurance+currentNum.charAt(i-1);
          occurance = 1;
        }
        i++;
      }
      resultVal+= occurance+currentNum.charAt(currentNum.length-1);
      return resultVal;
    }
  
  }
