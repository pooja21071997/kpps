import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboLab } from './robo-lab';

describe('RoboLab', () => {
  let component: RoboLab;
  let fixture: ComponentFixture<RoboLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
