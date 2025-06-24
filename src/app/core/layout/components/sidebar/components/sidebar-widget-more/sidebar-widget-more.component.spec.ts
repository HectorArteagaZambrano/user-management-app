import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetMoreComponent } from './sidebar-widget-more.component';

describe('SidebarWidgetMoreComponent', () => {
  let component: SidebarWidgetMoreComponent;
  let fixture: ComponentFixture<SidebarWidgetMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWidgetMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWidgetMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
