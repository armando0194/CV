import {Interest} from './interest';
import {Basics} from './basics';
import {Language} from './language';
import {Work} from './work';
import {Education} from './education';
import {Award} from './award';
import {Skill} from './skill';

export class Resume {
  basics: Basics;
  work: Work[];
  education: Education[];
  awards: Award[];
  publications: any[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: any[];
}






