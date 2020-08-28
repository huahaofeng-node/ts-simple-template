import YAML from 'yaml';
import fs from 'fs';
import { environment } from './app.environment';
import { join } from 'path';


const file = fs.readFileSync(join(__dirname, `../env/app.${environment}.yml`), 'utf8');
const env = YAML.parse(file);
console.log(env);

export const APP = {
  NAME: env.app.name,
};
