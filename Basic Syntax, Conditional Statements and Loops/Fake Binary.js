function x(x) {
    x = x.split('').map(Number);

    for (let i = 0; i < x.length; i++) {
        const element = x[i];

        if (element < 5) {
            x[i] = 0;
        } else {
            x[i] = 1;
        }
    }

    x = x.join('')

    return x
}

x('45385593107843568')
