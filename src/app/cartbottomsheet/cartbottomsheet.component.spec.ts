import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbottomsheetComponent } from './cartbottomsheet.component';

describe('CartbottomsheetComponent', () => {
  let component: CartbottomsheetComponent;
  let fixture: ComponentFixture<CartbottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartbottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
