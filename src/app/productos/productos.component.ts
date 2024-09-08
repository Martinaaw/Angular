import { Component, OnInit} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ApiProductoService } from '../services/api-producto.service';
import { Observable } from 'rxjs';
import { producto } from '../types/types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  public productoResult$!: Observable<producto[]>
  constructor(private apiProducto: ApiProductoService, private router: Router){}
  ngOnInit(): void {
    this.productoResult$ = this.apiProducto.getAll()
  }
  OnproductClicked(productoId: string | undefined): void{
    this.router.navigate(['/producto', productoId]);
  }
}

