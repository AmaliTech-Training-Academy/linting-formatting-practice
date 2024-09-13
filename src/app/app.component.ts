import { Component } from "@angular/core";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [UserListComponent],
})
export class AppComponent {}
