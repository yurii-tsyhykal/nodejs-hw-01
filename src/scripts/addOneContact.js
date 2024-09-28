import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();

  contacts.push(createFakeContact());

 fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

addOneContact();
