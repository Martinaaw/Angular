import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../types/types';
import { ApiProductoService } from '../services/api-producto.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
public producto$!: Observable<producto>
private api: ApiProductoService = inject (ApiProductoService)
@Input ('id') productoId!: string
ngOnInit(): void {
this.producto$ = this.api.getOne(this.productoId);
}
}
