import { Component } from "@angular/core";

import { RoomService } from "../services/room.service";
import { Room } from "../models/room";

@Component({
  selector: "roomlist",
  templateUrl: "./roomlist.component.html",
  styleUrls: ["./roomlist.component.css"]
})
export class RoomListComponent {
  public rooms: Array<Room>;
  constructor(private roomService: RoomService) {
    this.getRooms();
  }

  getRooms() {
    this.roomService
      .getListResponse()
      .subscribe(resp => {
        this.rooms = resp.body.data;
      });
  }
}
