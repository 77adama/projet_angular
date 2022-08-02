import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritteComponent } from './fritte.component';

describe('FritteComponent', () => {
  let component: FritteComponent;
  let fixture: ComponentFixture<FritteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
