import * as process from "process"

export default () => ({
  smtp_email: process.env.SMTP_EMAIL,
  smtp_password: process.env.SMTP_PASSWORD,

  broker_url: process.env.BROKER_URL,
  email_service_queue: process.env.EMAIL_SERVICE_QUEUE,
})
