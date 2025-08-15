import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef,  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ToastrModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent{

  constructor(private http: HttpClient, private toastr: ToastrService) {}

    sendMessage(form: NgForm) {
      this.http.post(`${environment.apiBaseUrl}/api/contactUs`, form)
        .subscribe({
        next: () => this.toastr.success('Send successfully!'),
        error: () => this.toastr.error('Failed to send message.')
      });
  }
}
