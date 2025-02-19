import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_secret: process.env.JWT_SECRET,
  send_mail_auth_user: process.env.SEND_MAIL_AUTH_USER,
  send_mail_auth_pass: process.env.SEND_MAIL_AUTH_PASS,
};
