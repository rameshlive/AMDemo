import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionbannerComponent } from './collectionbanner.component';

describe('CollectionbannerComponent', () => {
  let component: CollectionbannerComponent;
  let fixture: ComponentFixture<CollectionbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
