const teamNames = {
    "CAM": "atletico-mg", "BAH": "bahia", "BOT": "botafogo", "RBB": "bragantino", "CEA": "ceara", 
    "COR": "corinthians", "CRU": "cruzeiro", "FLA": "flamengo", "FLU": "fluminense", "FOR": "fortaleza", 
    "GRE": "gremio", "INT": "internacional", "JUV": "juventude", "MIR": "mirassol", "PAL": "palmeiras", 
    "SAN": "santos", "SPT": "sport", "SAO": "sao-paulo", "VAS": "vasco", "VIT": "vitoria"
  };
  
  const vas = {
    "Fábio Carille": "https://img.sofascore.com/api/v1/manager/787764/image",
    "VEGETTI": "https://img.sofascore.com/api/v1/player/583974/image",
    "RAYAN": "https://img.sofascore.com/api/v1/player/1464966/image",
    "ALEX TEIXEIRA": "https://img.sofascore.com/api/v1/player/39649/image",
    "NUNO MOREIRA": "https://img.sofascore.com/api/v1/player/851285/image",
    "GABRIEL SOUZA": "https://img.sofascore.com/api/v1/player/1444693/image",
    "BRUNO LOPES": "https://img.sofascore.com/api/v1/player/1652392/image",
    "GABRIEL DA SILVA SOUZA": "https://img.sofascore.com/api/v1/player/1633231/image",
    "PHILIPPE COUTINHO": "https://img.sofascore.com/api/v1/player/119159/image",
    "DIMITRI PAYET": "https://img.sofascore.com/api/v1/player/14216/image",
    "ADSON": "https://img.sofascore.com/api/v1/player/1105970/image",
    "SFORZA": "https://img.sofascore.com/api/v1/player/1003013/image",
    "TCHÊ TCHÊ": "https://img.sofascore.com/api/v1/player/840398/image",
    "DAVID": "https://img.sofascore.com/api/v1/player/840291/image",
    "PAULINHO": "https://img.sofascore.com/api/v1/player/879902/image",
    "HUGO MOURA": "https://img.sofascore.com/api/v1/player/973293/image",
    "JAIR": "https://img.sofascore.com/api/v1/player/268419/image",
    "MATEUS CARVALHO": "https://img.sofascore.com/api/v1/player/1391962/image",
    "GUILHERME ESTRELLA": "https://img.sofascore.com/api/v1/player/1634144/image",
    "JEAN DAVID": "https://img.sofascore.com/api/v1/player/818816/image",
    "GARRÉ": "https://img.sofascore.com/api/v1/player/904847/image",
    "SOUZA": "https://img.sofascore.com/api/v1/player/119035/image",
    "LOIDE AUGUSTO": "https://img.sofascore.com/api/v1/player/1110708/image",
    "LUKAS ZUCCARELLO": "https://img.sofascore.com/api/v1/player/1641136/image",
    "LUCAS OLIVEIRA": "https://img.sofascore.com/api/v1/player/867907/image",
    "PATRICK DE LUCCA": "https://img.sofascore.com/api/v1/player/979868/image",
    "MAXSUELL": "https://img.sofascore.com/api/v1/player/1588106/image",
    "LUCAS PITON": "https://img.sofascore.com/api/v1/player/982174/image",
    "JOÃO VICTOR": "https://img.sofascore.com/api/v1/player/982998/image",
    "PUMA RODRÍGUEZ": "https://img.sofascore.com/api/v1/player/877591/image",
    "PAULO HENRIQUE": "https://img.sofascore.com/api/v1/player/1021721/image",
    "MAURICIO LEMOS": "https://img.sofascore.com/api/v1/player/385916/image",
    "VICTOR LUIS": "https://img.sofascore.com/api/v1/player/252781/image",
    "LUCAS FREITAS": "https://img.sofascore.com/api/v1/player/1069729/image",
    "MANUEL CAPASSO": "https://img.sofascore.com/api/v1/player/940611/image",
    "RIQUELME": "https://img.sofascore.com/api/v1/player/1016905/image",
    "LYNCON": "https://img.sofascore.com/api/v1/player/1463561/image",
    "LUIZ GUSTAVO": "https://img.sofascore.com/api/v1/player/1634148/image",
    "WALACE FERNANDES": "https://img.sofascore.com/api/v1/player/2039992/image",
    "LÉO JARDIM": "https://img.sofascore.com/api/v1/player/595598/image",
    "DANIEL FUZATO": "https://img.sofascore.com/api/v1/player/863276/image",
    "PABLO": "https://img.sofascore.com/api/v1/player/1652393/image",
    "ALEXANDER": "https://img.sofascore.com/api/v1/player/981404/image"
  }
  const cor = {
    "Ramón Díaz": "https://img.sofascore.com/api/v1/manager/784889/image",
    "MEMPHIS DEPAY": "https://img.sofascore.com/api/v1/player/138833/image",
    "YURI ALBERTO": "https://img.sofascore.com/api/v1/player/905463/image",
    "ÁNGEL ROMERO": "https://img.sofascore.com/api/v1/player/1197041/image",
    "TALLES MAGNO": "https://img.sofascore.com/api/v1/player/985860/image",
    "GIOVANE": "https://img.sofascore.com/api/v1/player/1170773/image",
    "HÉCTOR HERNÁNDEZ": "https://img.sofascore.com/api/v1/player/352448/image",
    "KAYKE FERRARI": "https://img.sofascore.com/api/v1/player/1411152/image",
    "GARRO": "https://img.sofascore.com/api/v1/player/994454/image",
    "CARRILLO": "https://img.sofascore.com/api/v1/player/115182/image",
    "IGOR CORONADO": "https://img.sofascore.com/api/v1/player/152098/image",
    "BRENO BIDON": "https://img.sofascore.com/api/v1/player/1199261/image",
    "JOSÉ MARTÍNEZ": "https://img.sofascore.com/api/v1/player/979325/image",
    "RANIELE": "https://img.sofascore.com/api/v1/player/866392/image",
    "MAYCON": "https://img.sofascore.com/api/v1/player/831778/image",
    "ALEX SANTANA": "https://img.sofascore.com/api/v1/player/358166/image",
    "CHARLES": "https://img.sofascore.com/api/v1/player/845178/image",
    "RYAN": "https://img.sofascore.com/api/v1/player/1170779/image",
    "FÉLIX TORRES": "https://img.sofascore.com/api/v1/player/881848/image",
    "MATHEUZINHO": "https://img.sofascore.com/api/v1/player/931540/image",
    "ANDRÉ RAMALHO": "https://img.sofascore.com/api/v1/player/148155/image",
    "MATHEUS BIDU": "https://img.sofascore.com/api/v1/player/981703/image",
    "GUSTAVO HENRIQUE": "https://img.sofascore.com/api/v1/player/243181/image",
    "CACÁ": "https://img.sofascore.com/api/v1/player/929200/image",
    "PALACIOS": "https://img.sofascore.com/api/v1/player/925615/image",
    "HUGO": "https://img.sofascore.com/api/v1/player/1017827/image",
    "ANGILERI": "https://img.sofascore.com/api/v1/player/311462/image",
    "LÉO MANA": "https://img.sofascore.com/api/v1/player/1170769/image",
    "JOÃO PEDRO": "https://img.sofascore.com/api/v1/player/1411150/image",
    "RENATO SANTOS": "https://img.sofascore.com/api/v1/player/1411159/image",
    "HUGO SOUZA": "https://img.sofascore.com/api/v1/player/950454/image",
    "MATHEUS DONELLI": "https://img.sofascore.com/api/v1/player/1002609/image",
    "FELIPE LONGO": "https://img.sofascore.com/api/v1/player/1485272/image",
    "KAUÊ": "https://img.sofascore.com/api/v1/player/1382923/image"
  }
  const sao = {
    "Luis Zubeldía": "https://img.sofascore.com/api/v1/manager/785466/image",
    "CALLERI": "https://img.sofascore.com/api/v1/player/340519/image",
    "RYAN FRANCISCO": "https://img.sofascore.com/api/v1/player/1631904/image",
    "ANDRÉ SILVA": "https://img.sofascore.com/api/v1/player/925072/image",
    "HENRIQUE CARMO": "https://img.sofascore.com/api/v1/player/1807899/image",
    "MATHEUS ALVES": "https://img.sofascore.com/api/v1/player/1836780/image",
    "LUCAS MOURA": "https://img.sofascore.com/api/v1/player/149710/image",
    "OSCAR": "https://img.sofascore.com/api/v1/player/39400/image",
    "LUCIANO": "https://img.sofascore.com/api/v1/player/282557/image",
    "FERREIRA": "https://img.sofascore.com/api/v1/player/998499/image",
    "PABLO MAIA": "https://img.sofascore.com/api/v1/player/1120721/image",
    "ALISSON": "https://img.sofascore.com/api/v1/player/291723/image",
    "BOBADILLA": "https://img.sofascore.com/api/v1/player/1015261/image",
    "LUIZ GUSTAVO": "https://img.sofascore.com/api/v1/player/29735/image",
    "MARCOS ANTÔNIO": "https://img.sofascore.com/api/v1/player/905453/image",
    "RODRIGUINHO": "https://img.sofascore.com/api/v1/player/1200730/image",
    "LIZIERO": "https://img.sofascore.com/api/v1/player/822510/image",
    "Luan Vinícius": "https://img.sofascore.com/api/v1/player/942426/image",
    "FELIPE NEGRUCCI": "https://img.sofascore.com/api/v1/player/1485598/image",
    "LUCAS FERREIRA": "https://img.sofascore.com/api/v1/player/1631907/image",
    "PEDRO VILHENA": "https://img.sofascore.com/api/v1/player/1009937/image",
    "WENDELL": "https://img.sofascore.com/api/v1/player/335033/image",
    "ARBOLEDA": "https://img.sofascore.com/api/v1/player/338937/image",
    "CÉDRIC SOARES": "https://img.sofascore.com/api/v1/player/44760/image",
    "FERRARESI": "https://img.sofascore.com/api/v1/player/881215/image",
    "ALAN FRANCO": "https://img.sofascore.com/api/v1/player/875402/image",
    "IGOR VINÍCIUS": "https://img.sofascore.com/api/v1/player/840119/image",
    "PATRYCK": "https://img.sofascore.com/api/v1/player/1002528/image",
    "ENZO DÍAZ": "https://img.sofascore.com/api/v1/player/932937/image",
    "SABINO": "https://img.sofascore.com/api/v1/player/975118/image",
    "RUAN": "https://img.sofascore.com/api/v1/player/914487/image",
    "IGÃO": "https://img.sofascore.com/api/v1/player/1879631/image",
    "PEDRO ANDRADE DROZINA": "https://img.sofascore.com/api/v1/player/1590336/image",
    "RAFAEL": "https://img.sofascore.com/api/v1/player/33132/image",
    "JANDREI": "https://img.sofascore.com/api/v1/player/874979/image",
    "YOUNG": "https://img.sofascore.com/api/v1/player/1116957/image",
    "LEANDRO MATHIAS": "https://img.sofascore.com/api/v1/player/1493107/image"
  }
  
  const fla = {
    "Filipe LuíS": "https://img.sofascore.com/api/v1/manager/805670/image",
    "PEDRO": "https://img.sofascore.com/api/v1/player/840219/image",
    "JUNINHO": "https://img.sofascore.com/api/v1/player/833236/image",
    "SHOLA": "https://img.sofascore.com/api/v1/player/1647589/image",
    "WALLACE YAN": "https://img.sofascore.com/api/v1/player/1466084/image",
    "ARRASCAETA": "https://img.sofascore.com/api/v1/player/333587/image",
    "BRUNO HENRIQUE": "https://img.sofascore.com/api/v1/player/795291/image",
    "GERSON": "https://img.sofascore.com/api/v1/player/611876/image",
    "DE LA CRUZ": "https://img.sofascore.com/api/v1/player/877513/image",
    "EVERTON": "https://img.sofascore.com/api/v1/player/386198/image",
    "MICHAEL": "https://img.sofascore.com/api/v1/player/878084/image",
    "PLATA": "https://img.sofascore.com/api/v1/player/937937/image",
    "ERICK PULGAR": "https://img.sofascore.com/api/v1/player/590262/image",
    "LUIZ ARAÚJO": "https://img.sofascore.com/api/v1/player/840451/image",
    "LORRAN": "https://img.sofascore.com/api/v1/player/1459764/image",
    "MATHEUS GONÇALVES": "https://img.sofascore.com/api/v1/player/1175553/image",
    "ALLAN": "https://img.sofascore.com/api/v1/player/828839/image",
    "EVERTTON ARAUJO": "https://img.sofascore.com/api/v1/player/1145106/image",
    "GUILHERME": "https://img.sofascore.com/api/v1/player/1645868/image",
    "PABLO LUCIO": "https://img.sofascore.com/api/v1/player/2031651/image",
    "CAIO GARCIA": "https://img.sofascore.com/api/v1/player/1485196/image",
    "LUIZ FELIPE MARIANO": "https://img.sofascore.com/api/v1/player/1883345/image",
    "JOSHUA": "https://img.sofascore.com/api/v1/player/2087275/image",
    "DANILO": "https://img.sofascore.com/api/v1/player/124992/image",
    "WESLEY": "https://img.sofascore.com/api/v1/player/1134200/image",
    "ALEX SANDRO": "https://img.sofascore.com/api/v1/player/84854/image",
    "LÉO ORTIZ": "https://img.sofascore.com/api/v1/player/869643/image",
    "AYRTON LUCAS": "https://img.sofascore.com/api/v1/player/818473/image",
    "VIÑA": "https://img.sofascore.com/api/v1/player/875295/image",
    "LÉO PEREIRA": "https://img.sofascore.com/api/v1/player/358548/image",
    "VARELA": "https://img.sofascore.com/api/v1/player/311456/image",
    "CLEITON": "https://img.sofascore.com/api/v1/player/1134199/image",
    "PABLO": "https://img.sofascore.com/api/v1/player/243735/image",
    "IAGO SILVA": "https://img.sofascore.com/api/v1/player/1647585/image",
    "DANIEL SALES": "https://img.sofascore.com/api/v1/player/1459762/image",
    "ZÉ WELINTON": "https://img.sofascore.com/api/v1/player/1199430/image",
    "JOÃO VICTOR DE SOUZA CUNHA": "https://img.sofascore.com/api/v1/player/1883337/image",
    "ROSSI": "https://img.sofascore.com/api/v1/player/1140986/image",
    "MATHEUS CUNHA": "https://img.sofascore.com/api/v1/player/1105835/image",
    "DYOGO ALVES": "https://img.sofascore.com/api/v1/player/1514629/image"
  }
  
  const cru = {
    "Leonardo Jardim": "https://img.sofascore.com/api/v1/manager/77748/image",
    "GABRIEL": "https://img.sofascore.com/api/v1/player/358554/image",
    "MATHEUS PEREIRA": "https://img.sofascore.com/api/v1/player/377238/image",
    "DUDU": "https://img.sofascore.com/api/v1/player/147464/image",
    "KAIO JORGE": "https://img.sofascore.com/api/v1/player/954888/image",
    "BOLASIE": "https://img.sofascore.com/api/v1/player/46620/image",
    "DINENNO": "https://img.sofascore.com/api/v1/player/350082/image",
    "LAUTARO DÍAZ": "https://img.sofascore.com/api/v1/player/992093/image",
    "MARQUINHOS": "https://img.sofascore.com/api/v1/player/1116954/image",
    "MATHEUS HENRIQUE": "https://img.sofascore.com/api/v1/player/912786/image",
    "EDUARDO": "https://img.sofascore.com/api/v1/player/76507/image",
    "LUCAS ROMERO": "https://img.sofascore.com/api/v1/player/263477/image",
    "WALACE": "https://img.sofascore.com/api/v1/player/553686/image",
    "LUCAS SILVA": "https://img.sofascore.com/api/v1/player/245159/image",
    "WANDERSON": "https://img.sofascore.com/api/v1/player/247483/image",
    "CHRISTIAN": "https://img.sofascore.com/api/v1/player/981733/image",
    "JAPA": "https://img.sofascore.com/api/v1/player/1459623/image",
    "RODRIGUINHO": "https://img.sofascore.com/api/v1/player/1174770/image",
    "FABRÍCIO BRUNO": "https://img.sofascore.com/api/v1/player/840220/image",
    "FAGNER": "https://img.sofascore.com/api/v1/player/25554/image",
    "WILLIAM": "https://img.sofascore.com/api/v1/player/604274/image",
    "MARLON": "https://img.sofascore.com/api/v1/player/870787/image",
    "JOÃO MARCELO": "https://img.sofascore.com/api/v1/player/978638/image",
    "KAIKI BRUNO": "https://img.sofascore.com/api/v1/player/1112484/image",
    "VILLALBA": "https://img.sofascore.com/api/v1/player/260077/image",
    "JONATHAN JESUS": "https://img.sofascore.com/api/v1/player/1498670/image",
    "GAMARRA": "https://img.sofascore.com/api/v1/player/1085451/image",
    "WEVERTON": "https://img.sofascore.com/api/v1/player/1105062/image",
    "JOSÉ JANDERSON": "https://img.sofascore.com/api/v1/player/1588663/image",
    "CÁSSIO": "https://img.sofascore.com/api/v1/player/27756/image",
    "LÉO ARAGÃO": "https://img.sofascore.com/api/v1/player/1488035/image",
    "OTÁVIO COSTA": "https://img.sofascore.com/api/v1/player/1589358/image"
  }
  
  const pal = {
    "ABEL FERREIRA": "https://img.sofascore.com/api/v1/manager/784709/image",
    "VITOR ROQUE": "https://img.sofascore.com/api/v1/player/1150391/image",
    "PAULINHO": "https://img.sofascore.com/api/v1/player/885179/image",
    "Flaco López": "https://img.sofascore.com/api/v1/player/1094179/image",
    "LUIGHI": "https://img.sofascore.com/api/v1/player/1597267/image",
    "BRUNO RODRIGUES": "https://img.sofascore.com/api/v1/player/817650/image",
    "THALYS": "https://img.sofascore.com/api/v1/player/1485295/image",
    "ESTÊVÃO": "https://img.sofascore.com/api/v1/player/1597265/image",
    "RICHARD RÍOS": "https://img.sofascore.com/api/v1/player/1015292/image",
    "RAPHAEL VEIGA": "https://img.sofascore.com/api/v1/player/840020/image",
    "FELIPE ANDERSON": "https://img.sofascore.com/api/v1/player/152276/image",
    "FACUNDO TORRES": "https://img.sofascore.com/api/v1/player/874572/image",
    "MAURÍCIO": "https://img.sofascore.com/api/v1/player/986233/image",
    "ANÍBAL MORENO": "https://img.sofascore.com/api/v1/player/977677/image",
    "EMILIANO MARTÍNEZ": "https://img.sofascore.com/api/v1/player/973533/image",
    "LUCAS EVANGELISTA": "https://img.sofascore.com/api/v1/player/331397/image",
    "FIGUEIREDO": "https://img.sofascore.com/api/v1/player/1942460/image",
    "ALLAN": "https://img.sofascore.com/api/v1/player/1835889/image",
    "RAFAEL BARBOSA COUTINHO": "https://img.sofascore.com/api/v1/player/1634976/image",
    "GUSTAVO GÓMEZ": "https://img.sofascore.com/api/v1/player/220833/image",
    "PIQUEREZ": "https://img.sofascore.com/api/v1/player/881110/image",
    "MURILO": "https://img.sofascore.com/api/v1/player/874729/image",
    "GIAY": "https://img.sofascore.com/api/v1/player/1106603/image",
    "MAYKE": "https://img.sofascore.com/api/v1/player/273329/image",
    "MARCOS ROCHA": "https://img.sofascore.com/api/v1/player/82576/image",
    "VANDERLAN": "https://img.sofascore.com/api/v1/player/1067640/image",
    "NAVES": "https://img.sofascore.com/api/v1/player/1167068/image",
    "BRUNO FUCHS": "https://img.sofascore.com/api/v1/player/973737/image",
    "BENEDETTI": "https://img.sofascore.com/api/v1/player/1485284/image",
    "MICAEL": "https://img.sofascore.com/api/v1/player/1105341/image",
    "WEVERTON": "https://img.sofascore.com/api/v1/player/243529/image",
    "MARCELO LOMBA": "https://img.sofascore.com/api/v1/player/34141/image",
    "MATEUS OLIVEIRA": "https://img.sofascore.com/api/v1/player/1066689/image"
  }
  const cam = {
    "Cuca": "https://img.sofascore.com/api/v1/manager/786693/image",
    "HULK": "https://img.sofascore.com/api/v1/player/34705/image",
    "RONY": "https://img.sofascore.com/api/v1/player/835260/image",
    "JÚNIOR SANTOS": "https://img.sofascore.com/api/v1/player/922559/image",
    "CADU": "https://img.sofascore.com/api/v1/player/1199473/image",
    "JOÃO MARCELO": "https://img.sofascore.com/api/v1/player/2025719/image",
    "GUSTAVO SCARPA": "https://img.sofascore.com/api/v1/player/559036/image",
    "GABRIEL MENINO": "https://img.sofascore.com/api/v1/player/974556/image",
    "FAUSTO VERA": "https://img.sofascore.com/api/v1/player/930690/image",
    "BERNARD": "https://img.sofascore.com/api/v1/player/241488/image",
    "ALAN FRANCO": "https://img.sofascore.com/api/v1/player/822729/image",
    "CUELLO": "https://img.sofascore.com/api/v1/player/871273/image",
    "RUBENS": "https://img.sofascore.com/api/v1/player/1093196/image",
    "IGOR GOMES": "https://img.sofascore.com/api/v1/player/913598/image",
    "PALACIOS": "https://img.sofascore.com/api/v1/player/1106599/image",
    "PATRICK": "https://img.sofascore.com/api/v1/player/1485290/image",
    "GUILHERME ARANA": "https://img.sofascore.com/api/v1/player/1127439/image",
    "CAIO PAULISTA": "https://img.sofascore.com/api/v1/player/931591/image",
    "LYANCO": "https://img.sofascore.com/api/v1/player/797893/image",
    "JUNIOR ALONSO": "https://img.sofascore.com/api/v1/player/333275/image",
    "SARAVIA": "https://img.sofascore.com/api/v1/player/315916/image",
    "IVÁN ROMÁN": "https://img.sofascore.com/api/v1/player/1464929/image",
    "NATANAEL": "https://img.sofascore.com/api/v1/player/1046805/image",
    "IGOR RABELLO": "https://img.sofascore.com/api/v1/player/753662/image",
    "VITOR HUGO": "https://img.sofascore.com/api/v1/player/794838/image",
    "RÔMULO": "https://img.sofascore.com/api/v1/player/1117102/image",
    "EVERSON": "https://img.sofascore.com/api/v1/player/870748/image",
    "GABRIEL DELFIM": "https://img.sofascore.com/api/v1/player/1117032/image",
    "GABRIEL ATILA": "https://img.sofascore.com/api/v1/player/1199469/image"
  }
  
  const intz = {
    "Roger Machado": "https://img.sofascore.com/api/v1/manager/784982/image",
    "ENNER VALENCIA": "https://img.sofascore.com/api/v1/player/106456/image",
    "BORRÉ": "https://img.sofascore.com/api/v1/player/560116/image",
    "CARBONERO": "https://img.sofascore.com/api/v1/player/925125/image",
    "VITINHO": "https://img.sofascore.com/api/v1/player/982405/image",
    "LUCCA": "https://img.sofascore.com/api/v1/player/1199435/image",
    "RICARDO MATHIAS": "https://img.sofascore.com/api/v1/player/1483340/image",
    "LUCCA DRUMMOND": "https://img.sofascore.com/api/v1/player/1878437/image",
    "ALAN PATRICK": "https://img.sofascore.com/api/v1/player/124997/image",
    "WESLEY": "https://img.sofascore.com/api/v1/player/985766/image",
    "ÓSCAR ROMERO": "https://img.sofascore.com/api/v1/player/146416/image",
    "THIAGO MAIA": "https://img.sofascore.com/api/v1/player/358550/image",
    "FERNANDO": "https://img.sofascore.com/api/v1/player/41837/image",
    "GABRIEL CARVALHO": "https://img.sofascore.com/api/v1/player/1485218/image",
    "BRUNO TABATA": "https://img.sofascore.com/api/v1/player/845433/image",
    "BRUNO HENRIQUE": "https://img.sofascore.com/api/v1/player/345113/image",
    "GUSTAVO PRADO": "https://img.sofascore.com/api/v1/player/1485220/image",
    "DIEGO ROSA": "https://img.sofascore.com/api/v1/player/1002415/image",
    "RONALDO": "https://img.sofascore.com/api/v1/player/824152/image",
    "LUIS OTÁVIO": "https://img.sofascore.com/api/v1/player/1835768/image",
    "ESTÊVÃO": "https://img.sofascore.com/api/v1/player/1116660/image",
    "YAGO NOAL": "https://img.sofascore.com/api/v1/player/2032844/image",
    "MARLON": "https://img.sofascore.com/api/v1/player/1645760/image",
    "BERNABEI": "https://img.sofascore.com/api/v1/player/989200/image",
    "VITÃO": "https://img.sofascore.com/api/v1/player/876625/image",
    "MERCADO": "https://img.sofascore.com/api/v1/player/128376/image",
    "BRUNO GOMES": "https://img.sofascore.com/api/v1/player/995071/image",
    "RAMON": "https://img.sofascore.com/api/v1/player/980761/image",
    "ROGEL": "https://img.sofascore.com/api/v1/player/875293/image",
    "KAIQUE ROCHA": "https://img.sofascore.com/api/v1/player/963990/image",
    "AGUIRRE": "https://img.sofascore.com/api/v1/player/1084963/image",
    "NATHAN": "https://img.sofascore.com/api/v1/player/1016912/image",
    "JUNINHO": "https://img.sofascore.com/api/v1/player/799947/image",
    "CLAYTON SAMPAIO": "https://img.sofascore.com/api/v1/player/1394242/image",
    "PABLO": "https://img.sofascore.com/api/v1/player/2032838/image",
    "PABLO PEREIRA DA COSTA": "https://img.sofascore.com/api/v1/player/2040091/image",
    "ROCHET": "https://img.sofascore.com/api/v1/player/581060/image",
    "IVAN QUARESMA": "https://img.sofascore.com/api/v1/player/795029/image",
    "ANTHONI": "https://img.sofascore.com/api/v1/player/1106134/image",
    "KAUAN": "https://img.sofascore.com/api/v1/player/1485233/image"
  }
  
  const cea = {
    "Léo Condé": "https://img.sofascore.com/api/v1/manager/791132/image",
    "PEDRO RAUL": "https://img.sofascore.com/api/v1/player/866911/image",
    "PEDRO HENRIQUE": "https://img.sofascore.com/api/v1/player/219190/image",
    "LELÊ": "https://img.sofascore.com/api/v1/player/1173457/image",
    "AYLON": "https://img.sofascore.com/api/v1/player/364528/image",
    "FERNANDINHO": "https://img.sofascore.com/api/v1/player/871219/image",
    "JOÃO VICTOR": "https://img.sofascore.com/api/v1/player/1117051/image",
    "GUILHERME LUIZ": "https://img.sofascore.com/api/v1/player/1631434/image",
    "RÔMULO": "https://img.sofascore.com/api/v1/player/1105078/image",
    "MATHEUS ARAÚJO": "https://img.sofascore.com/api/v1/player/1002617/image",
    "FERNANDO SOBRAL": "https://img.sofascore.com/api/v1/player/931479/image",
    "GALEANO": "https://img.sofascore.com/api/v1/player/883207/image",
    "LUCAS MUGNI": "https://img.sofascore.com/api/v1/player/249881/image",
    "RECALDE": "https://img.sofascore.com/api/v1/player/312820/image",
    "GUILHERME CASTILHO": "https://img.sofascore.com/api/v1/player/924228/image",
    "LOURENÇO": "https://img.sofascore.com/api/v1/player/879871/image",
    "RICHARDSON": "https://img.sofascore.com/api/v1/player/870758/image",
    "ALEJANDRO MARTÍNEZ": "https://img.sofascore.com/api/v1/player/1110829/image",
    "LUCAS LIMA": "https://img.sofascore.com/api/v1/player/1048254/image",
    "LÉO RAFAEL": "https://img.sofascore.com/api/v1/player/1046975/image",
    "RAFAEL RAMOS": "https://img.sofascore.com/api/v1/player/788195/image",
    "MARCOS VICTOR": "https://img.sofascore.com/api/v1/player/1174196/image",
    "MATHEUS BAHIA": "https://img.sofascore.com/api/v1/player/1047204/image",
    "MARLLON": "https://img.sofascore.com/api/v1/player/221206/image",
    "FABIANO SOUZA": "https://img.sofascore.com/api/v1/player/1130513/image",
    "LUIZ OTÁVIO": "https://img.sofascore.com/api/v1/player/871204/image",
    "BRUNO TUBARÃO": "https://img.sofascore.com/api/v1/player/931588/image",
    "Diego": "https://img.sofascore.com/api/v1/player/1016930/image",
    "NICOLAS": "https://img.sofascore.com/api/v1/player/841336/image",
    "WILLIAN MACHADO": "https://img.sofascore.com/api/v1/player/925871/image",
    "RAMON MENEZES": "https://img.sofascore.com/api/v1/player/839516/image",
    "ÉDER": "https://img.sofascore.com/api/v1/player/842072/image",
    "GABRIEL LACERDA": "https://img.sofascore.com/api/v1/player/1047847/image",
    "KEILLER": "https://img.sofascore.com/api/v1/player/840082/image",
    "RICHARD": "https://img.sofascore.com/api/v1/player/883906/image",
    "FERNANDO MIGUEL": "https://img.sofascore.com/api/v1/player/358418/image",
    "BRUNO FERREIRA": "https://img.sofascore.com/api/v1/player/1066241/image"
  }
  
  const fort = {
    "Juan Vojvoda": "https://img.sofascore.com/api/v1/manager/786600/image",
    "DEYVERSON": "https://img.sofascore.com/api/v1/player/270287/image",
    "LUCERO": "https://img.sofascore.com/api/v1/player/359024/image",
    "MOISÉS": "https://img.sofascore.com/api/v1/player/1046501/image",
    "BRUNO BRANCO": "https://img.sofascore.com/api/v1/player/1463987/image",
    "KERVIN ANDRADE": "https://img.sofascore.com/api/v1/player/1117065/image",
    "MARINHO": "https://img.sofascore.com/api/v1/player/798127/image",
    "YAGO PIKACHU": "https://img.sofascore.com/api/v1/player/363688/image",
    "BRENO LOPES": "https://img.sofascore.com/api/v1/player/937552/image",
    "POCHETTINO": "https://img.sofascore.com/api/v1/player/824626/image",
    "EMMANUEL MARTÍNEZ": "https://img.sofascore.com/api/v1/player/794312/image",
    "CALEBE": "https://img.sofascore.com/api/v1/player/1046796/image",
    "POL FERNÁNDEZ": "https://img.sofascore.com/api/v1/player/250231/image",
    "BORRERO": "https://img.sofascore.com/api/v1/player/980933/image",
    "JOSÉ WELISON": "https://img.sofascore.com/api/v1/player/551422/image",
    "MATHEUS ROSSETTO": "https://img.sofascore.com/api/v1/player/842682/image",
    "LUCAS SASHA": "https://img.sofascore.com/api/v1/player/123225/image",
    "PEDRO AUGUSTO": "https://img.sofascore.com/api/v1/player/922556/image",
    "ALLANZINHO": "https://img.sofascore.com/api/v1/player/988782/image",
    "DAVID LUIZ": "https://img.sofascore.com/api/v1/player/21300/image",
    "KUSCEVIC": "https://img.sofascore.com/api/v1/player/590324/image",
    "GASTÓN ÁVILA": "https://img.sofascore.com/api/v1/player/975526/image",
    "DIOGO BARBOSA": "https://img.sofascore.com/api/v1/player/243107/image",
    "FELIPE JONATAN": "https://img.sofascore.com/api/v1/player/931574/image",
    "TINGA": "https://img.sofascore.com/api/v1/player/330057/image",
    "BRÍTEZ": "https://img.sofascore.com/api/v1/player/789395/image",
    "MANCUSO": "https://img.sofascore.com/api/v1/player/1116624/image",
    "TITI": "https://img.sofascore.com/api/v1/player/243435/image",
    "BRUNO PACHECO": "https://img.sofascore.com/api/v1/player/870691/image",
    "JOÃO RICARDO": "https://img.sofascore.com/api/v1/player/839761/image",
    "BRENNO": "https://img.sofascore.com/api/v1/player/914481/image",
    "MAGRÃO": "https://img.sofascore.com/api/v1/player/1083070/image"
  }
  
  const bot = {
    "Renato Paiva": "https://img.sofascore.com/api/v1/manager/791116/image",
    "IGOR JESUS": "https://img.sofascore.com/api/v1/player/981619/image",
    "ARTUR": "https://img.sofascore.com/api/v1/player/841128/image",
    "MATHEUS MARTINS": "https://img.sofascore.com/api/v1/player/1106779/image",
    "MASTRIANI": "https://img.sofascore.com/api/v1/player/345847/image",
    "NATHAN FERNANDES": "https://img.sofascore.com/api/v1/player/1494695/image",
    "RWAN CRUZ": "https://img.sofascore.com/api/v1/player/1180918/image",
    "ELIAS MANOEL": "https://img.sofascore.com/api/v1/player/1066681/image",
    "YARLEN": "https://img.sofascore.com/api/v1/player/1807776/image",
    "KAYKE Queiroz": "https://img.sofascore.com/api/v1/player/1631272/image",
    "SAVARINO": "https://img.sofascore.com/api/v1/player/874739/image",
    "ALLAN": "https://img.sofascore.com/api/v1/player/158277/image",
    "GREGORE": "https://img.sofascore.com/api/v1/player/840276/image",
    "SANTIAGO RODRÍGUEZ": "https://img.sofascore.com/api/v1/player/975216/image",
    "JEFFINHO": "https://img.sofascore.com/api/v1/player/1016948/image",
    "MARLON FREITAS": "https://img.sofascore.com/api/v1/player/840202/image",
    "PATRICK DE PAULA": "https://img.sofascore.com/api/v1/player/1015291/image",
    "DANILO BARBOSA": "https://img.sofascore.com/api/v1/player/330063/image",
    "KAUÊ Rodrigues": "https://img.sofascore.com/api/v1/player/1463916/image",
    "NEWTON": "https://img.sofascore.com/api/v1/player/1463909/image",
    "RAFAEL LOBATO": "https://img.sofascore.com/api/v1/player/1485731/image",
    "KAUAN LINDES": "https://img.sofascore.com/api/v1/player/1650031/image",
    "ALEX TELLES": "https://img.sofascore.com/api/v1/player/312110/image",
    "BASTOS": "https://img.sofascore.com/api/v1/player/215956/image",
    "ALEXANDER BARBOZA": "https://img.sofascore.com/api/v1/player/801044/image",
    "CUIABANO": "https://img.sofascore.com/api/v1/player/1160554/image",
    "VITINHO": "https://img.sofascore.com/api/v1/player/914477/image",
    "MATEO PONTE": "https://img.sofascore.com/api/v1/player/1099163/image",
    "JAIR": "https://img.sofascore.com/api/v1/player/1170722/image",
    "MARÇAL": "https://img.sofascore.com/api/v1/player/143593/image",
    "DAVID RICARDO": "https://img.sofascore.com/api/v1/player/1186587/image",
    "PHILIPE SAMPAIO": "https://img.sofascore.com/api/v1/player/588996/image",
    "SERAFIM": "https://img.sofascore.com/api/v1/player/1587942/image",
    "JOHN": "https://img.sofascore.com/api/v1/player/840103/image",
    "LÉO LINCK": "https://img.sofascore.com/api/v1/player/1119887/image",
    "RAÚL": "https://img.sofascore.com/api/v1/player/866736/image"
  }
  const juv = {
    "Fábio Matias": "https://img.sofascore.com/api/v1/manager/795730/image",
    "GILBERTO": "https://img.sofascore.com/api/v1/player/158561/image",
    "MATHEUS BABI": "https://img.sofascore.com/api/v1/player/1007431/image",
    "RONIE CARRILLO": "https://img.sofascore.com/api/v1/player/873891/image",
    "GABRIEL TALIARI": "https://img.sofascore.com/api/v1/player/933955/image",
    "VITOR PERNAMBUCO": "https://img.sofascore.com/api/v1/player/976860/image",
    "EMERSON GALEGO": "https://img.sofascore.com/api/v1/player/1462809/image",
    "DANIEL NUNES": "https://img.sofascore.com/api/v1/player/2113656/image",
    "NENÊ": "https://img.sofascore.com/api/v1/player/5672/image",
    "PETTERSON": "https://img.sofascore.com/api/v1/player/1170955/image",
    "JEAN CARLOS": "https://img.sofascore.com/api/v1/player/850475/image",
    "JÁDSON": "https://img.sofascore.com/api/v1/player/243651/image",
    "BATALLA": "https://img.sofascore.com/api/v1/player/1022945/image",
    "ÊNIO": "https://img.sofascore.com/api/v1/player/1015935/image",
    "LUIS MANDACA": "https://img.sofascore.com/api/v1/player/1116677/image",
    "GIOVANNY": "https://img.sofascore.com/api/v1/player/797649/image",
    "CAIQUE": "https://img.sofascore.com/api/v1/player/871032/image",
    "GIRALDO": "https://img.sofascore.com/api/v1/player/1136107/image",
    "GARCEZ": "https://img.sofascore.com/api/v1/player/1050353/image",
    "REGINALDO": "https://img.sofascore.com/api/v1/player/555456/image",
    "RAFINHA": "https://img.sofascore.com/api/v1/player/1467339/image",
    "DAVI GOES": "https://img.sofascore.com/api/v1/player/1823607/image",
    "KELVI": "https://img.sofascore.com/api/v1/player/1105818/image",
    "PEIXOTO": "https://img.sofascore.com/api/v1/player/1049781/image",
    "WILKER ÁNGEL": "https://img.sofascore.com/api/v1/player/147358/image",
    "NATÃ": "https://img.sofascore.com/api/v1/player/1175603/image",
    "ALAN RUSCHEL": "https://img.sofascore.com/api/v1/player/551674/image",
    "ABNER": "https://img.sofascore.com/api/v1/player/1464653/image",
    "FELIPINHO": "https://img.sofascore.com/api/v1/player/1048276/image",
    "ADRIANO MARTINS": "https://img.sofascore.com/api/v1/player/1008459/image",
    "Ewerthon": "https://img.sofascore.com/api/v1/player/992512/image",
    "KAWAN": "https://img.sofascore.com/api/v1/player/1191406/image",
    "CIPRIANO": "https://img.sofascore.com/api/v1/player/1111123/image",
    "MARCOS PAULO": "https://img.sofascore.com/api/v1/player/1170913/image",
    "RODRIGO SAM": "https://img.sofascore.com/api/v1/player/794640/image",
    "GABRIEL SOUZA": "https://img.sofascore.com/api/v1/player/1188034/image",
    "GUSTAVO": "https://img.sofascore.com/api/v1/player/124766/image",
    "MARCÃO": "https://img.sofascore.com/api/v1/player/125861/image",
    "MATEUS CLAUS": "https://img.sofascore.com/api/v1/player/974334/image",
    "RUAN CARNEIRO": "https://img.sofascore.com/api/v1/player/1014248/image",
    "EUDES RUAN DE SOUSA CARNEIRO": "https://img.sofascore.com/api/v1/player/1836147/image"
  }
  
  const flu = {
    "Renato Gaúcho": "https://img.sofascore.com/api/v1/manager/787598/image",
    "CANO": "https://img.sofascore.com/api/v1/player/33238/image",
    "EVERALDO": "https://img.sofascore.com/api/v1/player/386212/image",
    "ARIAS": "https://img.sofascore.com/api/v1/player/844096/image",
    "GANSO": "https://img.sofascore.com/api/v1/player/116853/image",
    "RENATO AUGUSTO": "https://img.sofascore.com/api/v1/player/34152/image",
    "CANOBBIO": "https://img.sofascore.com/api/v1/player/846413/image",
    "SERNA": "https://img.sofascore.com/api/v1/player/981374/image",
    "MARTINELLI": "https://img.sofascore.com/api/v1/player/1067671/image",
    "KENO": "https://img.sofascore.com/api/v1/player/787607/image",
    "BERNAL": "https://img.sofascore.com/api/v1/player/1177404/image",
    "OTÁVIO": "https://img.sofascore.com/api/v1/player/552686/image",
    "LIMA": "https://img.sofascore.com/api/v1/player/807850/image",
    "HÉRCULES": "https://img.sofascore.com/api/v1/player/1104068/image",
    "LAVEGA": "https://img.sofascore.com/api/v1/player/1122737/image",
    "NONATO": "https://img.sofascore.com/api/v1/player/922566/image",
    "LEZCANO": "https://img.sofascore.com/api/v1/player/1393308/image",
    "RIQUELME FELIPE": "https://img.sofascore.com/api/v1/player/1884803/image",
    "PAULO BAYA": "https://img.sofascore.com/api/v1/player/1174206/image",
    "ISAQUE": "https://img.sofascore.com/api/v1/player/1835892/image",
    "VITÃO": "https://img.sofascore.com/api/v1/player/1395634/image",
    "GUSTAVO APIS": "https://img.sofascore.com/api/v1/player/1106778/image",
    "THIAGO SILVA": "https://img.sofascore.com/api/v1/player/33541/image",
    "RENÊ": "https://img.sofascore.com/api/v1/player/243113/image",
    "GUGA": "https://img.sofascore.com/api/v1/player/928134/image",
    "SAMUEL XAVIER": "https://img.sofascore.com/api/v1/player/795773/image",
    "IGNÁCIO": "https://img.sofascore.com/api/v1/player/958382/image",
    "GABRIEL FUENTES": "https://img.sofascore.com/api/v1/player/927551/image",
    "THIAGO SANTOS": "https://img.sofascore.com/api/v1/player/378590/image",
    "MANOEL": "https://img.sofascore.com/api/v1/player/84845/image",
    "FREYTES": "https://img.sofascore.com/api/v1/player/962187/image",
    "FÁBIO": "https://img.sofascore.com/api/v1/player/17785/image",
    "MARCELO PITALUGA": "https://img.sofascore.com/api/v1/player/1093974/image",
    "VITOR EUDES": "https://img.sofascore.com/api/v1/player/927666/image",
    "GUSTAVO RAMALHO": "https://img.sofascore.com/api/v1/player/1106144/image"
  }
  
  const gre = {
    "Gustavo Quinteros": "https://img.sofascore.com/api/v1/manager/53544/image",
    "BRAITHWAITE": "https://img.sofascore.com/api/v1/player/66471/image",
    "AREZO": "https://img.sofascore.com/api/v1/player/975814/image",
    "CRISTIAN OLIVERA": "https://img.sofascore.com/api/v1/player/1068987/image",
    "ANDRÉ": "https://img.sofascore.com/api/v1/player/1463912/image",
    "ALYSSON": "https://img.sofascore.com/api/v1/player/1631879/image",
    "VILLASANTI": "https://img.sofascore.com/api/v1/player/1139775/image",
    "PAVÓN": "https://img.sofascore.com/api/v1/player/358956/image",
    "ARAVENA": "https://img.sofascore.com/api/v1/player/1000502/image",
    "CRISTALDO": "https://img.sofascore.com/api/v1/player/558820/image",
    "MONSALVE": "https://img.sofascore.com/api/v1/player/1066620/image",
    "GABRIEL MEC": "https://img.sofascore.com/api/v1/player/1895377/image",
    "CUÉLLAR": "https://img.sofascore.com/api/v1/player/180059/image",
    "AMUZU": "https://img.sofascore.com/api/v1/player/901889/image",
    "EDENILSON": "https://img.sofascore.com/api/v1/player/221636/image",
    "RONALD": "https://img.sofascore.com/api/v1/player/1587711/image",
    "DODI": "https://img.sofascore.com/api/v1/player/870804/image",
    "NATHAN": "https://img.sofascore.com/api/v1/player/358538/image",
    "CAMILO": "https://img.sofascore.com/api/v1/player/975319/image",
    "KANNEMANN": "https://img.sofascore.com/api/v1/player/249647/image",
    "WAGNER LEONARDO": "https://img.sofascore.com/api/v1/player/976235/image",
    "IGOR SERROTE": "https://img.sofascore.com/api/v1/player/1631876/image",
    "JEMERSON": "https://img.sofascore.com/api/v1/player/328519/image",
    "JOÃO PEDRO": "https://img.sofascore.com/api/v1/player/605528/image",
    "RODRIGO ELY": "https://img.sofascore.com/api/v1/player/168745/image",
    "GUSTAVO MARTINS": "https://img.sofascore.com/api/v1/player/1105796/image",
    "LUCAS ESTEVES": "https://img.sofascore.com/api/v1/player/1387272/image",
    "LUAN CÂNDIDO": "https://img.sofascore.com/api/v1/player/905459/image",
    "JOÃO LUCAS": "https://img.sofascore.com/api/v1/player/981019/image",
    "MAYK": "https://img.sofascore.com/api/v1/player/944459/image",
    "VIERY": "https://img.sofascore.com/api/v1/player/1907760/image",
    "TIAGO VOLPI": "https://img.sofascore.com/api/v1/player/243509/image",
    "GABRIEL GRANDO": "https://img.sofascore.com/api/v1/player/1111770/image",
    "JORGE BARTHOLDY": "https://img.sofascore.com/api/v1/player/1639127/image"
  }
  
  const bah = {
    "Rogério Ceni": "https://img.sofascore.com/api/v1/manager/787735/image",
    "Lucho Rodríguez": "https://img.sofascore.com/api/v1/player/1099361/image",
    "WILLIAN JOSÉ": "https://img.sofascore.com/api/v1/player/123223/image",
    "ADEMIR": "https://img.sofascore.com/api/v1/player/922546/image",
    "TIAGO": "https://img.sofascore.com/api/v1/player/1834368/image",
    "TIAGO SOUZA": "https://img.sofascore.com/api/v1/player/1469531/image",
    "EVERTON RIBEIRO": "https://img.sofascore.com/api/v1/player/145063/image",
    "ERICK PULGA": "https://img.sofascore.com/api/v1/player/1104070/image",
    "CAULY": "https://img.sofascore.com/api/v1/player/255873/image",
    "KAYKY": "https://img.sofascore.com/api/v1/player/1106151/image",
    "RODRIGO NESTOR": "https://img.sofascore.com/api/v1/player/905461/image",
    "JEAN LUCAS": "https://img.sofascore.com/api/v1/player/927975/image",
    "MICHEL ARAÚJO": "https://img.sofascore.com/api/v1/player/924857/image",
    "CAIO ALEXANDRE": "https://img.sofascore.com/api/v1/player/1008832/image",
    "ERICK": "https://img.sofascore.com/api/v1/player/874063/image",
    "ACEVEDO": "https://img.sofascore.com/api/v1/player/959620/image",
    "REZENDE": "https://img.sofascore.com/api/v1/player/868030/image",
    "LÉO CITTADINI": "https://img.sofascore.com/api/v1/player/332171/image",
    "SANTIAGO ARIAS": "https://img.sofascore.com/api/v1/player/158583/image",
    "LUCIANO JUBA": "https://img.sofascore.com/api/v1/player/1017264/image",
    "GILBERTO": "https://img.sofascore.com/api/v1/player/261687/image",
    "GABRIEL XAVIER": "https://img.sofascore.com/api/v1/player/1117710/image",
    "SANTIAGO MINGO": "https://img.sofascore.com/api/v1/player/989843/image",
    "KANU": "https://img.sofascore.com/api/v1/player/871705/image",
    "IAGO": "https://img.sofascore.com/api/v1/player/869644/image",
    "DAVID DUARTE": "https://img.sofascore.com/api/v1/player/810715/image",
    "ANDRÉ DHOMINIQUE": "https://img.sofascore.com/api/v1/player/1177384/image",
    "MARCOS FELIPE": "https://img.sofascore.com/api/v1/player/358524/image",
    "DANILO FERNANDES": "https://img.sofascore.com/api/v1/player/145054/image",
    "RONALDO": "https://img.sofascore.com/api/v1/player/840106/image",
    "GABRIEL SOUZA": "https://img.sofascore.com/api/v1/player/1117033/image"
  }
  
  const rbb = {
    "Fernando Seabra": "https://cruzeiropedia.org/images/thumb/a/ac/Fernando.Seabra.png/200px-Fernando.Seabra.png",
    "ISIDRO PITTA": "https://img.sofascore.com/api/v1/player/979861/image",
    "EDUARDO SASHA": "https://img.sofascore.com/api/v1/player/143846/image",
    "THIAGO BORBAS": "https://img.sofascore.com/api/v1/player/1018547/image",
    "FERNANDO": "https://img.sofascore.com/api/v1/player/911195/image",
    "HENRY MOSQUERA": "https://img.sofascore.com/api/v1/player/1170680/image",
    "VINICINHO": "https://img.sofascore.com/api/v1/player/1587965/image",
    "KAWÊ": "https://img.sofascore.com/api/v1/player/1046800/image",
    "FABINHO": "https://img.sofascore.com/api/v1/player/1117513/image",
    "JHON JHON": "https://img.sofascore.com/api/v1/player/1167069/image",
    "MATHEUS FERNANDES": "https://img.sofascore.com/api/v1/player/840150/image",
    "LUCAS BARBOSA": "https://img.sofascore.com/api/v1/player/1067641/image",
    "PRAXEDES": "https://img.sofascore.com/api/v1/player/1018093/image",
    "GABRIEL": "https://img.sofascore.com/api/v1/player/242052/image",
    "LAQUINTANA": "https://img.sofascore.com/api/v1/player/948004/image",
    "ERIC RAMIRES": "https://img.sofascore.com/api/v1/player/950545/image",
    "VITINHO": "https://img.sofascore.com/api/v1/player/840210/image",
    "GUSTAVINHO": "https://img.sofascore.com/api/v1/player/1463904/image",
    "JOÃO NETO": "https://img.sofascore.com/api/v1/player/990454/image",
    "JUNINHO CAPIXABA": "https://img.sofascore.com/api/v1/player/870556/image",
    "ANDRÉS HURTADO": "https://img.sofascore.com/api/v1/player/987589/image",
    "PEDRO HENRIQUE": "https://img.sofascore.com/api/v1/player/551774/image",
    "GUZMÁN RODRÍGUEZ": "https://img.sofascore.com/api/v1/player/997239/image",
    "SANT'ANNA": "https://img.sofascore.com/api/v1/player/869726/image",
    "NATHAN MENDES": "https://img.sofascore.com/api/v1/player/1116955/image",
    "DOUGLAS MENDES": "https://img.sofascore.com/api/v1/player/1134472/image",
    "EDUARDO SANTOS": "https://img.sofascore.com/api/v1/player/925189/image",
    "GUILHERME LOPES": "https://img.sofascore.com/api/v1/player/1097858/image",
    "CLEITON": "https://img.sofascore.com/api/v1/player/844576/image",
    "LUCÃO": "https://img.sofascore.com/api/v1/player/981586/image",
    "FABRÍCIO": "https://img.sofascore.com/api/v1/player/1047208/image"
  }
  
  const san = {
    "Pedro Caixinha": "https://img.sofascore.com/api/v1/manager/125341/image",
    "DEIVID WASHINGTON": "https://img.sofascore.com/api/v1/player/1485371/image",
    "TIQUINHO SOARES": "https://img.sofascore.com/api/v1/player/789100/image",
    "GABRIEL VERON": "https://img.sofascore.com/api/v1/player/1002819/image",
    "THACIANO": "https://img.sofascore.com/api/v1/player/872039/image",
    "JULIO FURCH": "https://img.sofascore.com/api/v1/player/787551/image",
    "LUCA MEIRELLES": "https://img.sofascore.com/api/v1/player/1633781/image",
    "NEYMAR": "https://img.sofascore.com/api/v1/player/124712/image",
    "SOTELDO": "https://img.sofascore.com/api/v1/player/789960/image",
    "ROLLHEISER": "https://img.sofascore.com/api/v1/player/922454/image",
    "GUILHERME": "https://img.sofascore.com/api/v1/player/844605/image",
    "RINCÓN": "https://img.sofascore.com/api/v1/player/46798/image",
    "ZÉ RAFAEL": "https://img.sofascore.com/api/v1/player/329069/image",
    "BARREAL": "https://img.sofascore.com/api/v1/player/949687/image",
    "DIEGO PITUCA": "https://img.sofascore.com/api/v1/player/866417/image",
    "JOÃO SCHMIDT": "https://img.sofascore.com/api/v1/player/244591/image",
    "GABRIEL BONTEMPO": "https://img.sofascore.com/api/v1/player/1656036/image",
    "HYAN": "https://img.sofascore.com/api/v1/player/1656040/image",
    "ZÉ IVALDO": "https://img.sofascore.com/api/v1/player/844602/image",
    "GIL": "https://img.sofascore.com/api/v1/player/106402/image",
    "JP CHERMONT": "https://img.sofascore.com/api/v1/player/1482361/image",
    "LUAN PERES": "https://img.sofascore.com/api/v1/player/842098/image",
    "SOUZA": "https://img.sofascore.com/api/v1/player/1482340/image",
    "LEO GODOY": "https://img.sofascore.com/api/v1/player/794006/image",
    "ESCOBAR": "https://img.sofascore.com/api/v1/player/840500/image",
    "JOÃO BASSO": "https://img.sofascore.com/api/v1/player/850955/image",
    "ADERLAN": "https://img.sofascore.com/api/v1/player/584432/image",
    "KEVYSON": "https://img.sofascore.com/api/v1/player/1389980/image",
    "LUISÃO": "https://img.sofascore.com/api/v1/player/1467379/image",
    "VINICIUS LIRA": "https://img.sofascore.com/api/v1/player/2039241/image",
    "JOÃO PAULO": "https://img.sofascore.com/api/v1/player/795177/image",
    "GABRIEL BRAZÃO": "https://img.sofascore.com/api/v1/player/905448/image",
    "DIOGENES": "https://img.sofascore.com/api/v1/player/1128754/image"
  }
  
  const mir = {
    "Rafael Guanaes": "https://img.sofascore.com/api/v1/manager/795603/image",
    "RAFA SILVA": "https://img.sofascore.com/api/v1/player/243963/image",
    "LÉO GAMALHO": "https://img.sofascore.com/api/v1/player/808786/image",
    "DAVÓ": "https://img.sofascore.com/api/v1/player/981695/image",
    "IURY CASTILHO": "https://img.sofascore.com/api/v1/player/795020/image",
    "FABRÍCIO DANIEL": "https://img.sofascore.com/api/v1/player/1128767/image",
    "CRISTIAN": "https://img.sofascore.com/api/v1/player/1148306/image",
    "RONI": "https://img.sofascore.com/api/v1/player/1046440/image",
    "YAGO FELIPE": "https://img.sofascore.com/api/v1/player/552164/image",
    "CLAYSON": "https://img.sofascore.com/api/v1/player/811308/image",
    "CHICO KIM": "https://img.sofascore.com/api/v1/player/880132/image",
    "GABRIEL": "https://img.sofascore.com/api/v1/player/1465498/image",
    "NETO MOURA": "https://img.sofascore.com/api/v1/player/559034/image",
    "LUIZ FILIPE": "https://img.sofascore.com/api/v1/player/1090716/image",
    "DANIELZINHO": "https://img.sofascore.com/api/v1/player/356514/image",
    "MATHEUS SALES": "https://img.sofascore.com/api/v1/player/822935/image",
    "NEGUEBA": "https://img.sofascore.com/api/v1/player/872007/image",
    "JOSÉ ALDO": "https://img.sofascore.com/api/v1/player/988851/image",
    "EDSON CARIOCA": "https://img.sofascore.com/api/v1/player/1048612/image",
    "MACEIÓ": "https://img.sofascore.com/api/v1/player/1645837/image",
    "MATHEUS BIANQUI": "https://img.sofascore.com/api/v1/player/981746/image",
    "ZÉ VITOR": "https://img.sofascore.com/api/v1/player/1188028/image",
    "REINALDO": "https://img.sofascore.com/api/v1/player/243109/image",
    "DAVID BRAZ": "https://img.sofascore.com/api/v1/player/46942/image",
    "ALAN EMPEREUR": "https://img.sofascore.com/api/v1/player/373740/image",
    "LUIZ OTÁVIO": "https://img.sofascore.com/api/v1/player/874778/image",
    "DANIEL BORGES": "https://img.sofascore.com/api/v1/player/794874/image",
    "JOÃO VICTOR": "https://img.sofascore.com/api/v1/player/863297/image",
    "LUCAS RAMON": "https://img.sofascore.com/api/v1/player/797225/image",
    "JEMMES": "https://img.sofascore.com/api/v1/player/1527129/image",
    "DA SILVA": "https://img.sofascore.com/api/v1/player/1184878/image",
    "WALTER": "https://img.sofascore.com/api/v1/player/329055/image",
    "ALEX MURALHA": "https://img.sofascore.com/api/v1/player/340113/image",
    "THOMAZELLA": "https://img.sofascore.com/api/v1/player/870929/image"
  }
  
  const spo = {
    "Pepa": "https://img.sofascore.com/api/v1/manager/785314/image",
    "GONÇALO PACIÊNCIA": "https://img.sofascore.com/api/v1/player/138890/image",
    "PABLO": "https://img.sofascore.com/api/v1/player/374486/image",
    "ARTHUR SOUSA": "https://img.sofascore.com/api/v1/player/1170780/image",
    "LENNY LOBATO": "https://img.sofascore.com/api/v1/player/1104316/image",
    "ZÉ ROBERTO": "https://img.sofascore.com/api/v1/player/842076/image",
    "SÉRGIO OLIVEIRA": "https://img.sofascore.com/api/v1/player/991493/image",
    "LUCAS LIMA": "https://img.sofascore.com/api/v1/player/244589/image",
    "CHRYSTIAN BARLETTA": "https://img.sofascore.com/api/v1/player/1035765/image",
    "DU QUEIROZ": "https://img.sofascore.com/api/v1/player/1128129/image",
    "ZÉ LUCAS": "https://img.sofascore.com/api/v1/player/2040561/image",
    "CARLOS ALBERTO": "https://img.sofascore.com/api/v1/player/1008700/image",
    "HYORAN": "https://img.sofascore.com/api/v1/player/551348/image",
    "FABRICIO DOMÍNGUEZ": "https://img.sofascore.com/api/v1/player/939934/image",
    "ATENCIO": "https://img.sofascore.com/api/v1/player/1199246/image",
    "RIVERA": "https://img.sofascore.com/api/v1/player/832662/image",
    "GUSTAVO MAIA": "https://img.sofascore.com/api/v1/player/1023049/image",
    "ROMARINHO": "https://img.sofascore.com/api/v1/player/870578/image",
    "TITI ORTÍZ": "https://img.sofascore.com/api/v1/player/293235/image",
    "DALBERT": "https://img.sofascore.com/api/v1/player/385386/image",
    "ANTÔNIO CARLOS": "https://img.sofascore.com/api/v1/player/242209/image",
    "DI PLACIDO": "https://img.sofascore.com/api/v1/player/546338/image",
    "RAFAEL THYERE": "https://img.sofascore.com/api/v1/player/354894/image",
    "CHICO": "https://img.sofascore.com/api/v1/player/877904/image",
    "MATHEUS ALEXANDRE": "https://img.sofascore.com/api/v1/player/953736/image",
    "JOÃO SILVA": "https://img.sofascore.com/api/v1/player/1068519/image",
    "IGOR CARIÚS": "https://img.sofascore.com/api/v1/player/874195/image",
    "LUCAS CUNHA": "https://img.sofascore.com/api/v1/player/794139/image",
    "HEREDA": "https://img.sofascore.com/api/v1/player/981295/image",
    "RENZO": "https://img.sofascore.com/api/v1/player/1105432/image",
    "FELYPE GABRIEL": "https://img.sofascore.com/api/v1/player/1650370/image",
    "FELYPE GABRIEL ALENCAR CARVALHO": "https://img.sofascore.com/api/v1/player/1638727/image",
    "CAIQUE FRANÇA": "https://img.sofascore.com/api/v1/player/799667/image",
    "THIAGO COUTO": "https://img.sofascore.com/api/v1/player/871291/image",
    "DENIS": "https://img.sofascore.com/api/v1/player/47722/image",
    "DAVI MEDEIROS SERRANO LIRA": "https://img.sofascore.com/api/v1/player/1633504/image"
  }
  const vit = {
    "Thiago Carpini": "https://img.sofascore.com/api/v1/manager/793051/image",
    "CARLINHOS": "https://img.sofascore.com/api/v1/player/852534/image",
    "ERICK": "https://img.sofascore.com/api/v1/player/895650/image",
    "GUSTAVO MOSQUITO": "https://img.sofascore.com/api/v1/player/863283/image",
    "RENATO KAYZER": "https://img.sofascore.com/api/v1/player/814723/image",
    "JANDERSON": "https://img.sofascore.com/api/v1/player/1462989/image",
    "Fabri": "https://img.sofascore.com/api/v1/player/975351/image",
    "CARLOS EDUARDO": "https://img.sofascore.com/api/v1/player/795295/image",
    "FÁBIO": "https://img.sofascore.com/api/v1/player/1523441/image",
    "WELLINGTON RATO": "https://img.sofascore.com/api/v1/player/865356/image",
    "MATHEUZINHO": "https://img.sofascore.com/api/v1/player/795266/image",
    "PEPÊ": "https://img.sofascore.com/api/v1/player/946945/image",
    "OSVALDO": "https://img.sofascore.com/api/v1/player/90468/image",
    "BARALHAS": "https://img.sofascore.com/api/v1/player/922575/image",
    "LUCAS BRAGA": "https://img.sofascore.com/api/v1/player/934801/image",
    "WILLIAN OLIVEIRA": "https://img.sofascore.com/api/v1/player/295167/image",
    "ALISSON SANTOS": "https://img.sofascore.com/api/v1/player/1122835/image",
    "RONALD": "https://img.sofascore.com/api/v1/player/931521/image",
    "RICARDO RYLLER": "https://img.sofascore.com/api/v1/player/870943/image",
    "LÉO PEREIRA": "https://img.sofascore.com/api/v1/player/1008491/image",
    "THIAGUINHO": "https://img.sofascore.com/api/v1/player/933329/image",
    "BRUNO XAVIER": "https://img.sofascore.com/api/v1/player/901455/image",
    "PABLO SANTOS": "https://img.sofascore.com/api/v1/player/1841330/image",
    "DIONÍSIO": "https://img.sofascore.com/api/v1/player/1117584/image",
    "FELIPE CARDOSO": "https://img.sofascore.com/api/v1/player/1652635/image",
    "DIONISIO PEREIRA DE SOUZA NETO": "https://img.sofascore.com/api/v1/player/1836128/image",
    "LUCAS HALTER": "https://img.sofascore.com/api/v1/player/905450/image",
    "HUGO": "https://img.sofascore.com/api/v1/player/1018915/image",
    "CLAUDINHO": "https://img.sofascore.com/api/v1/player/992791/image",
    "NERIS": "https://img.sofascore.com/api/v1/player/840247/image",
    "CAMUTANGA": "https://img.sofascore.com/api/v1/player/931759/image",
    "BRUNO UVINI": "https://img.sofascore.com/api/v1/player/158267/image",
    "RAÚL CÁCERES": "https://img.sofascore.com/api/v1/player/122971/image",
    "ZÉ MARCOS": "https://img.sofascore.com/api/v1/player/901700/image",
    "EDU": "https://img.sofascore.com/api/v1/player/989715/image",
    "JAMERSON": "https://img.sofascore.com/api/v1/player/972373/image",
    "FELIPE VIEIRA": "https://img.sofascore.com/api/v1/player/892875/image",
    "LUCAS ARCANJO": "https://img.sofascore.com/api/v1/player/982558/image",
    "GABRIEL": "https://img.sofascore.com/api/v1/player/147467/image",
    "FINTELMAN": "https://img.sofascore.com/api/v1/player/1017274/image",
    "YURI SENA": "https://img.sofascore.com/api/v1/player/905464/image",
    "DAVI BARBOSA DA SILVA NOVAES": "https://img.sofascore.com/api/v1/player/1633877/image"
  }
  
  const imagensPorTime = {
    "CAM": cam,
    "BAH": bah,
    "BOT": bot,
    "RBB": rbb,
    "CEA": cea,
    "COR": cor,
    "CRU": cru,
    "FLA": fla,
    "FLU": flu,
    "FOR": fort,
    "GRE": gre,
    "INT": intz,
    "JUV": juv,
    "MIR": mir,
    "PAL": pal,
    "SAN": san,
    "SPT": spo,
    "SAO": sao,
    "VAS": vas,
    "VIT": vit
  };
  
  
  function normalizarNome(nome) {
    return nome
        .normalize("NFD") // separa acentos
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .toLowerCase(); // lowercase
  }
  
  const BASE_ESCUDO = "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/clubes_2025/escudos";
  const BASE_ORGS = "https://s.sde.globo.com/media/organizations";
  
  const overrideImages = {
    GRE: `${BASE_ORGS}/2018/03/12/gremio.svg`,
    BOT: `${BASE_ORGS}/2019/02/04/botafogo-svg.svg`,
    SAN: `${BASE_ORGS}/2018/03/12/santos.svg`,
    MIR: `${BASE_ORGS}/2024/08/20/mirassol-novo-svg-71690.svg`,
    CAM: `${BASE_ORGS}/2018/03/10/atletico-mg.svg`,
    RBB: `${BASE_ORGS}/2021/06/28/bragantino.svg`,
    PAL: `https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg`,
  };
  
  function replaceShieldIcons() {
    Object.entries(teamNames).forEach(([code, name]) => {
      const newSrc = overrideImages[code] || `${BASE_ORGS}/2018/03/11/${name}.svg`;
  
      document.querySelectorAll("img").forEach(img => {
        if (img.src === `${BASE_ESCUDO}/${code}/60x60.png`) {
          img.src = newSrc;
          img.style.width = "47.47px";
        } else if (img.src === `${BASE_ESCUDO}/${code}/45x45.png`) {
          img.src = newSrc;
        }
        // if (img.alt == "PAL"){
        //   if (img.className.includes("cartola-campinho-atleta-escudo")){
        //     img.style.backgroundColor = "white";
        //   }
        // } 
      });
      
    });
  }
  
  function replacePlayerPhotos() {
    document.querySelectorAll("img.cartola-atletas__foto").forEach(img => {
      const altNome = img.alt?.trim();
      const container = img.closest("li, .row, .algum-container");
      const escudo = container?.querySelector(".cartola-atletas__time img");
      const time = escudo?.alt?.trim();
  
      if (!altNome || !time || !imagensPorTime[time]) {
        return;
      }
  
      const nomeNormalizado = normalizarNome(altNome);
      const entrada = Object.entries(imagensPorTime[time]).find(
        ([nomeJogador]) => normalizarNome(nomeJogador) === nomeNormalizado
      );
  
      if (entrada) {
        const [nomeEncontrado, novaFoto] = entrada;
        img.src = novaFoto;
        img.removeAttribute("ng-src");
      }
    });
  }
  
  function replaceCampinhoBackgrounds() {
    document.querySelectorAll(".cartola-campinho-atleta-foto > div[ng-style]").forEach(div => {
      const altNome = div.getAttribute("alt")?.trim() || div.getAttribute("title")?.trim();
      if (!altNome) return;
  
      const container = div.closest('.cartola-campinho-atleta-container');
      const escudo = container?.querySelector(".cartola-campinho-atleta-escudo");
      const siglaTime = escudo?.getAttribute("alt")?.trim();
  
      if (!siglaTime || !imagensPorTime[siglaTime]) return;
  
      const nomeNormalizado = normalizarNome(altNome);
      const entrada = Object.entries(imagensPorTime[siglaTime]).find(
        ([nomeJogador]) =>
          normalizarNome(nomeJogador) === nomeNormalizado
      );
  
      if (entrada) {
        const [, novaFoto] = entrada;
        div.style.backgroundImage = `url(${novaFoto})`;
      }
    });
  }

  function replaceReservas(){
    document.querySelectorAll(".cartola-campinho-atleta-foto.cartola-campinho-atleta-foto--reserva[ng-style]").forEach(div => {
      const altNome = div.getAttribute("alt")?.trim() || div.getAttribute("title")?.trim();
      if (!altNome) return;
  
      const container = div.closest('.cartola-campinho-atleta-container');
      const escudo = container?.querySelector(".cartola-campinho-atleta-escudo");
      const siglaTime = escudo?.getAttribute("alt")?.trim();
  
      if (!siglaTime || !imagensPorTime[siglaTime]) return;
  
      const nomeNormalizado = normalizarNome(altNome);
      const entrada = Object.entries(imagensPorTime[siglaTime]).find(
        ([nomeJogador]) =>
          normalizarNome(nomeJogador) === nomeNormalizado
      );
  
      if (entrada) {
        const [, novaFoto] = entrada;
        div.style.backgroundImage = `url(${novaFoto})`;
      }
    });
  }
  
  function replaceImages() {
    replaceShieldIcons();
    replacePlayerPhotos();
    replaceCampinhoBackgrounds();
  }
  
  let isRunning = false;
  let isRunningReservas = false;

  setInterval(() => {
    if (isRunning) return;
    isRunning = true;
    try {
      replaceImages();
    } finally {
      isRunning = false;
    }
  }, 90);

  setInterval(() => {
    if (isRunningReservas) return;
    isRunningReservas = true;
    try {
      replaceReservas();
    } finally {
      isRunningReservas = false;
    }
  }, 90);
