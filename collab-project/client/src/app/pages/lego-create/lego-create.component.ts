import { Component } from '@angular/core';
import { Lego } from '@common/models/lego';
import { serverUrl } from '../../../constants';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lego-create',
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './lego-create.component.html',
  styleUrl: './lego-create.component.scss',
})
export class LegoCreateComponent {
  constructor(private router: Router) {}
  lego: Lego = {
    id: '',
    name: '',
    color: '#000000',
    size: '',
    price: 0,
    quantity: 0,
    image: '',
    sets: [],
  };

  legoForm!: FormGroup;

  ngOnInit() {
    this.legoForm = new FormGroup({
      name: new FormControl(this.lego.name, [Validators.required]),
      color: new FormControl(this.lego.color, [Validators.required]),
      size: new FormControl(this.lego.size, [Validators.required]),
      price: new FormControl(this.lego.price, [Validators.required]),
      quantity: new FormControl(this.lego.quantity, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.legoForm.valid) {
      await fetch(`${serverUrl}/legos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.legoForm.value),
      });

      this.router.navigate(['/lego-list']);
      return true;
    } else {
      return false;
    }
  }
}
