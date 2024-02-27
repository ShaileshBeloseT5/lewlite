import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenticationComponent } from './identication.component';

describe('IdenticationComponent', () => {
  let component: IdenticationComponent;
  let fixture: ComponentFixture<IdenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
