

export interface Site {
    name: string;
    tagline: number;
    copyright: string;
    icon: string;
    baseUri: string;
}

export interface INavbar {
    name: string;
    uri: string;
    isButton: boolean;
}


export interface Hero {
    title: string;
    subtitle: string;
}

export interface Social {
    icon: string;
    name: string;
    uri: string;
}

export interface IProject {
    title: string;
    body: string;
    button: string;
    sideColor: string;
}


export interface Data {
    site: Site;
    navitems: INavbar[];
    hero: Hero;
    social: Social[];
    project: IProject[];
}
