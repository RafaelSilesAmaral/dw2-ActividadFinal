//2.-se crea este archivo para rellenar el array 'hero'

import { Hero } from './hero'; /*2.-se esta extrallendo la funcionalidad de hero, es decir se
extrae la estroctura del array y se lo llena con datos */

export const HEROES: Hero[] = [
    { id: 1, name: "The Blair Witch Project", date: "1999-07-30" },
    { id: 2, name: "Paranormal Activity", date: "2009-09-25" },
    { id: 3, name: "REC", date: "2007-11-23" },
    { id: 4, name: "Cloverfield", date: "2008-01-18" },
    { id: 5, name: "Chronicle", date: "2012-02-03" },
    { id: 6, name: "Quarantine", date: "2008-10-10" },
    { id: 7, name: "V/H/S", date: "2012-10-06" },
    { id: 8, name: "The Last Exorcism", date: "2010-08-27" },
    { id: 9, name: "Creep", date: "2014-06-23" },
    { id: 10, name: "As Above, So Below", date: "2014-08-29" },
    { id: 11, name: "The Bay", date: "2012-11-13"},
    { id: 12, name: "Afflicted", date: "2014-04-04" }
];