  var addressbook;

  // Define the error callback for all the asynchronous calls
  function errorCB(err) {
    console.log( 'The following error occurred: ' +  err.name);
  }

  function contactsFoundCB(contacts) {
    // The contact has been successfully found
    // Let's try to change the first name
    contacts[0].name.firstName = 'Jeffrey Ross';
    try {
      addressbook.update(contacts[0]);
    } catch (err) {
      console.log( 'The following error occurred while updating: ' +  err.name);
    }
    console.log('First contact was updated');
  }

  // Define the success callback for retrieving all the
  // Address Books
  function addressBooksCB(addressbooks) {
    if(addressbooks.length > 0) {
      addressbook = addressbooks[0];
      console.log('The addressbook type is ' + addressbook.type +
            ' and name ' + addressbook.name);

      var contact = new tizen.Contact(
                         {name: new tizen.ContactName({firstName:'Jeffrey',
                                 lastName:'Hyman',
                                 nicknames:['joey ramone']}),
                          emails:[new tizen.ContactEmailAddress('user@domain.com')],
                          phoneNumbers:[new tizen.ContactPhoneNumber('123456789')]});

      addressbook.add(contact);

      // The contact has been successfully added
      // Let's try to check if we can retrieve the added
      // contact from the address book. If the address book
      // was empty only the item added through saveContact should
      // be returned
      var filter = new tizen.AttributeFilter('name.firstName', 'CONTAINS', 'Jeffrey');
      try {
        addressbook.find(contactsFoundCB, errorCB, filter);
      } catch (err) {
        console.log( 'The following error occurred while finding: ' +  err.name);
      }
    }
  }

  function contactApiTest()
  {
	// Get a list of available Address Books.
	  tizen.contact.getAddressBooks(addressBooksCB, errorCB);
	  
  }
  
