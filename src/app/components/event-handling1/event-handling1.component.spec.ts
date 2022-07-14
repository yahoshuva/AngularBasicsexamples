import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandling1Component } from './event-handling1.component';

describe('EventHandling1Component', () => {
  let component: EventHandling1Component;
  let fixture: ComponentFixture<EventHandling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHandling1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
