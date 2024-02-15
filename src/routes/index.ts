import Router from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: String) => {
  let file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const file = cleanFileName(fileName)
  if (file !== 'index') {
    import(`./${file}`).then((moduleRouter) => {
      console.log(`Se carga la ruta ${file}`)
      router.use(`/${file}`, moduleRouter.router)
    })
  }
})

export { router }
