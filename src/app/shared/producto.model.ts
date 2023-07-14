export class ProductoModel {
  constructor(
    public id_producto: string,
    public nombre_producto: string,
    public detalle_producto: string,
    public precio_producto: number,
    public foto_producto: string
  ) {}
}
