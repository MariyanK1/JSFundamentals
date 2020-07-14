/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const phonebook = [];

function getPhonebook() {
	return phonebook.slice();
}

function addContact(contact) {
	phonebook.push(contact)
}

module.exports = {
	getPhonebook,
	addContact
}
