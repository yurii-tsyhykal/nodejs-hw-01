import path from 'node:path';
const pathToWOrkDir = path.join(process.cwd());
export const PATH_DB = path.join(pathToWOrkDir, 'src/db', 'db.json');
