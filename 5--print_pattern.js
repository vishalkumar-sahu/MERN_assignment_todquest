function displayPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      // if it is the first row, display a pattern of '*' characters
      if(i === 1){
        for (let j = 1; j <= rows; j++) {
            pattern += '*';
        }
      }
      // for other rows, display a pattern of '*' characters at the beginning and end with spaces in between
      else{
        for (let j = 1; j <= rows - i + 1; j++) {
            if(j === 1 || j === rows - i + 1){
                pattern += '*';
            }
            else{
                pattern += ' ';
            }
        }
      }
      console.log(pattern);
    }
}
  
displayPattern(6);
  