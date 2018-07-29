import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Room } from "../../models/room";

import { RoomService } from "../../services/room.service";

@Component({
  selector: "room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent {
  @Input() room: Room;
  @Output() remove = new EventEmitter<Room>();
  constructor(private roomService: RoomService) {}

  delete(event: Event) {
    event.preventDefault();
    this.roomService.deleteRoomResponse(this.room).subscribe(resp => {
      this.remove.emit(this.room);
    });
  }
}
