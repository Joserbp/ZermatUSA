﻿using System;
using System.Collections.Generic;

namespace DL;

public partial class DetallePedido
{
    public int IdDetalle { get; set; }

    public int? IdPedido { get; set; }

    public int? IdProducto { get; set; }

    public int Cantidad { get; set; }

    public virtual Pedido? IdPedidoNavigation { get; set; }

    public virtual Producto? IdProductoNavigation { get; set; }
}
