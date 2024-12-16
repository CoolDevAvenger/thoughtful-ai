function sort(width, height, length, mass) {
    const volume = width * height * length;
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
        return "REJECTED";
    } else if (isBulky || isHeavy) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

// Example Usage:
console.log(sort(100, 100, 100, 30));  // SPECIAL
console.log(sort(200, 100, 100, 25));  // REJECTED
console.log(sort(50, 50, 50, 10));     // STANDARD