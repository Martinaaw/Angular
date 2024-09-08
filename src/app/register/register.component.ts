import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
RegisterForm = new FormGroup ({
  nombre: new FormControl ('', Validators.required),
  apellido: new FormControl ('', Validators.required),
  email: new FormControl ('', Validators.required),
});
get nombre () {
  return this.RegisterForm.get ('nombre') as FormControl;
}
get apellido () {
  return this.RegisterForm.get ('apellido') as FormControl;
}
get email () {
  return this.RegisterForm.get ('email') as FormControl;
}
handleSubmit(){
  if (this.RegisterForm.invalid) return;
  const newUser = {
   nombre:this.nombre.value,
  apellido:this.apellido.value,
  email: this.email.value
  }
  console.log (JSON.stringify(newUser));
}
}
