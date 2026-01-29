import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipurposeSportsHall } from './multipurpose-sports-hall';

describe('MultipurposeSportsHall', () => {
  let component: MultipurposeSportsHall;
  let fixture: ComponentFixture<MultipurposeSportsHall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipurposeSportsHall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipurposeSportsHall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
