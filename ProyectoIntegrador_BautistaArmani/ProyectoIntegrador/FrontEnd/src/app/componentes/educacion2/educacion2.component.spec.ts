import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educacion2Component } from './educacion2.component';

describe('Educacion2Component', () => {
  let component: Educacion2Component;
  let fixture: ComponentFixture<Educacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Educacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Educacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
