import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetWishlistComponent } from './bottomsheet-wishlist.component';

describe('BottomsheetWishlistComponent', () => {
  let component: BottomsheetWishlistComponent;
  let fixture: ComponentFixture<BottomsheetWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomsheetWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
