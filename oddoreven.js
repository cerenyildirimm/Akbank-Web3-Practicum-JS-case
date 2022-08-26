function oddishOrEvenish(sayi) {
    var basamakToplami;
    while (sayi!=0) {
        basamakToplami+=(sayi%10);
        sayi=sayi/10;
    }
    if (basamakToplami%2==1) {
        return "Odd";
    }
    else {
        return "even";
    }
}