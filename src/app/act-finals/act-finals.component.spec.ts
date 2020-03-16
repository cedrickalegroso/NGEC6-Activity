import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActFinalsComponent } from './act-finals.component';

describe('ActFinalsComponent', () => {
  let component: ActFinalsComponent;
  let fixture: ComponentFixture<ActFinalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActFinalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActFinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
