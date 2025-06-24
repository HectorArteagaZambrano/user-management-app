import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetGroupComponent } from './sidebar-widget-group.component';

describe('SidebarWidgetGroupComponent', () => {
  let component: SidebarWidgetGroupComponent;
  let fixture: ComponentFixture<SidebarWidgetGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
