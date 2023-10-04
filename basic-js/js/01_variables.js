console.log("------ Variables ------");

// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Output: 5

// Var (j berada dalam cakupan fungsi)
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
}
looping();
// console.log(j); // Ini akan menyebabkan error karena j tidak dapat diakses di luar fungsi looping

// Let (k berada dalam cakupan blok)
for (let k = 0; k < 5; k++) {
    console.log(k);
}
// console.log(k); // Ini akan menyebabkan error karena k tidak dapat diakses di luar blok for

// Let (l berada dalam cakupan blok)
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =", l); // Output: l = 100
}

// Const (phi tidak dapat diubah)
const phi = 3.14;
// phi = 3.147; // Ini akan menyebabkan error karena phi adalah konstanta
console.log(phi); // Output: 3.14