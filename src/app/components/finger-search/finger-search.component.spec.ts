import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerSearchComponent } from './finger-search.component';

describe('FingerSearchComponent', () => {
  let component: FingerSearchComponent;
  let fixture: ComponentFixture<FingerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FingerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
