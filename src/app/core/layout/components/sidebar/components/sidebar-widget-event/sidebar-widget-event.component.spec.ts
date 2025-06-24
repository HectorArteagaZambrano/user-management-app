import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetEventComponent } from './sidebar-widget-event.component';

describe('SidebarWidgetEventComponent', () => {
  let component: SidebarWidgetEventComponent;
  let fixture: ComponentFixture<SidebarWidgetEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
