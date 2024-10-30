import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface"
import { diskStorage } from "multer"

export const getMulterConfig = (): MulterOptions => {
  return {
    storage: diskStorage({
      destination: "./static",
      filename(req, file, callback) {
        console.log(file)
        callback(
          null,
          Date.now() +
            "_" +
            file.originalname +
            "." +
            file.mimetype.split("/")[1],
        )
      },
    }),
    fileFilter(req, file, callback) {
      callback(null, true)
    },
  }
}
