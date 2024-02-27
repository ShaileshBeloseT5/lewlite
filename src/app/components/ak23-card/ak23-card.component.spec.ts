import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ak23CardComponent } from './ak23-card.component';

describe('Ak23CardComponent', () => {
  let component: Ak23CardComponent;
  let fixture: ComponentFixture<Ak23CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ak23CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ak23CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
