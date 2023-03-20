const plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      num = document.querySelector('.num'),
      price = document.querySelector('.price-item')

let a = 1,
    b = 95;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;

    b += b;
    b = (b < 95000) ? b : b + "SEK" ;
    price.innerText = b;
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }

    if (b > 95) {
        b -= b;
        b = (b < 95000) ? b : b + "SEK";
        price.innerText = b;
    }
});