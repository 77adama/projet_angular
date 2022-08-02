import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBurgerComponent } from './cat-burger.component';

describe('CatBurgerComponent', () => {
  let component: CatBurgerComponent;
  let fixture: ComponentFixture<CatBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
