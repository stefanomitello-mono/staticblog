export interface Site {
    name: string;
    tagline: string;
    copyright: string;
    icon: string;
    baseUri: string;
}

export interface Navbar {
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

export interface Data {
    site: Site;
    navbar: Navbar[];
    hero: Hero;
    social: Social[];
}
