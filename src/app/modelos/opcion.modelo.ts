export class Opcion {
  public titulo: string;
  public link:   string;
  public logo:   string;
  public nombre: string;


  constructor(titulo: string, link: string, logo: string, nombre: string)
  {
      this.titulo  = titulo;
      this.link    = link;
      this.logo    = logo;
      this.nombre  = nombre;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath  //.split('/')[1];
    } catch (err) {
      return null;
    }
  }

}
