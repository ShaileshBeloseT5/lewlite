import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentitySearchComponent } from './identity-search.component';

describe('IdentitySearchComponent', () => {
  let component: IdentitySearchComponent;
  let fixture: ComponentFixture<IdentitySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentitySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
