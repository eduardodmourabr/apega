import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCorpo01Component } from './home-corpo01.component';

describe('HomeCorpo01Component', () => {
  let component: HomeCorpo01Component;
  let fixture: ComponentFixture<HomeCorpo01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCorpo01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCorpo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
