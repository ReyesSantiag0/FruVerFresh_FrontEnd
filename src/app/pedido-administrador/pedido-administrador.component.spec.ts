import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAdministradorComponent } from './pedido-administrador.component';

describe('PedidoAdministradorComponent', () => {
  let component: PedidoAdministradorComponent;
  let fixture: ComponentFixture<PedidoAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoAdministradorComponent]
    });
    fixture = TestBed.createComponent(PedidoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
