/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  const PRECIOLAMPARA = 35;
  let marca;
  let cantidad;
  let descuentounitario;
  let IIBB;
  let preciodescuento;
  let importefinal;

  marca = document.getElementById("Marca").value;
  cantidad = parseInt(document.getElementById("txtIdCantidad").value);

  switch (cantidad) {
    case 1:
    case 2:
      {
        descuentounitario = 0;
      }
      break;
    case 3: {
      if (marca == "ArgentinaLuz") {
        descuentounitario = 0.85;
      } else if (marca == "FelipeLamparas") {
        descuentounitario == 0.9;
      } else {
        descuentounitario == 0.5;
      }
      break;
    }
    case 4:
      {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
          descuentounitario = 0.75;
        } else {
          descuentounitario = 0.8;
        }
      }
      break;
    case 5: {
      if (marca != "ArgentinaLuz") {
        descuentounitario = 0.7;
      } else {
        descuentounitario = 0.6;
      }
      break;
    }
    default:
      descuentounitario = 0.5;
  }

  preciodescuento = PRECIOLAMPARA * descuentounitario;

  document.getElementById("txtIdprecioDescuento").value = preciodescuento;

  importefinal = preciodescuento * cantidad;

  if (importefinal > 120) {
    IIBB = importefinal * .1;
    importefinal += IIBB;

    alert ("Total $ " + importefinal + "  Usted Pagó de ingresos brutos $ " + IIBB);
  } else {
    alert("Total " + importefinal);
  }
}
