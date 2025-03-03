import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownModule} from 'primeng/dropdown';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-footer',
  imports: [
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    Select
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  formGroup: FormGroup;
  selectedLanguage: any;

  languages = [
    { name: 'English', code: 'en' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Spanish', code: 'es' }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      language: [this.selectedLanguage]
    });
  }

  onLanguageChange(event:any) {
    console.log('Selected Language:',event.value);
  }

}
