import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitsComponent } from './new-produits.component';

describe('NewProduitsComponent', () => {
  let component: NewProduitsComponent;
  let fixture: ComponentFixture<NewProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
