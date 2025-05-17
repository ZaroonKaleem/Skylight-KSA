import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
 isSubmitting = false;
  
  formData = {
    firstName: '',
    lastName: '',
    designation: '',
    contactNo: '',
    whatsappNo: '',
    resumeFile: null as File | null,
    message: ''
  };

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.formData.resumeFile = event.target.files[0];
    }
  }

  onSubmit() {
    this.isSubmitting = true;
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.formData);
    
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      // Reset form after submission
      this.formData = {
        firstName: '',
        lastName: '',
        designation: '',
        contactNo: '',
        whatsappNo: '',
        resumeFile: null,
        message: ''
      };
      alert('Application submitted successfully!');
    }, 1500);
  }
}