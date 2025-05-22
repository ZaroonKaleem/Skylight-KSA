import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './partner-form.component.html',
  styleUrl: './partner-form.component.css'
})
export class PartnerFormComponent {
  contactForm: FormGroup;
  selectedFile: File | null = null;
  maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      whatsapp: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      attachment: [null]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      // Check file size
      if (this.selectedFile.size > this.maxFileSize) {
        this.contactForm.get('attachment')?.setErrors({ maxSize: true });
        this.selectedFile = null;
      } else {
        this.contactForm.patchValue({ attachment: this.selectedFile });
        this.contactForm.get('attachment')?.updateValueAndValidity();
      }
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      
      // Append all form values to FormData
      Object.keys(this.contactForm.value).forEach(key => {
        if (key === 'attachment' && this.selectedFile) {
          formData.append(key, this.selectedFile, this.selectedFile.name);
        } else {
          formData.append(key, this.contactForm.value[key]);
        }
      });

      // Here you would typically send the formData to your API
      console.log('Form submitted', formData);
      
      // Reset form after submission
      this.contactForm.reset();
      this.selectedFile = null;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get fileName(): string {
    return this.selectedFile ? this.selectedFile.name : 'No file chosen';
  }
}
