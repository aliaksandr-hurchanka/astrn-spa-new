import { ReactNode } from 'react';


export interface Language {
  code: string;
  name: string;
  country_code: string;
  icon: ReactNode;
}
