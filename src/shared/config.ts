export const Config = {
  apiSettings: {
    host: process.env.API_HOST || "localhost",
    port: process.env.API_PORT || 3000,
  },
  dbSettings: {
    authEnabled: process.env.MONGO_AUTH || false,
    connectionString: process.env.MONGO_DB_HOST || "localhost:27017",
    database: process.env.DATABASE || "iiit_rosie",
    password: process.env.MONGO_AUTH_PASSWORD,
    username: process.env.MONGO_AUTH_USERNAME,
  },
  serviceSettings: {
    env: process.env.environment || "local",
  },
  secretKeys: {
    jwtSecret: "messiRonaldareGod",
    cryptoSecret: "RonaldoMessiaReGod",
  },
};
