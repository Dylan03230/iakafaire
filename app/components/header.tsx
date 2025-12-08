import Button from "./Button";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-gray-900">
          IAKAFAIRE
        </div>

        <ul className="flex gap-12 flex-1 justify-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Découvrir
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Explorer
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Catégorie
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button variant="secondary" icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
          }>
            S&apos;inscrire
          </Button>

          <Button variant="primary">
            Se connecter
          </Button>
        </div>
      </nav>
    </header>
  );
}
