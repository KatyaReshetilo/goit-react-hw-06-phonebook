import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import s from './contacts.module.css';
export default function Contacts() {
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();
  const trimFilter = contacts.filter.trim() === '';
  const filter = contacts.filter;

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul>
      {trimFilter
        ? contacts.items.map(({ id, name, number }) => {
            return (
              <li key={id} id={id} className={s.contactItem}>
                {name}: {number}
                <button
                  className={s.delete}
                  type="button"
                  id={id}
                  onClick={e => {
                    dispatch(contactsAction.deleteContact(e.target.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })
        : getVisibleContacts().map(({ id, name, number }) => {
            return (
              <li key={id} id={id} className={s.contactItem}>
                {name}: {number}
                <button
                  className={s.delete}
                  type="button"
                  id={id}
                  onClick={e => {
                    dispatch(contactsAction.deleteContact(e.target.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
    </ul>
  );
}
Contacts.propTypec = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
