import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siabar } from './siabar';

describe('Siabar', () => {
  let component: Siabar;
  let fixture: ComponentFixture<Siabar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siabar],
    }).compileComponents();

    fixture = TestBed.createComponent(Siabar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
