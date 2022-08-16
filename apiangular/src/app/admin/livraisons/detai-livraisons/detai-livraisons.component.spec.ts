import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiLivraisonsComponent } from './detai-livraisons.component';

describe('DetaiLivraisonsComponent', () => {
  let component: DetaiLivraisonsComponent;
  let fixture: ComponentFixture<DetaiLivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiLivraisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaiLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
