import { Profile } from 'src/app/models/profile';
import { Location } from 'src/app/models/location';

export class Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}
