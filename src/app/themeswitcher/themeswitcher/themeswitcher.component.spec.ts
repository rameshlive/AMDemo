import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeswitcherComponent } from './themeswitcher.component';

describe('ThemeswitcherComponent', () => {
  let component: ThemeswitcherComponent;
  let fixture: ComponentFixture<ThemeswitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeswitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
