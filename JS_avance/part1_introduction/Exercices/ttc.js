

function ttc(price, tva = .2) {
    if (isNaN(parseInt(price))) return "Error number price value";

    return price * (1 + tva);
}