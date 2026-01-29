import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryDisclosure } from './mandatory-disclosure';

describe('MandatoryDisclosure', () => {
  let component: MandatoryDisclosure;
  let fixture: ComponentFixture<MandatoryDisclosure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandatoryDisclosure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandatoryDisclosure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
