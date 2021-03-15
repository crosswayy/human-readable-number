module.exports = function toReadable (number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number == 0) return "zero";

    if (number < 20) return ones[number];

    if (number >= 20 && number < 100) return tens[parseInt(number / 10)] + (number % 10 == 0 ? ones[number % 10] : (" " + ones[number % 10]));

    let numberString = number.toString();

    if (numberString[1] == "0" && numberString[2] == "0") {
        return ones[parseInt(number / 100)] + " hundred";
    } else {
        return ones[parseInt(number / 100)] + " hundred " + toReadable(parseInt(numberString[1] + numberString[2]));
    }
}
