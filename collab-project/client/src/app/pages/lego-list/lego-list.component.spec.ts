import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoListComponent } from './lego-list.component';

describe('EntryPageComponent', () => {
  let component: LegoListComponent;
  let fixture: ComponentFixture<LegoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
