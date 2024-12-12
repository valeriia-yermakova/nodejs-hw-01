import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (count) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: count }, createFakeContact);
  const allContacts = [...existingContacts, ...newContacts];
  await writeContacts(allContacts);
};

const COUNT_TO_GENERATE = 5; 
await generateContacts(COUNT_TO_GENERATE);
