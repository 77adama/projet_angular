import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatLivreurComponent } from './etat-livreur.component';

describe('EtatLivreurComponent', () => {
  let component: EtatLivreurComponent;
  let fixture: ComponentFixture<EtatLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
