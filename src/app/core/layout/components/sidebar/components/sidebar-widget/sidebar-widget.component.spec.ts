import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetComponent } from './sidebar-widget.component';

describe('SidebarWidgetComponent', () => {
  let component: SidebarWidgetComponent;
  let fixture: ComponentFixture<SidebarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
