// src/types/product.ts

// EN: This file is the single source of truth for the Product type
// ES: Este archivo es la fuente única de verdad para el tipo Product
// EN: Any component that needs the Product type imports it from here
// ES: Cualquier componente que necesite el tipo Product lo importa desde aquí
// EN: Equivalent to having your entity class in a Models/ folder in C#
// ES: Equivalente a tener tu clase entidad en una carpeta Models/ en C#

export interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}