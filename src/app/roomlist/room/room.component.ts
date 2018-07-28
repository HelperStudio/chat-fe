import { Component, Input } from "@angular/core";

import { Room } from "../../models/room";

@Component({
  selector: "room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent {
  @Input() room: Room;
  constructor() {}
}
