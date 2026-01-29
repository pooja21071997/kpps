import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-fee-structure',
  imports: [CommonModule,PdfViewerModule],
  templateUrl: './fee-structure.html',
  styleUrl: './fee-structure.css',
})
export class FeeStructure {
pdfSrc = '/assets/files/Fee structure.pdf';
//pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

page = 1;
totalPages = 0;
zoom = 0.6;

afterLoad(pdf: any) {
  this.totalPages = pdf.numPages;
  this.fitToPage();
}

fitToPage() {
  // Adjust zoom for screen size (trial-tested values)
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    this.zoom = 0.6;
  } else if (screenWidth < 1200) {
    this.zoom = 0.8;
  } else {
    this.zoom = 0.6;
  }
}

nextPage() {
  if (this.page < this.totalPages) this.page++;
}

prevPage() {
  if (this.page > 1) this.page--;
}


}
