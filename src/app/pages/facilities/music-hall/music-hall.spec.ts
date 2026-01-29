import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHall } from './music-hall';

describe('MusicHall', () => {
  let component: MusicHall;
  let fixture: ComponentFixture<MusicHall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicHall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicHall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
