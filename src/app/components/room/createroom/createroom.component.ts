import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RoomService } from "../../../services/room.service";
import { Room } from "../../../models/room";

@Component({
  selector: "createroom",
  templateUrl: "./createroom.component.html",
  styleUrls: ["./createroom.component.css"]
})
export class CreateRoomComponent {
  public room: Room;
  constructor(
    private roomService: RoomService,
    public activeModal: NgbActiveModal
  ) {
    this.room = new Room(null, null);
  }

  create() {
    this.roomService.createRoomResponse(this.room).subscribe(resp => {
      this.room.id = resp.body.data;
      this.activeModal.close(this.room);
    });
  }
}
