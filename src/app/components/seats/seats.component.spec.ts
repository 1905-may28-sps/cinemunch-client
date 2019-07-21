import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponent } from './seats.component';

// describe('SeatsComponent', () => {
//   let component: SeatsComponent;
//   let fixture: ComponentFixture<SeatsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SeatsComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SeatsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('SeatsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SeatsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SeatsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'seat-chart-generator'`, () => {
    const fixture = TestBed.createComponent(SeatsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('seat-chart-generator');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SeatsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to seat-chart-generator!');
  });
});
