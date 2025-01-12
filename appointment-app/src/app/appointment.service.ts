import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  addAppointment(appointment: any) {
    return this.http.post(
      'https://appointment-api-orpin.vercel.app/endpoint/add-appointment',
      appointment
    );
  }
  showAppointment() {
    return this.http.get('https://appointment-api-orpin.vercel.app/endpoint/');
  }
  // Update item status
  updateItemStatus(id: string, data: any): Observable<any> {
    return this.http.put(
      'https://appointment-api-orpin.vercel.app/endpoint/update-appointment/' + id,
      data
    );
  }

  // Hapus item
  deleteItem(id: string) {
    return this.http.delete(
      'https://appointment-api-orpin.vercel.app/endpoint/delete-appointment/' + id
    );
  }
}
