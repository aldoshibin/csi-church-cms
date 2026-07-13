import { redirect } from "next/navigation";


export default function VerifyEmailRedirect({ searchParams }) {
  const email = searchParams?.email;
  redirect(email ? `/otp-verification?email=${encodeURIComponent(email)}` : "/otp-verification");
}
