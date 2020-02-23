import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistinfoComponent } from './wishlistinfo.component';

describe('WishlistinfoComponent', () => {
  let component: WishlistinfoComponent;
  let fixture: ComponentFixture<WishlistinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
