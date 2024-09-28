import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dataParse = JSON.parse(data);

    return dataParse;
  } catch (error) {
    console.error(error);
  }
};
