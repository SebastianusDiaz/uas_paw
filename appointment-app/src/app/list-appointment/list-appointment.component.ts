import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css'],
})
export class ListAppointmentComponent implements OnInit {
  appointments: any;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.showAppointment().subscribe((data: any) => {
      this.appointments = data;
    });
  }
  // Mark item as complete
  markAsComplete(id: string): void {
    this.appointmentService
      .updateItemStatus(id, { status: 'Selesai' })
      .subscribe(() => {
        alert('Item berhasil diubah menjadi selesai.');
        this.loadAppointments(); // Refresh data
      });
  }
  // Delete item
  deleteItem(id: string): void {
    if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      this.appointmentService.deleteItem(id).subscribe(() => {
        alert('Item berhasil dihapus.');
        this.loadAppointments(); // Refresh data
      });
    }
  }
}
