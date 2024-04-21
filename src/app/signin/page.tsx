import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ClientSafeProvider, getProviders } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Loginbutton from "@/components/LoginButton";

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

export default async function SigninPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers: Record<string, ClientSafeProvider> =
    (await getProviders()) ?? {};
  console.log(callbackUrl);

  return (
    <section className="flex items-center justify-center">
      {Object.values(providers).map(({ name, id }) => (
        <Loginbutton
          key={name}
          size="large"
          type={true}
          callbackUrl={callbackUrl ?? "/"}
        />
      ))}
    </section>
  );
}
