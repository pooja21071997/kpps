import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
ngAfterViewInit() {
  setTimeout(() => {
    const card = document.querySelector('.inspiration-card');
    const image = document.querySelector('.image-wrapper');

    card?.classList.add('show');
    image?.classList.add('show');
  }, 200);
}


}
