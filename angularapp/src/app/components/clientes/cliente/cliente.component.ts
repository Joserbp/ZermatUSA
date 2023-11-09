import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../../models/Cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private ClienteService: ClienteService) {
    this.form = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.maxLength(50)]],
      ApellidoPaterno: ['', [Validators.required, Validators.maxLength(50)]],
      ApellidoMaterno: ['', [Validators.required, Validators.maxLength(500)]],
      Email: ['', [Validators.required, Validators.maxLength(100)]],
      Pass: ['', [Validators.required, Validators.maxLength(100)]]

    });
  }

  Guardar() {
    const cliente: Cliente = {
      Nombre: this.form.get('Nombre')?.value,
      ApellidoPaterno: this.form.get('ApellidoPaterno')?.value,
      ApellidoMaterno: this.form.get('ApellidoMaterno')?.value,
      Email: this.form.get('Email')?.value,
      Pass: this.form.get('Pass')?.value
    }
    this.ClienteService.guardarCliente(cliente).subscribe(data => {
      console.log('Guardado exitosamente');
      this.form.reset();
    })
  }
}
