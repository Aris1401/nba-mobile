import Equipes from "./pages/Equipes/Equipes";
import Home from "./pages/Home/Home";
import StatistiquesJoueur from "./pages/StatistiquesJoueur/StatistiquesJoueur";

const Routes = [
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Equipes', name: 'Equipes', component: Equipes },
    { path: '/StatiquesJoueur/:idEquipe', name: 'Statistiques Joueur', component: StatistiquesJoueur}
]

export default Routes;