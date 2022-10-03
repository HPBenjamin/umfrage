import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogThirdComponent } from './dialog-third.component';

describe('DialogThirdComponent', () => {
  let component: DialogThirdComponent;
  let fixture: ComponentFixture<DialogThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
