export class UsuarioModel {
  constructor(
    public id_usuario: string,
    public nombre_usuario: string,
    public apellido_usuario: string,
    public edad_usuario: string,
    public telefono_usuario: string,
    public correo_usuario: string,
    public contrasena_usuario: string,
    public tipo_usuario: string
  ) {}
}
