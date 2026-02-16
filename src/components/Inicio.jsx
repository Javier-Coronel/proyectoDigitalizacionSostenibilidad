/**
 * @fileoverview Componente de página de inicio de la aplicación
 *
 * Página de bienvenida que se muestra como landing page principal de la aplicación.
 * Utiliza componentes de Material-UI para mostrar un mensaje centrado en la pantalla.
 *
 * @module components/Inicio
 * @requires @mui/material
 */

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardIntercambio from "./CardIntercambio"
import { useState } from "react";
/**
 * Componente de página de inicio
 *
 * Características:
 * - Centrado vertical y horizontal en la pantalla
 * - Altura mínima que cubre toda la viewport (menos la altura del navbar)
 * - Mensaje de bienvenida en tamaño grande (variant h3)
 *
 * @component
 * @returns {JSX.Element} Página de inicio con mensaje de bienvenida
 */
function Inicio() {
  const [rows] = useState([
    { intercambio: "Clases de guitarra", usuario: "Antonio Antonin", image: "../assets/images/logo.png", descripcion: "asd", numeroDeCreditosBase: 15 },
    { intercambio: "Botas", usuario: "ads", image: "../assets/images/logo.png", descripcion: "Botas de la talla 38 para mujer", numeroDeCreditosBase: 100 },
    { intercambio: "Botas", usuario: "ads", image: "../assets/images/logo.png", descripcion: "Botas de la talla 38 para mujer", numeroDeCreditosBase: 100 },
    { intercambio: "Botas", usuario: "ads", image: "../assets/images/logo.png", descripcion: "Botas de la talla 38 para mujer", numeroDeCreditosBase: 100 },
    { intercambio: "Botas", usuario: "ads", image: "../assets/images/logo.png", descripcion: "Botas de la talla 38 para mujer", numeroDeCreditosBase: 100 },
    { intercambio: "Botas", usuario: "ads", image: "../assets/images/logo.png", descripcion: "Botas de la talla 38 para mujer", numeroDeCreditosBase: 100 },
    { intercambio: "", usuario: "", image: "../assets/images/logo.png", descripcion: "", numeroDeCreditosBase: 0 }
  ]);
  function rowDisplay() {
    let isOfFour = true
    let count = 0
    return (
      <>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            rows.map((row) => (
              <Grid size={(isOfFour ? 20 : 1)} key={row.intercambio}>
                <CardIntercambio intercambio={row.intercambio} usuario={row.usuario} image={row.image} descripcion={row.descripcion} numeroDeCreditosBase={row.numeroDeCreditosBase} />
                {
                  () => {
                    count++
                    if ((isOfFour && count == 4) || (!isOfFour && count == 5)) {
                      isOfFour = !isOfFour
                      count = 0
                    }
                  }
                }
              </Grid>
            ))
          }
        </Grid>
      </>
    )
  }
  return (
    <>
      <Box
        sx={{
          
          display: "block",
          justifyContent: "center",
          alignItems: "start",
          minHeight: "calc(50vh - 100px)",
        }}
      >
        {/* Mensaje de bienvenida principal */}
        <Typography variant="h3" align="center">
          TRUEKIT
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Typography variant="h5">La app para intercambiar</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Los ultimos productos:</Typography>
        {
          rowDisplay()
        }
      </Box>
    </>
  );
}

export default Inicio;
