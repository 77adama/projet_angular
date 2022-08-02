import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpanierComponent } from './cardpanier.component';

describe('CardpanierComponent', () => {
  let component: CardpanierComponent;
  let fixture: ComponentFixture<CardpanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
