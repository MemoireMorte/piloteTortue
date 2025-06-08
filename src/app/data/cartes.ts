export interface ICarte {
  "command": string;
  "ascii": string;
  "color": string;
  "tooltip": string;
  "category": string;
}

export const CARTES: ICarte[] = [
    {
        "command": "ALLUME",
        "ascii": "+",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ETEINS",
        "ascii": "-",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "CLIGNE-D",
        "ascii": ".",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "CLIGNE-G",
        "ascii": "/",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVD 10",
        "ascii": "1",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVG 10",
        "ascii": "2",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVD 20",
        "ascii": "5",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVG 20",
        "ascii": "6",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVD 5",
        "ascii": "9",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ARC-AVG 5",
        "ascii": ":",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ETEINS-D",
        "ascii": ">",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "ETEINS-G",
        "ascii": "?",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "BC",
        "ascii": "B",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "LC",
        "ascii": "H",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "JOUE-AIR",
        "ascii": "J",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "SONNE",
        "ascii": "K",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "RALE",
        "ascii": "P",
        "color": "#288f3a",
        "tooltip": "",
        "category": "action"
    },
    {
        "command": "TOUCHE-AVD",
        "ascii": "(",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "TOUCHE-AVG",
        "ascii": ")",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "TOUCHE-AR",
        "ascii": "*",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "TOUCHE-STOP",
        "ascii": ",",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "C'EST",
        "ascii": "C",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "APPRENDS",
        "ascii": "M",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "DES-QUE",
        "ascii": "N",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "OUBLIE",
        "ascii": "O",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "SUPPRIME",
        "ascii": "S",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "TEST",
        "ascii": "T",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "EXECUTE -",
        "ascii": "W",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "EXECUTE",
        "ascii": "X",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "EXECUTE +",
        "ascii": "Y",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "GOMME",
        "ascii": "Z",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "TOUT",
        "ascii": "w",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "REGLAGE",
        "ascii": "x",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "ARRET",
        "ascii": "y",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "FIN",
        "ascii": "z",
        "color": "#ea4625",
        "tooltip": "",
        "category": "routine"
    },
    {
        "command": "AV 1",
        "ascii": "s",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "AV 10",
        "ascii": "A",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "AV 20",
        "ascii": "F",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "RE 1",
        "ascii": "t",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "RE 10",
        "ascii": "R",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "RE 20",
        "ascii": "U",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 1",
        "ascii": "u",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 15",
        "ascii": "D",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 30",
        "ascii": "b",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 45",
        "ascii": "e",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 60",
        "ascii": "h",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 90",
        "ascii": "k",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TD 120",
        "ascii": "n",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 1",
        "ascii": "v",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 15",
        "ascii": "G",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 30",
        "ascii": "c",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 45",
        "ascii": "f",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 60",
        "ascii": "i",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 90",
        "ascii": "l",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "TG 120",
        "ascii": "o",
        "color": "#d2bcaa",
        "tooltip": "",
        "category": "mouvement"
    },
    {
        "command": "ARC-REG 10",
        "ascii": "3",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "ARC-RED 10",
        "ascii": "4",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "ARC-REG 20",
        "ascii": "7",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "ARC-RED 20",
        "ascii": "8",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "ARC-RED 5",
        "ascii": ";",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "ARC-REG 5",
        "ascii": "<",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "av",
        "ascii": "a",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "td",
        "ascii": "d",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "tg",
        "ascii": "g",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    },
    {
        "command": "re",
        "ascii": "r",
        "color": "#ffffff",
        "tooltip": "",
        "category": "autre"
    }
];