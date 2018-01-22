import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcolistComponent } from './icolist.component';

describe('IcolistComponent', () => {
  let component: IcolistComponent;
  let fixture: ComponentFixture<IcolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
