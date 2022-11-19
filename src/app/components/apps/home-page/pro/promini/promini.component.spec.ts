import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProminiComponent } from './promini.component';

describe('ProminiComponent', () => {
  let component: ProminiComponent;
  let fixture: ComponentFixture<ProminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProminiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
