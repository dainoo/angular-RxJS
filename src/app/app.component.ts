import { Component, OnInit, VERSION } from "@angular/core";
import { from, of } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  ngOnInit(): void {
    of(1, 2, 3, 4, 5).subscribe(
      next => console.log(next),
      error => console.log,
      () => console.log("complete man")
    );


    from([20, 15, 10, 5])
      .pipe(
        // tab(item => console.log(`emitted item ... ${item} `)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error("zero is detected");
          }
          return item;
        }),
        take(3)
      )
      .subscribe(
        item => {
          console.log(`resulting itme ... ${item}`);
        },
        err => {
          console.error(err);
        },
        () => console.info("complete")
      );



    from(["A", "B", "C", "D"]).subscribe(
      next => console.log(next),
      err => console.error,
      () => console.info
    );



    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     tab(item => console.log(`emitted item ... ${item} `)),
    //     map(item => item * 3),
    //     map(item => item - 2)
    //   )
    //   .subscribe();
  }
}
