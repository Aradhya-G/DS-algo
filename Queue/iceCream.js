function IceCream(notes) {
    let countFive = 0;
    let countTen = 0;
    for (let i of notes) {
        if (i == 5)
            countFive++;
        else if (i == 10) {
            if (countFive > 0) {
                countFive--;
                countTen++;
            }
            else
                return "No Change";
        }
        else {
            if (countFive && countTen) {
                countFive--;
                countTen--;
            }
            else if (countFive >= 3)
                countFive -= 3;
            else return "No Change";
        }
    }
    return "Yes change available";
}
let arr = [5, 10, 5, 20]
console.log(IceCream(arr))
