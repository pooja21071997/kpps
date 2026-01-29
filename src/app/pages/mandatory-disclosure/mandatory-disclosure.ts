import { Component } from '@angular/core';

@Component({
  selector: 'app-mandatory-disclosure',
  imports: [],
  templateUrl: './mandatory-disclosure.html',
  styleUrl: './mandatory-disclosure.css',
})
export class MandatoryDisclosure {
  documents = [
    {
      title:
        '1. Copies of Affiliation Upgradation letter and recent extension of affiliation if any. Affiliation status',
      file: 'assets/files/mandatory/1.pdf',
    },
    {
      title: '2. Copies of societies/ trust/ company registration renewal',
      file: 'assets/files/mandatory/2.pdf',
    },
    {
      title:
        '3.1 Copy of No objection certificate (NOC) issues, if Applicatble, by the state Govt./UT',
      file: 'assets/files/mandatory/3.pdf',
    },
    {
      title:
        '3.2 Copy of No objection certificate (NOC) issues, if Applicatble, by the state Govt./UT',
      file: 'assets/files/mandatory/4.pdf',
    },
    {
      title:
        '4. Copies of Recognition certificate under RTE Act 2009, And its renewal if applicable.',
      file: 'assets/files/mandatory/5.pdf',
    },
    {
      title: '5. Copy of valid Building Safety Certificate as per the Nation Building Code.',
      file: 'assets/files/mandatory/6.pdf',
    },
    {
      title: '6.1 Copy of valid NOC fire safety certificate issued by the competent authority.',
      file: 'assets/files/mandatory/7.pdf',
    },
    { title: '6.2 Copy of valid fire safety work in progress', file: 'assets/files/mandatory/8.pdf' },
    { title: '6.3 Copy of valid fire safety NOC from GP', file: 'assets/files/mandatory/9.pdf' },
    {
      title:
        '7. Copy of the self certification submitted by the school for affiliation / upgradation extension affiliation.',
      file: 'assets/files/mandatory/10.pdf',
    },
    {
      title: '8. Copies of valid water, Health and sanitation certificates',
      file: 'assets/files/mandatory/11.pdf',
    },
    { title: '9.Copies of valid water certificates', file: 'assets/files/mandatory/12.pdf' },
    { title: '10.Copy of Land Certificate', file: 'assets/files/mandatory/13.pdf' },
    { title: '11.1 Copy of Double Shift permission by ZP', file: 'assets/files/mandatory/14.pdf' },
    { title: '11.2 Copy of Double Shift permission by GP', file: 'assets/files/mandatory/15.pdf' },
    { title: '12 Copy of Lift Instalation permission by GP', file: 'assets/files/mandatory/16.pdf' },
  ];
  other = [
    { title: '1. Fee structure of the school', file: 'assets/files/mandatory/17.pdf' },
    { title: '2. Annual Academic Calender', file: 'assets/files/mandatory/18.pdf' },
    { title: '3. List of School Management Committee (SMC)', file: 'assets/files/mandatory/19.pdf' },
    {
      title: '4. List of Parents Teachers Association (PTA) members',
      file: 'assets/files/mandatory/20.pdf',
    },
    {
      title: '5. List of Three year Result of the board examination as per applicability',
      file: 'assets/files/mandatory/21.pdf',
    },
  ];
  viewFile(file: string) {
    window.open(file, '_blank');
  }

  downloadFile(file: string) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop()!;
    link.click();
  }
   viewOtherFile(file: string) {
    window.open(file, '_blank');
  }

  downloadOtherFile(file: string) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop()!;
    link.click();
  }
}
