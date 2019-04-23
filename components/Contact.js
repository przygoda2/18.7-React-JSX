const Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
      const {
          firstName,
          lastName,
          email,
      } = this.props.item;

      const imageURL = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-512.png';
      
    return (
      <div className="contactItem">
        <img className="contactImage" src={imageURL} />
        <p className="contactLabel">
          Imię: {firstName}
        </p>
        <p className="contactLabel">
          Nazwisko: {lastName}
        </p>
        <a href={`mailto: ${email}`}>
          {email}
        </a>
      
      </div>
    )
  }
});