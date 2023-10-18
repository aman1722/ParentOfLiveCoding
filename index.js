

let name = "Aman Kashyap";



function reverseName(str) {
    let newArray = str.split(" ");
    let revserseArray = newArray.reverse();

    let res = "";

    for (let i = 0; i < revserseArray.length; i++) {
        for (let j = revserseArray[i].length - 1; j >= 0; j--) {
            res += revserseArray[i][j];
        }
        res += " ";
    }

    // return revserseArray.join(" ");
    return res;
}

console.log(reverseName(name));



