function averageScore(arr) {
    var total = 0;
    for(var i=0; i<arr.length; i++) {
        total += arr[i];
    }
    var avg = Math.round(total/arr.length);
    return avg;
}

var scores = [90,91,92];
console.log(averageScore(scores));

var scores2 = [60, 70, 80];
console.log(averageScore(scores2));

var scores3 = [90,98,89,100,100,86,94];
console.log(averageScore(scores3));