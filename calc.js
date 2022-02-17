
function calculator(str) {
    var rom_digits = {X:10,IX:9,VIII:8,VII:7,VI:6,V:5,IV:4,III:3,II:2,I:1};
    
    return String(main(str));


    function main(str) {
        var arr = str.split(' ');
        try {
            if ((arr.length == 3) && 
            ((arr[1] == '+') | (arr[1] == '-') | (arr[1] == '*') | (arr[1] == '/'))){   
                if (arr[0] in rom_digits && arr[2] in rom_digits){
                    return roman_calc(arr);
                } else 
                    return arabic_calc(arr);
            } else {
                throw "Не соблюдены условия";
            }
        }
        catch(err){
            return error(err);
        }
    }


    function arabic_calc(arr){
        try {    
            if ((Number(arr[0]) <= 10) && (Number(arr[0]) > 0)) {
                x = Number(arr[0]);
            } else {
                throw "Не соблюдены условия";
            }
            if ((Number(arr[2]) <= 10) && (Number(arr[2]) > 0)) {
                var y = Number(arr[2]);
            } else {
                throw "Не соблюдены условия";
            }
            var st = arr[1];
            return operations(x, y, st);
        }
        catch(err) {
            return error(err);
        }
    }


    function roman_calc(arr){
        try {
            x = rom_digits[arr[0]];
            y = rom_digits[arr[2]];
            var result = operations(x, y, arr[1]);
            if (result < 1) {
                return('');
            } else {
                return romanize(result);
            } 
        }
        catch(err) {
            return error(err);
        }
    }


    function romanize (num) {
        if (!+num)
            return false;
        var	digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"];
            roman = "";
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            return Array(+digits.join("") + 1).join("M") + roman;
    }


    function operations(x, y, st) {
        if (st == '+'){
            return x + y;
        } else if(st == '-'){
            return x - y;
        } else if(st == '*'){
            return x * y;
        } else if(st == '/'){
            return Math.trunc(x / y);
        }
    }

}

