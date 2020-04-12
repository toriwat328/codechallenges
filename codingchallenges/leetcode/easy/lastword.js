const lastword = (str) => {
    if(s.length === 0){
          return 0;
      }

      let newString = s.trim().split(' ');


      let stringLength = newString[newString.length-1].length;


      return stringLength;

}

console.log(lastword('Hello World'));
