import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnoncesComponent } from './add-annonces.component';

describe('AddAnnonceComponent', () => {
  let component: AddAnnoncesComponent;
  let fixture: ComponentFixture<AddAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnnoncesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
