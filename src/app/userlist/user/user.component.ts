import { Component, Input, OnInit } from "@angular/core";

import { User } from "../../models/user";

import { ColorGenerator } from "../../utils/colorGenerator";

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() color: string;
  nameFirstLetters: string;

  ngOnInit() {
    if (!this.color) {
      this.color = ColorGenerator.getHexColor();
    }

    var nameParts = this.user.name.split(" ", 2);
    this.nameFirstLetters = "";
    for (var i = 0; i < nameParts.length; i++) {
      this.nameFirstLetters += nameParts[i].charAt(0).toUpperCase();
    }
  }
  constructor() {}
}
