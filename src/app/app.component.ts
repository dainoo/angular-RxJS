import { Component, OnInit, VERSION } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5).subscribe(
      next => console.log(next),
      error => console.log,
      () => console.log("complete man")
    );
  }
  name = "Angular " + VERSION.major;
}
