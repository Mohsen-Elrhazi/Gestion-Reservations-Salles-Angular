export interface Employe {
    id: number;
    nom: string;
    email: string;
    actif: boolean;
    role: string;
    // motDePasse: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: Employe[];
}
