const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  // TODO: load index page
  index: (req, res) => {
    let contacts = phonebook.getPhonebook();
    res.render('index', {contacts});
    
  },

  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let {name, number} = req.body;
    
    let contact = new Contact(name, number);

    phonebook.addContact(contact);

    res.redirect('/');
  }
}
