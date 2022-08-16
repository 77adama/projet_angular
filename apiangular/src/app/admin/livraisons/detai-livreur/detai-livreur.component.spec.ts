import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiLivreurComponent } from './detai-livreur.component';

describe('DetaiLivreurComponent', () => {
  let component: DetaiLivreurComponent;
  let fixture: ComponentFixture<DetaiLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaiLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
