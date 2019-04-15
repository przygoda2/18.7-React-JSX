var contacts = [
  {
    id: 1,
    firstName: 'Adam',
    lastName: 'Adamczyk',
    email: 'adam.adamczyk@gmail.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Adamek',
    email: 'adam.adamek@gmail.com',
  },
  {
    id: 3,
    firstName: 'Adam',
    lastName: 'Madam',
    email: 'a.madam@gmail.com',
  }
];
  
  var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
  };

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <ContactForm contact={contactForm}></ContactForm>
        <Contacts items = {contacts}></Contacts>
      </div>
    )
  }
})