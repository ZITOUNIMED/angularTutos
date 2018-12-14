import { NgModule } from "@angular/core";

import { TutoRoutingComponent } from "./tuto-routing.component";
import { Tuto1RoutingModule } from "./tuto1.routing.module";
@NgModule({
  imports: [Tuto1RoutingModule],
  declarations: [TutoRoutingComponent]
})
export class Tuto1Module {}
