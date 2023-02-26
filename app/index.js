require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

// due a un probleme de mineType qui bloquais l'accés au css et au js, j'ai du aller
// dans le html et ajouter dans la balise link {type="text/css"}  et dans la balise scripte  {type="text/javascript"}
// puis dans le app.use j'ai ajouter un objet:
app.use(express.static("build", {
    index: false, // désactive la réponse automatique avec le fichier index.html si aucun nom de fichier n'est spécifié.
    immutable: true, // ajoute l'en-tête immutable pour les fichiers statiques servis. Cela indique aux navigateurs que le contenu ne changera jamais, ce qui leur permet de mettre en cache le contenu plus longtemps.
    cacheControl: true, // ajoute l'en-tête Cache-Control pour les fichiers statiques servis. Cela spécifie comment les navigateurs doivent mettre en cache le contenu.
    maxAge: "30d" // indique à Express de mettre à jour automatiquement les fichiers statiques mis en cache après 30 jours. Cela permet de s'assurer que les navigateurs reçoivent toujours du contenu à jour.
    // En résumé, ce code permet de servir des fichiers statiques à partir d'un répertoire spécifié avec une mise en cache optimisée pour les performances et une durée de cache maximale de 30 jours.
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });

   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
