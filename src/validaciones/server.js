const app= require("./validaciones/app")

const PUERTO = process.env.PUERTO || 3000

app.listen(PUERTO, ()=>('SERVER http://localhost:$(PUERTO)'))