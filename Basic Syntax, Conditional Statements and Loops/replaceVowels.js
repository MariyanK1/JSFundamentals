function encode(string) {
    for (let i = 0; i < string.length; i++) {
        const currentLetter = string[i];
        switch (currentLetter) {
            case 'a':
                string = string.replace(currentLetter, 1);
                break;

            case 'e':
                string = string.replace(currentLetter, 2);
                break;

            case 'i':
                string = string.replace(currentLetter, 3);
                break;

            case 'o':
                string = string.replace(currentLetter, 4);
                break;

            case 'u':
                string = string.replace(currentLetter, 5);
                break;
        }
    }
    return string;
}

function decode(string) {
    for (let i = 0; i < string.length; i++) {
        const currentLetter = string[i];
        switch (currentLetter) {
            case '1':
                string = string.replace(1, 'a');
                break;

            case '2':
                string = string.replace(currentLetter, 'e');
                break;

            case '3':
                string = string.replace(currentLetter, 'i');
                break;

            case '4':
                string = string.replace(currentLetter, 'o');
                break;

            case '5':
                string = string.replace(currentLetter, 'u');
                break;
        }
    }
        return string;
}

