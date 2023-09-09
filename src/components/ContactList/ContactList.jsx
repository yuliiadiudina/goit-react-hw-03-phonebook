import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import  ContactListItem  from 'components/ContactListItem/ContactListItem'

const ContactList = ({ onFilteredContacts, deleteContact }) => {
	return (
		<ul className={css.contactList}>
			{onFilteredContacts.map(contact => {
				return <ContactListItem 
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}/>
			}
			)}
		</ul>
	)
}

ContactList.propTypes = {
	onFilteredContacts: PropTypes.array.isRequired, 
	deleteContact: PropTypes.func.isRequired,
};

export default ContactList