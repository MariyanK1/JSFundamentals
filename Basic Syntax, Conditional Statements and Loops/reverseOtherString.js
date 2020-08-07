const reverse = (str) => {
    str = str.split(' ');

    for (let i = 1; i < str.length; i += 2) {
        let word = str[i].split('').reverse().join('');
        str[i] = word;
    }

    return str.join(' ');
}

reverse("I really don't like reversing strings!(joke)")
