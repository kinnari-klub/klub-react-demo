
export function numWithUnit(num) {

    if (num == undefined) {
        num = '';
    }

    num = num.toString();

    function removeLeadingZeros(num) {
        // traverse the entire string
        for (var i = 0; i < num.length; i++) {

            // check for the first non-zero character
            if (num.charAt(i) != '0') {
                // return the remaining string
                let res = num.substr(i);
                return res;
            }
        }

        // If the entire string is traversed
        // that means it didn't have a single
        // non-zero character, hence return "0"
        return "0";
    }

    num = removeLeadingZeros(num);


    if (num.length <= 9) {

        let n = ("000000000" + num)
            .substr(-9)
            .match(/^(\d{2})(\d{2})(\d{2})(\d{3})$/);
        if (!n) return;

        var str = "";

        // if first 2 digit is not 0 then,
        if ((n[1][0] != 0) || (n[1][1] != 0)) {

            // if 1st digit is not 0 then Add First digit ::
            str += (n[1][0] != 0) ? n[1][0] : '';

            // 2nd digit
            str += n[1][1];

            // . + third digit
            str += (n[2][0] != 0) ? "." + n[2][0] : '';

            str += " Cr";

            return str;
        }

        // if first 2 digit is not 0 then,
        if ((n[2][0] != 0) || (n[2][1] != 0)) {

            // if 1st digit is not 0 then Add First digit ::
            str += (n[2][0] != 0) ? n[2][0] : '';

            // 2nd digit
            str += n[2][1];

            // . + third digit
            str += (n[3][0] != 0) ? "." + n[3][0] : '';

            str += " Lakh";

            return str;
        }

        // if 3rd 2 digit is not 0 then,
        if ((n[3][0] != 0) || (n[3][1] != 0)) {

            console.log(str);

            // if 1st digit is not 0 then Add First digit ::
            str += (n[3][0] != 0) ? n[3][0] : '';

            console.log(str);

            // 2nd digit
            str += n[3][1];

            console.log(str);

            // . + third digit + k
            str += (n[4][0] != 0) ? "." + n[4][0] : '';

            str += " K";

            console.log(str);

            return str;
        }

        // if last 3 digit is not 0 then,
        if ((n[4][0] != 0) || (n[4][1] != 0) || (n[4][2] != 0)) {

            // if 1st digit is not 0 then Add First digit ::
            str += (n[4][0] != 0) ? n[4][0] : '';

            // 2nd digit
            str += n[4][1];

            // 3rd last digit
            str += n[4][2];

            return str;
        }

        str = '0';

        return str;

    }





}