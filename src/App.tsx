import { useState } from "react";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors p-6">
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          Toggle Mode
        </button>
        <Portfolio />
        <ContactForm />
      </div>
    </div>
  );
}