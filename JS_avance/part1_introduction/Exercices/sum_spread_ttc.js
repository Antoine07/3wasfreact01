

const pricesHT = [100, 200, 55];


function sumTTC(p1, p2, p3, tva = .2) {

    return (p1 + p2 + p3) * (1 + tva);
}

