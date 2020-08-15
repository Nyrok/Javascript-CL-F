function setCarré(valeur) {
    if (isNaN(valeur)) return "Veuillez entrer une valeur numérique.";
    return valeur * valeur;
}

module.exports.simpleCalculatrice = function (first, second, opérateur) {
    if (isNaN(first) || isNaN(second)) return "Veuillez entrer que des valeurs numériques.";
    if (opérateur === "+") return first + second
    else if (opérateur === "-") return first - second
    else if (opérateur === "*") return first * second
    else if (opérateur === "/") return first / second
    else return "Veuillez indiquer un opérateur correct";
}

module.exports.hypothénusePythagore = function (a, b) {
    if (isNaN(a) || isNaN(b)) return "Veuillez entrer que des valeurs numériques.";
    return Math.sqrt(setCarré(a) + setCarré(b));
}

module.exports.côtéPythagore = function (c, h) {
    if (isNaN(c) || isNaN(h)) return "Veuillez entrer que des valeurs numériques.";
    return Math.sqrt(setCarré(h) - setCarré(c));
}

module.exports.réciproquePythagore = function (a, b, h) {
    if (isNaN(a) || isNaN(b) || isNaN(h)) return "Veuillez entrer que des valeurs numériques.";
    var hypothénuse = setCarré(h);
    var c = setCarré(a) + setCarré(b);
    if (hypothénuse === c) return "Le triangle est rectangle.";
    else return "Le triangle n'est pas rectangle.";
}

module.exports.aireTriangle = function (base, hauteur) {
    if (isNaN(base) || isNaN(hauteur)) return "Veuillez entrer que des valeurs numériques.";
    return (base * hauteur) / 2;
}

module.exports.aireTrapèze = function (base_a, base_b, hauteur) {
    if (isNaN(base_a) || isNaN(base_b) || isNaN(hauteur)) return "Veuillez entrer que des valeurs numériques.";
    return ((base_a + base_b) * hauteur) / 2;
}

module.exports.aireCercle = function (rayon) {
    if (isNaN(rayon)) return "Veuillez entrer une valeur numérique.";
    return 3.14 * setCarré(rayon)
}

module.exports.aireParallélogramme = function (côté, hauteur) {
    if (isNaN(côté) || isNaN(hauteur)) return "Veuillez entrer que des valeurs numériques.";
    return côté * hauteur
}   

module.exports.aireRectangle = function (longueur, largeur) {
    if (isNaN(longueur) || isNaN(largeur)) return "Veuillez entrer que des valeurs numériques.";
    return longueur * largeur
}