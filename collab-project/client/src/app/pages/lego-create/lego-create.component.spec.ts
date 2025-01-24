import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoCreateComponent } from './lego-create.component';

describe('EntryPageComponent', () => {
  let component: LegoCreateComponent;
  let fixture: ComponentFixture<LegoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
