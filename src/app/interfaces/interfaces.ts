


export interface Iproject {
    id:          string;
    name:        string;
    link:        string;
    textLink:    string;
    projectImg:  string;
    description: string;
    tech:        Itech[];
    repo:        string;
}

export interface Itech {
    id:          string;
    techName:    string;
    description: string;
}

export interface Icourse {
    id:           string;
    textItem:     string;
    escuela:      string;
    horas:        string;
    skills:       Iskill[];
    knowledge:    string;
    finalizado:   string;
    link:         string;
    thumbnail:    string;
    thumbnailAlt: string;

}

export interface Iskill {
    id:  string;
    img: string;
    alt: string;
}

export interface Ihardskill {
    id: string; 
    name: string; 
    img: string;
}
export interface Isoftskill {
    id: string; 
    name: string; 
    img: string;
}
export interface Iexperience {
    id: string;
    rol: string; 
    company: string; 
    period: string; 
    task: string;
}