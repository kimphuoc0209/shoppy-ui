"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(_preState: any, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    return { error: data.message };
  }
  redirect("/");
}
