function solve(n1, n2, n3) {
    let result = 0;
    if (n1 > n2 && n1 > n3) {
            result = n1;
    }

     if (n2 > n1 && n2 > n3) {
            result = n2;
    }

     if (n3 > n1 && n3 > n2) {
            result = n3;
    }
    
    return result;
}
