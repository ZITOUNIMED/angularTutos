import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutoRoutingComponent } from "./tuto-routing.component";

describe("TutoRoutingComponent", () => {
  let component: TutoRoutingComponent;
  let fixture: ComponentFixture<TutoRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TutoRoutingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
