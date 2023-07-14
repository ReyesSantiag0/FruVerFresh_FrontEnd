export class PedidoModel {
  constructor(
    public id_pedido: string,
    public nombre_cliente_pedido: string,
    public apellido_cliente_pedido: string,
    public telefono_cliente_pedido: string,
    public correo_cliente_pedido: string,
    public direccion_cliente_pedido: string,
    public producto_pedido: string,
    public cantidad_pedido: number,
    public precio_pedido: number
  ) {}
}
