// == - qiymat bo'yicha tenglik
// === - qat'iy tenglik (qiymat, ma'lumot turi)
// != - qiymat jihatidan teng emas
// !== - teng emas (qiymat, ma'lumot turi)
// > - katta
// < - kichik
// >= - katta yoki teng
// <= - kichik yoki teng


// if(2 == '12' ) {
//     console.info('shart togri')
// } else if(33 > 44) {
//     console.info('2-shart togri')
// } else {
//     console.info('xech qaysi shart togri emas')
// }

// var number = +prompt('Son kiriting')

// if(number > 1) {
//     console.info(number + ' 1 dan katta')
// }
// else if(number < 1) {
//     console.info(number + ' 1 dan kichik')
// }
// else {
//     console.info(number + ' 1 ga teng')
// }

// var num1 = +prompt('birinchi son: ')

// var num2 = +prompt('ikkinchi son: ')

// && va
// || yoki

// if (num1 > num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' katta ' + num2 + ' dan')
// } else if(num1 < num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' kichik ' + num2 + ' dan')
// } else if(num1 == num2) {
//     console.info(num1 + ' teng ' + num2 + ' ga')
// } else {
//     if(isNaN(num1) && isNaN(num2)) {
//         console.error('Siz son kiritmadingiz')
//     } else if (isNaN(num1)) {
//         console.error('birinchi kiritganiz son emas')
//     } else {
//         console.error('ikkinchi kiritganiz son emas')
//     }
// }

// var pass = prompt('yashirin sozni kiriting')

// if(pass === 'salom' || pass === 'privet' || pass === 'hi') {
//     console.info('saytimizga xush kelibsiz')
// } else {
//     console.error('parolni hato kiritdiz')
// }


// yoshini ko'rsatadigan dastur

var yoshi = +prompt('Sizning yoshingiz: ')

if(yoshi > 0 && yoshi <= 18 && !isNaN(yoshi)) {
    alert('Hozir sizning oqiydigan vaqtingiz')
} 

else if(yoshi > 18 && yoshi <= 50 && !isNaN(yoshi)) {
    alert('Hozir sizning ishlaydigan vaqtingiz')
} 

else if(yoshi > 50 && yoshi <= 59 && !isNaN(yoshi)) {
    alert('Sizga nafaqaga yaqin qoldi')
} 

else if(yoshi > 59 && yoshi <=100 && !isNaN(yoshi)) {
    alert('Siz hozir nafaqadasiz')
} 

else {
    alert('Siz dinozavr yoshida ekansiz')
}




// vaqtni korsatadigan dastur

var soat = +prompt('Vaqtni kiriting: ')

if(soat > 0 && soat <= 4 && !isNaN(soat)) {
    alert('Hozir tunggi soat ' + soat + ':00')
} 

else if(soat > 4 && soat <= 8 && !isNaN(soat)) {
    alert('Hozir tonggi soat ' + soat + ':00')
} 

else if(soat > 8 && soat <= 11 && !isNaN(soat)) {
    alert('Hozir kunduzgi soat ' + soat + ':00')
}

else if(soat > 11 && soat <= 12 && !isNaN(soat)) {
    alert('Hozir tushki soat ' + soat + ':00')
}

else if(soat > 12 && soat <= 15 && !isNaN(soat)) {
    alert('Hozir tushki soat ' + (soat - 12) + ':00')
}

else if(soat > 15 && soat <= 20 && !isNaN(soat)) {
    alert('Hozir kechki soat ' + (soat - 12) + ':00')
}

else if(soat > 20 && soat <= 24 && !isNaN(soat)) {
    alert('Hozir tunggi soat ' + (soat - 12) + ':00')
}

else {
    alert('siz notugri vaqt kiritdingiz')
}



// o'rtadagi soni topish

var num1 = +prompt('1-sonni kiriting: ')

var num2 = +prompt('2-sonni kiriting: ')

var num3 = +prompt('3-sonni kiriting: ')

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    alert('Ortadagi son: ' + num1)}

else if ((num1 < num2 && num2 < num3) || (num3 < num2 && num2 < num1)) {
    alert('Ortadagi son: ' + num2)}

else if ((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1)) {
    alert('Ortadagi son: ' + num3)}

else if (num1 === num2 || num2 === num3 || num1 === num3) {
    alert('siz kiritgan son bir birga teng')
}

else { if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {
    alert('Siz umuman son kiritmadingiz!!!')}

else if (isNaN(num1)) {
    alert('Son emas!')}

else if (isNaN(num2)){
    alert('Son emas!')}

else{alert('Son emas!')}}

