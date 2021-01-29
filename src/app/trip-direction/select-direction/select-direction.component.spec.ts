import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDirectionComponent } from './select-direction.component';

describe('SelectDirectionComponent', () => {
  let component: SelectDirectionComponent;
  let fixture: ComponentFixture<SelectDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
