import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandClientComponent } from './comand-client.component';

describe('ComandClientComponent', () => {
  let component: ComandClientComponent;
  let fixture: ComponentFixture<ComandClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
