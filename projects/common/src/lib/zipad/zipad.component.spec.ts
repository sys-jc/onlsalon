import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipadComponent } from './zipad.component';

describe('ZipadComponent', () => {
  let component: ZipadComponent;
  let fixture: ComponentFixture<ZipadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
