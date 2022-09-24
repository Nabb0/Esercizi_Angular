import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandolinoComponent } from './mandolino.component';

describe('MandolinoComponent', () => {
  let component: MandolinoComponent;
  let fixture: ComponentFixture<MandolinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandolinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandolinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
