import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxmiKoExampleComponent } from './laxmi-ko-example.component';

describe('LaxmiKoExampleComponent', () => {
  let component: LaxmiKoExampleComponent;
  let fixture: ComponentFixture<LaxmiKoExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaxmiKoExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaxmiKoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
