import { Component } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RoomService } from "../services/room.service";
import { Room } from "../models/room";
import { CreateRoomComponent } from "../components/room/createroom/createroom.component";

@Component({
  selector: "roomlist",
  templateUrl: "./roomlist.component.html",
  styleUrls: ["./roomlist.component.css"]
})
export class RoomListComponent {
  public rooms: Array<Room>;
  constructor(
    private roomService: RoomService,
    private modalService: NgbModal
  ) {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getListResponse().subscribe(resp => {
      this.rooms = resp.body.data;
    });
  }

  openCreateModal() {
    this.modalService
      .open(CreateRoomComponent, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.rooms.push(result);
        },
        reason => {
          console.log("reason", reason);
        }
      );
  }

  onRemove(room: Room) {
    this.rooms = this.rooms.filter(x => x.id != room.id);
  }
}
