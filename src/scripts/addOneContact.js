import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existingContacts = await readContacts();
  const newContact = createFakeContact();
  const allContacts = [...existingContacts, newContact];
  await writeContacts(allContacts);
};

await addOneContact();
