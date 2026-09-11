"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-brand-blue-deep">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-brand-blue-light bg-white px-4 py-2.5 text-brand-blue-deep outline-none focus:border-brand-blue-deep"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-brand-blue-deep">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-brand-blue-light bg-white px-4 py-2.5 text-brand-blue-deep outline-none focus:border-brand-blue-deep"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-brand-blue-deep">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-lg border border-brand-blue-light bg-white px-4 py-2.5 text-brand-blue-deep outline-none focus:border-brand-blue-deep"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-blue-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple hover:text-brand-blue-deep disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-sm text-brand-blue-deep/70">
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Ocurrió un error al enviar tu mensaje. Intenta nuevamente.
        </p>
      )}
    </form>
  );
}
