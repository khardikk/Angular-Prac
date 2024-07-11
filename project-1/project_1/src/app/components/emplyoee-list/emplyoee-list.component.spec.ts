import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeeListComponent } from './emplyoee-list.component';

describe('EmplyoeeListComponent', () => {
  let component: EmplyoeeListComponent;
  let fixture: ComponentFixture<EmplyoeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyoeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyoeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
