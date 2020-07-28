/*Now that you've helped Mandy to accept the group applications it's time to assist her with a security problem.
You are tasked to encrypt all songs from the set list so that if someone steals it they won't be able to leak it online.
Your task is to write a program that encrypts information about artists and their songs.

Until you receive the command "end" you should read lines in following format :"{artist}:{song}",
and check if it's valid, considering the following rules:

Artist – starts with capital letter, followed by lowercase letters.
It can also contains apostrophe ( ' ), and whitespace " "; 
Valid group name: Red hot chili peppers, Eminem, Guns n' roses
Invalid group name: ReD Hot CiLly PePers, sLipKnot, guns n'roses
Song – contains only capital letters, and whitespaces.
Valid songs: BACK IN BLACK, BLEED IT OUT, KILLSHOT
Invalid songs: #BaCk IN black, BLEED $IT$ OUTt, &KILLSHoT

After you validate the lines of an input, you should encrypt the information.

In order to do that, you have to follow the rules below:
First you need to find a key for encryption.
Your key is the length of the artist (e.g. "Eminem" –  key: 6)
You have to increment the ASCII value of each symbol of the input, with the key length
(e.g. "char" 'a' -> 'g')

Be careful if your key length is bigger than the ASCII value of a letter 'z' or 'Z'.
In this case you should start from a letter 'a'. (e.g. key:6 letter – 'x', encrypted letter – 'd')
You should NOT ENCRYPT the following characters: whitespaces, and apostrophes
You also should replace ':' with the sign '@'

Input / Constraints
Until you receive "end" command you should read from the console. 
Line of input – Artist name and song, separated by ":", containing only ASCII symbols.
Allowed working time for your program: 0.1 seconds.
Allowed memory: 16 MB.

Output
After every line of input, you should print:
If line is valid – encrypted information in following format:
"Successful encryption: {encryptedArtist}@{encryptedSong}".
If line is not valid – print the following message: "Invalid input!"

Examples
Input	
Eminem:VENOM
Linkin park:NUMB
Drake:NONSTOP
Adele:HELLO
end
Output
Successful encryption: Ksotks@BKTUS
Successful encryption: Wtyvty alcv@YFXM
Successful encryption: Iwfpj@STSXYTU
Successful encryption: Fijqj@MJQQ
*/

function songEncryption(input = []) {
    input = input.slice(0, input.indexOf('end'));

    let artistPattern = /^[A-Z][a-z\s']+$/;
    let songPattern = /^[A-Z\s]+$/;

    for (const line of input) {
        let tokens = line.split(':');
        let artistMatch = tokens.shift().match(artistPattern);
        let songMatch = tokens.shift().match(songPattern);

        if (artistMatch && songMatch) {
            let artist = artistMatch[0];
            let song = songMatch[0];
            let encryptionKey = artist.length;
            let encryptedArtist = '';
            let encryptedSong = '';

            for (let i = 0; i < artist.length; i++) {
                let encryptedLetter = 0;

                if (artist[i] === artist[i].toUpperCase() && artist.charCodeAt(i) + encryptionKey > 90) {
                    encryptedLetter = String.fromCharCode(artist.charCodeAt(i) + encryptionKey - 26);
                    encryptedArtist += encryptedLetter;
                }
                
                else if (artist[i] === artist[i].toLowerCase() && artist.charCodeAt(i) + encryptionKey > 122) {
                    encryptedLetter = String.fromCharCode(artist.charCodeAt(i) + encryptionKey - 26);
                    encryptedArtist += encryptedLetter;
                }
                
                else if (artist[i] === ' ') {
                    encryptedArtist += ' ';
                }
                
                else if (artist[i] === "'") {
                    encryptedArtist += "'";
                }
                
                else {
                    encryptedLetter = String.fromCharCode(artist.charCodeAt(i) + encryptionKey);
                    encryptedArtist += encryptedLetter;
                }
            }

            for (let j = 0; j < song.length; j++) {
                let letter = 0;

                if (song[j] === song[j].toUpperCase() && song.charCodeAt(j) + encryptionKey > 90) {
                    letter = String.fromCharCode(song.charCodeAt(j) + encryptionKey - 26);
                    encryptedSong += letter;
                } 
                
                else if (song[j] === song[j].toLowerCase() && song.charCodeAt(j) + encryptionKey > 122) {
                    letter = String.fromCharCode(song.charCodeAt(j) + encryptionKey - 26);
                    encryptedSong += letter;
                }
                
                else if (song[j] === ' ') {
                    encryptedSong += ' ';
                }
                
                else if (song[j] === "'") {
                    encryptedSong += "'";
                }
                
                else {
                    letter = String.fromCharCode(song.charCodeAt(j) + encryptionKey);
                    encryptedSong += letter;
                }
            }

            console.log(`Successful encryption: ${encryptedArtist}@${encryptedSong}`);

        } else {
            console.log('Invalid input!');
        }
    }
}

songEncryption([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
])
