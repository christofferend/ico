import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcocreateComponent } from './icocreate.component';

describe('IcocreateComponent', () => {
  let component: IcocreateComponent;
  let fixture: ComponentFixture<IcocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
