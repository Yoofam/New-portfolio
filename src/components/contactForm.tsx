import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-green-600">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600">❌ Something went wrong.</p>
      )}
    </div>
  );
}
