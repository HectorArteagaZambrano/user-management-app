import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetLatestComponent } from './sidebar-widget-latest.component';

describe('SidebarWidgetLatestComponent', () => {
  let component: SidebarWidgetLatestComponent;
  let fixture: ComponentFixture<SidebarWidgetLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetLatestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
