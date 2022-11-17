import moment from 'moment'
import React from 'react';

export function ChangeFormatOfDate(date) {

    var isFormated;

    date = date.toString();
    isFormated = date.includes('`');

    if (isFormated == false && (date != '' && date != undefined)) {

        console.log("Foramtting the date");

        function onlyNumbers(string) {
            return /^[0-9]+$/.test(string);
        }
        var isTimeStamp = onlyNumbers(date);


        var fromTimeStamp = parseInt(date);
        fromTimeStamp = `${moment(fromTimeStamp).format("DD MMM `YY")}`;

        var fromNoramlDate = `${moment(date, 'DD/MM/YYYY').format("DD MMM `YY")}`;

        date = (isTimeStamp) ? fromTimeStamp : fromNoramlDate;

        console.log("Done \n");

        return (date);
    } else {
        console.log("Alread formated...\n");
        return (date);
    }

}







