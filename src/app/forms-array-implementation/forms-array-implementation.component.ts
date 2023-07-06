import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-array-implementation',
  templateUrl: './forms-array-implementation.component.html',
  styleUrls: ['./forms-array-implementation.component.css']
})
export class FormsArrayImplementationComponent {
  form = this.fb.group({
    lessons: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  constructor(private fb: FormBuilder) { }

  get lessons() {
    return this.form.get('lessons') as FormArray;
  }

  addLesson() {
    this.lessons.push(this.fb.control('', Validators.required));
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  printConsole() {
    console.log(this.form.value);
  }
}
