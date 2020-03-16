import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtowrkComponent } from './artowrk.component';

describe('ArtowrkComponent', () => {
  let component: ArtowrkComponent;
  let fixture: ComponentFixture<ArtowrkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtowrkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtowrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
