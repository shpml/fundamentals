var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var addContact = function (name) {
    contacts.push(name);
    return contacts;
}

var findContact = function (index) {
    return contacts[index];
}

var updateLastContact = function (newName) {
    contacts[contacts.length - 1] = newName;
    return contacts;
}


findContact(3);
addContact("Suzie");
updateLastContact("Sue Miller");
