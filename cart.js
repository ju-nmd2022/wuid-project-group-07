const plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      num = document.querySelector('.num'),
      price = document.querySelector('.price-item');

let a = 1,
    b = 95;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;

    b += 95;
    // b = (b < 95000) ? b : b ;
    price.innerText = b + "SEK";
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }

    if (b > 95) {
        b -= 95;
        // b = (b < 95000) ? b : b ;
        price.innerText = b + "SEK";
    }
});