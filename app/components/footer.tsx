import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          
  
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">IAKAFAIRE</h2>
            
            <div className="flex gap-4">
         
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.66v8.5h2.77v-4.21c0-.85.63-1.63 1.67-1.63.98 0 1.56.71 1.56 1.63v4.21h2.77M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68m1.39 9.94h-2.78v-8.5h2.78v8.5z"/>
                </svg>
              </a>
              
     
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              
    
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.5 2c-1.5 0-2.7 1.2-2.7 2.8v8.4c0 1.5 1.2 2.7 2.8 2.7h8.4c1.5 0 2.7-1.2 2.7-2.8V7.8c0-1.5-1.2-2.7-2.8-2.7H7.3m9.6 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-5.4 1.5c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
                </svg>
              </a>
              
   
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

       
          <div className="col-span-2 flex flex-col items-start">
            <span className="text-gray-800 font-medium mb-4">Vos évènements :</span>
            <Button variant="primary" className="text-sm py-2">
              Se connecter
            </Button>
          </div>


          <div className="col-span-2">
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Découvrir
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Explorer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Catégorie
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Profils
                </a>
              </li>
            </ul>
          </div>

 
          <div className="col-span-6">
            <h3 className="text-gray-800 font-medium text-sm mb-4 text-center">Votre compte :</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="email"
                className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="mot de passe"
                className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <Button variant="primary" className="w-full text-sm py-2">
                Se connecter
              </Button>
            </form>
          </div>
        </div>

 
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-xs">
          <p>&copy; 2025 Iakafaire. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}