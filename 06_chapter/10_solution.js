var contacts = [
  {
  'firstName' : 'John',
  'lastName' : 'Doe',
  'phone' : '(512) 355-0453',
  'email' : 'johndoe@email.com'
  },
  {
  'firstName' : 'Jane',
  'lastName' : 'Doe',
  'phone' : '(512) 355-0453',
  'email' : 'janedoe@email.com'
  },
  {
  'firstName' : 'Suzie',
  'lastName' : 'Smith',
  'phone' : '(512) 355-0453',
  'email' : 'suziesmith@email.com'
  }
];

var newbie = {
  'firstName' : 'John',
  'lastName' : 'Doe',
  'phone' : '(512) 355-0453',
  'email' : 'johndoe@email.com'
};


var listContacts = function() {
  for (var i = 0; i < contacts.length; i++) {
    console.log(contacts[i]['firstName'] + ' ' + contacts[i]['lastName']);
  }
};

var search = function(name) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]['firstName'] === name || contacts[i]['lastName'] === name) {
      return contacts[i];
    }
  }
};

var addContact = function(newContact) {
  contacts.push(newContact);
  return contacts;
};

addContact(newbie);
listContacts();
search('Suzie');

