const romantoint = (s) => {
    let roman = s.split('');
    let int = 0;


    for(let i = 0; i < roman.length; i++){
        let curr = roman[i]

        if(curr === 'I' && roman[i+1] === 'V'){
            console.log(4);
            int += 4
            i += 1
        }else if(curr === 'I' && roman[i+1] === 'X'){
            console.log(9);
            int += 9
            i += 1
        }else if(curr === 'X' && roman[i+1] === 'L'){
            console.log(40);
            int += 40
            i += 1
        }else if(curr === 'X' && roman[i+1] === 'C'){
            console.log(90);
            int += 90
            i += 1
        }else if(curr === 'C' && roman[i+1] === 'D'){
            console.log(400);
            int += 400
            i += 1
        }else if(curr === 'C' && roman[i+1] === 'M'){
            console.log(900);
            int += 900
            i += 1
        }else {
            switch (curr) {
                case 'I':
                    int += 1
                    console.log(1);
                    break;
                case 'V':
                    int += 5
                    console.log(5);
                    break;
                case 'X':
                    int += 10
                    console.log(10);
                    break;
                case 'L':
                    int += 50
                    console.log(50);
                    break;
                case 'C':
                    int += 100
                    console.log(100);
                    break;
                case 'D':
                    int += 500
                    console.log(500);
                    break;
                case 'M':
                    int += 1000
                    console.log(1000);
                    break;
                default:

            }

        }


    }

    return int;

}

console.log(romantoint('IX'));
