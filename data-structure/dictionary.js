// const dictionary = {};
// dictionary[name] = "Samiul Sheikh";

// dictionary[]

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Onik', '01710006789');
phoneBook.add('Ayon', '01710006799');
phoneBook.add('sakib', '01710006719');
console.log(phoneBook);
console.log(phoneBook.dictionary);
const onik = phoneBook.get('Onik');
console.log(onik);