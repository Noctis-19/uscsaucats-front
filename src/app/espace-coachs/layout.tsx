import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CoachLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("coach_auth");

  if (!auth) {
    redirect("/connexion-coachs");
  }

  return <>{children}</>;
}
