import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';
import { Academics } from './pages/academics/academics';
import { EducationalFacilities } from './pages/facilities/educational-facilities/educational-facilities';
import { CounsellingCenter } from './pages/facilities/counselling-center/counselling-center';
import { Facilities } from './pages/facilities/facilities';
import { MultipurposeSportsHall } from './pages/facilities/multipurpose-sports-hall/multipurpose-sports-hall';
import { SportsFacilities } from './pages/facilities/sports-facilities/sports-facilities';
import { MusicHall } from './pages/facilities/music-hall/music-hall';
import { RoboLab } from './pages/facilities/robo-lab/robo-lab';
import { PrePrimary } from './pages/academics/pre-primary/pre-primary';
import { PrimaryAndSecondary } from './pages/academics/primary-and-secondary/primary-and-secondary';
import { Admissions } from './pages/admissions/admissions';
import { Registration } from './pages/admissions/registration/registration';
import { FeeStructure } from './pages/admissions/fee-structure/fee-structure';
import { MandatoryDisclosure } from './pages/mandatory-disclosure/mandatory-disclosure';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'facilities',
    component: Facilities,
    children: [
      { path: 'educational-facilities', component: EducationalFacilities },
      { path: 'counselling-center', component: CounsellingCenter },
      { path: 'sports-facilities', component: SportsFacilities },
      { path: 'multipurpose-hall', component: MultipurposeSportsHall },
      { path: 'music-hall', component: MusicHall },
      { path: 'robo-lab', component: RoboLab },
      { path: '', redirectTo: 'educational-facilities', pathMatch: 'full' },
    ],
  },
  {
    path: 'academics',
    component: Academics,
    children: [
      { path: 'pre-primary', component: PrePrimary },
      { path: 'primary-and-secondary', component: PrimaryAndSecondary },
      { path: '', redirectTo: 'pre-primary', pathMatch: 'full' },
    ],
  },
  {
    path: 'admissions',
    component: Admissions,
    children: [
      { path: 'registration', component: Registration },
      { path: 'fee-structure', component: FeeStructure },
      { path: '', redirectTo: 'registration', pathMatch: 'full' },
    ],
  },
  { path: 'contact-us', component: ContactUs },
  { path: 'mandatory-disclosure', component: MandatoryDisclosure },
  { path: '**', redirectTo: '' },
];
