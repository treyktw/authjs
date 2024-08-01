import {Resend} from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "telera@telera.tech",
    to: email,
    subject: "Verify your email",
    html: `<p>Click <a href="${confirmLink}">Here</a> To Confirm Email</p>`
  });
};

export const sendPasswordResetEmail = async (
  email:string,
  token: string
) => { 
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "telera@telera.tech",
    to: email,
    subject: "Reset Password",
    html: `<p>Click <a href="${resetLink}">Here</a> To Reset your password</p>`
  })
}
