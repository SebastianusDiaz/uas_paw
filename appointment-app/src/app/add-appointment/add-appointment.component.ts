import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
})
export class AddAppointmentComponent implements OnInit {
  addAppointment: any;
  submissionSuccess: boolean = false;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private appointmentService: AppointmentService
  ) {
    this.addAppointment = fb.group({
      nama: '',
      umur: '',
      jenis_kelamin: '',
      tanggal: '',
      poli: '',
      status: 'Request',
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.addAppointment.valid) {
      // Validasi form sebelum submit
      console.log('Form Data:', this.addAppointment.value); // Debugging data form

      this.appointmentService
        .addAppointment(this.addAppointment.value)
        .subscribe({
          next: (data: any) => {
            console.log('Response Data:', data); // Debugging respons dari server
            alert('Appointment berhasil ditambahkan!'); // Tampilkan notifikasi
            this.addAppointment.reset(); // Bersihkan form setelah submit
            this.routes.navigate(['/']); // Arahkan pengguna ke halaman lain
          },
          error: (err: any) => {
            console.error('Error:', err); // Debugging jika terjadi kesalahan
            alert('Terjadi kesalahan saat menambahkan appointment.');
          },
        });
    } else {
      alert('Form belum lengkap atau tidak valid!'); // Notifikasi jika form tidak valid
    }
  }
}
