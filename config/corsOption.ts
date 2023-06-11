import { allowedOrigins } from "./allowedOrigin"
import cors from "cors"

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin || "") !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'), false)
    }
  }
}

export default corsOptions