// pages/a-propos.js

export default function APropos() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center">À propos</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <p>
          Altguards Security est un service indépendant spécialisé dans l’audit d’exposition numérique. Notre mission :
          vous aider à reprendre le contrôle sur votre image et vos données personnelles accessibles en ligne.
        </p>
        <p>
          Que vous soyez un particulier, un dirigeant, une entreprise ou une cible de veille stratégique, notre méthode repose
          sur des techniques OSINT éprouvées, une analyse pragmatique et des recommandations concrètes.
        </p>
        <p>
          Le service est fondé et opéré par Alexandre D., ingénieur en cybersécurité spécialisé en blue teaming et en veille technique. Il combine rigueur, confidentialité et efficacité.
        </p>
        <p>
          Pour toute demande spécifique ou projet sensible, n’hésitez pas à nous contacter directement.
        </p>
      </div>
    </div>
  );
}
