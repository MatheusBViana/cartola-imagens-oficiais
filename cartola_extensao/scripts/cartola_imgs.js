  const teamNames = {
      "CAM": "atletico-mg", "BAH": "bahia", "BOT": "botafogo", "RBB": "bragantino", "CEA": "ceara", 
      "COR": "corinthians", "CRU": "cruzeiro", "FLA": "flamengo", "FLU": "fluminense", "FOR": "fortaleza", 
      "GRE": "gremio", "INT": "internacional", "JUV": "juventude", "MIR": "mirassol", "PAL": "palmeiras", 
      "SAN": "santos", "SPT": "sport", "SAO": "sao-paulo", "VAS": "vasco", "VIT": "vitoria"
    };
    
    
const vas = {
  "Fábio Carille": "https://i.imgur.com/E1z4HTT.png",
  "VEGETTI": "https://i.imgur.com/5leDQc2.png",
  "RAYAN": "https://i.imgur.com/szq4ZM2.png",
  "ALEX TEIXEIRA": "https://i.imgur.com/G9yMzyu.png",
  "NUNO MOREIRA": "https://i.imgur.com/zB1rmDS.jpeg",
  "GABRIEL SOUZA": "https://i.imgur.com/rw2rKwh.png",
  "BRUNO LOPES": "https://i.imgur.com/DQoVIUU.png",
  "GABRIEL DA SILVA SOUZA": "https://i.imgur.com/VtqWEUJ.png",
  "PHILIPPE COUTINHO": "https://i.imgur.com/4Ia15w6.png",
  "PAYET": "https://i.imgur.com/om6PIr7.png",
  "ADSON": "https://i.imgur.com/RAYKuPM.png",
  "SFORZA": "https://i.imgur.com/quuGOZd.png",
  "TCHÊ TCHÊ": "https://i.imgur.com/kGz2uK2.png",
  "DAVID": "https://i.imgur.com/xcn2yHo.png",
  "PAULINHO": "https://i.imgur.com/lbNfCdE.png",
  "HUGO MOURA": "https://i.imgur.com/3gDDLZ2.png",
  "JAIR": "https://i.imgur.com/gb9tWHu.png",
  "MATEUS CARVALHO": "https://i.imgur.com/tPFwVro.png",
  "GUILHERME ESTRELLA": "https://i.imgur.com/ZQr2ww0.png",
  "JEAN DAVID": "https://i.imgur.com/4i8GIAW.png",
  "GARRÉ": "https://i.imgur.com/azeA51Y.png",
  "SOUZA": "https://i.imgur.com/sJVFWNZ.jpeg",
  "LOIDE AUGUSTO": "https://i.imgur.com/HatTKBP.png",
  "LUKAS ZUCCARELLO": "https://i.imgur.com/UtjSCds.png",
  "LUCAS OLIVEIRA": "https://i.imgur.com/DZrZd1S.png",
  "PATRICK DE LUCCA": "https://i.imgur.com/S2Y4YjC.png",
    "MAXSUELL": "https://i.imgur.com/PHs7aoL.png",
    "LUCAS PITON": "https://i.imgur.com/IXsNTSI.png",
    "JOÃO VICTOR": "https://i.imgur.com/UQvFCn6.png",
    "PUMA RODRÍGUEZ": "https://i.imgur.com/E0yICMg.png",
    "PAULO HENRIQUE": "https://i.imgur.com/Eub5Tw6.png",
    "MAURICIO LEMOS": "https://i.imgur.com/1qpxuyg.png",
    "VICTOR LUIS": "https://i.imgur.com/ouKIQ3j.png",
    "LUCAS FREITAS": "https://i.imgur.com/WkLMO0t.png",
    "MANUEL CAPASSO": "https://i.imgur.com/moSvqU7.jpeg",
    "RIQUELME": "https://i.imgur.com/u7DGkqT.png",
    "LYNCON": "https://i.imgur.com/7apPHLI.png",
    "LUIZ GUSTAVO": "https://i.imgur.com/ASCXM4D.png",
    "WALACE FERNANDES": "https://i.imgur.com/ENo258s.png",
    "LÉO JARDIM": "https://i.imgur.com/p3Xh6yH.png",
    "DANIEL FUZATO": "https://i.imgur.com/v4R7lOS.png",
    "PABLO": "https://i.imgur.com/jWg4BNE.png",
    "ALEXANDER": "https://i.imgur.com/C8z4Q8n.png"
}

const cor = {
  "Ramón Díaz": "https://i.imgur.com/OnsCTbg.png",
  "MEMPHIS DEPAY": "https://i.imgur.com/ak8hvOI.png",
  "YURI ALBERTO": "https://i.imgur.com/9eyXy3Y.png",
  "ÁNGEL ROMERO": "https://i.imgur.com/Q3zXzzr.png",
  "TALLES MAGNO": "https://i.imgur.com/qpKPB2g.png",
  "GIOVANE": "https://i.imgur.com/mjvr7CZ.png",
  "HÉCTOR HERNÁNDEZ": "https://i.imgur.com/rm6jgty.png",
  "KAYKE FERRARI": "https://i.imgur.com/hhTt9GX.png",
  "GARRO": "https://i.imgur.com/HX2hpXf.png",
  "CARRILLO": "https://i.imgur.com/f5yzHDk.png",
  "IGOR CORONADO": "https://i.imgur.com/2PR1Scu.png",
  "BRENO BIDON": "https://i.imgur.com/RA2OCKJ.png",
  "JOSÉ MARTÍNEZ": "https://i.imgur.com/DLYaFjv.png",
  "RANIELE": "https://i.imgur.com/MUxkEGd.png",
  "MAYCON": "https://i.imgur.com/icc032R.png",
  "ALEX SANTANA": "https://i.imgur.com/7Fzi5gW.png",
  "CHARLES": "https://i.imgur.com/NksDajQ.png",
  "RYAN": "https://i.imgur.com/A76pdr0.png",
  "FÉLIX TORRES": "https://i.imgur.com/GgOQsG9.png",
  "MATHEUZINHO": "https://i.imgur.com/ma1MROh.png",
  "ANDRÉ RAMALHO": "https://i.imgur.com/9bRWHtz.png",
  "MATHEUS BIDU": "https://i.imgur.com/PmtfFAe.png",
  "GUSTAVO HENRIQUE": "https://i.imgur.com/kbYUjhq.png",
  "CACÁ": "https://i.imgur.com/Br5D9Gc.png",
  "PALACIOS": "https://i.imgur.com/WE5unCb.png",
  "HUGO": "https://i.imgur.com/3mZA1Jg.png",
  "ANGILERI": "https://i.imgur.com/sYJhKaY.png",
  "LÉO MANA": "https://i.imgur.com/Yy0bEuE.png",
  "JOÃO PEDRO": "https://i.imgur.com/RXVenHI.png",
  "RENATO SANTOS": "https://i.imgur.com/JRnfbZW.jpeg",
  "HUGO SOUZA": "https://i.imgur.com/HZZVF9I.png",
  "MATHEUS DONELLI": "https://i.imgur.com/WvAvBXD.png",
  "FELIPE LONGO": "https://i.imgur.com/vb0pRar.jpeg",
  "KAUÊ": "https://i.imgur.com/jOAcFeR.jpeg"
}
  const sao = {
    "Luis Zubeldía": "https://i.imgur.com/mDzYFIj.jpeg",
    "CALLERI": "https://i.imgur.com/kCIHIrN.png",
    "RYAN FRANCISCO": "https://i.imgur.com/jah3js1.png",
    "ANDRÉ SILVA": "https://i.imgur.com/HjhjdHF.png",
    "HENRIQUE CARMO": "https://i.imgur.com/g4Osu2m.png",
    "MATHEUS ALVES": "https://i.imgur.com/bJXoBE3.png",
    "LUCAS MOURA": "https://i.imgur.com/JW04D2G.png",
    "OSCAR": "https://i.imgur.com/W6WKM9W.png",
    "LUCIANO": "https://i.imgur.com/e2dEFIm.png",
    "FERREIRA": "https://i.imgur.com/YEcMJNX.png",
    "PABLO MAIA": "https://i.imgur.com/KEKIcNH.png",
    "ALISSON": "https://i.imgur.com/AssdG71.png",
    "BOBADILLA": "https://i.imgur.com/AJXS9El.png",
    "LUIZ GUSTAVO": "https://i.imgur.com/rtaMXdG.png",
    "MARCOS ANTÔNIO": "https://i.imgur.com/mHsD3aP.png",
    "RODRIGUINHO": "https://i.imgur.com/yOWXkr2.png",
    "LIZIERO": "https://i.imgur.com/HKGn2JG.png",
    "Luan Vinícius": "https://i.imgur.com/AjyzDvS.png",
    "FELIPE NEGRUCCI": "https://i.imgur.com/FGjO9dx.jpeg",
    "LUCAS FERREIRA": "https://i.imgur.com/NIQel7Y.jpeg",
    "PEDRO VILHENA": "https://i.imgur.com/P2uCFbd.jpeg",
    "WENDELL": "https://i.imgur.com/lpLSneN.png",
    "ARBOLEDA": "https://i.imgur.com/czaixPu.png",
    "CÉDRIC SOARES": "https://i.imgur.com/PAw1wOi.png",
    "FERRARESI": "https://i.imgur.com/Lq3Ha9t.png",
    "ALAN FRANCO": "https://i.imgur.com/8hRQ7i2.png",
    "IGOR VINÍCIUS": "https://i.imgur.com/CYhV1rl.png",
    "PATRYCK": "https://i.imgur.com/uBj6Ljz.png",
    "ENZO DÍAZ": "https://i.imgur.com/i5kLVeh.png",
    "SABINO": "https://i.imgur.com/GWKLJ6R.png",
    "RUAN": "https://i.imgur.com/JVeWtkG.png",
    "IGÃO": "https://i.imgur.com/u7l81M4.jpeg",
    "PEDRO ANDRADE DROZINA": "https://i.imgur.com/lmTl08o.jpeg",
    "RAFAEL": "https://i.imgur.com/h2QXR5w.png",
    "JANDREI": "https://i.imgur.com/1rwflhC.png",
    "YOUNG": "https://i.imgur.com/8ZlIeLe.png",
    "LEANDRO": "https://i.imgur.com/c8nOAE0.jpeg"
}

const fla = {
  "Filipe LuíS": "https://i.imgur.com/QmeoPHw.jpeg",
  "PEDRO": "https://i.imgur.com/IwOaQHq.png",
  "JUNINHO": "https://i.imgur.com/lmx81uB.jpeg",
  "SHOLA": "https://i.imgur.com/RLv3nzf.png",
  "WALLACE YAN": "https://i.imgur.com/vzUMOR9.png",
  "ARRASCAETA": "https://i.imgur.com/iGquMES.png",
  "BRUNO HENRIQUE": "https://i.imgur.com/73hhNsu.png",
  "GERSON": "https://i.imgur.com/Fguy4Vy.png",
  "DE LA CRUZ": "https://i.imgur.com/L7b77sp.png",
  "EVERTON": "https://i.imgur.com/5eD4AST.png",
  "MICHAEL": "https://i.imgur.com/pHuZuTZ.png",
  "PLATA": "https://i.imgur.com/lmd6cBT.png",
  "ERICK PULGAR": "https://i.imgur.com/lWciRl5.png",
  "LUIZ ARAÚJO": "https://i.imgur.com/Kr4bFiM.png",
  "LORRAN": "https://i.imgur.com/c29AHPH.jpeg",
  "MATHEUS GONÇALVES": "https://i.imgur.com/4ZCgLoa.png",
  "ALLAN": "https://i.imgur.com/trrGmdO.png",
  "EVERTTON ARAUJO": "https://i.imgur.com/AbpDjh7.png",
  "GUILHERME": "https://i.imgur.com/66Bq8X5.png",
  "PABLO LUCIO": "https://i.imgur.com/BH1OQoP.png",
  "CAIO GARCIA": "https://i.imgur.com/ZkYzBmi.jpeg",
  "LUIZ FELIPE MARIANO": "https://i.imgur.com/kFlsFmm.png",
  "JOSHUA": "https://i.imgur.com/Kflc5lb.jpeg",
  "DANILO": "https://i.imgur.com/9KuQOcY.png",
  "WESLEY": "https://i.imgur.com/z88hsyW.png",
  "ALEX SANDRO": "https://i.imgur.com/kaTaqdz.png",
  "LÉO ORTIZ": "https://i.imgur.com/0xf6656.png",
  "AYRTON LUCAS": "https://i.imgur.com/UVJNWAv.png",
  "VIÑA": "https://i.imgur.com/crhQjwI.png",
  "LÉO PEREIRA": "https://i.imgur.com/tx7A765.png",
  "VARELA": "https://i.imgur.com/O5pN0WO.png",
  "CLEITON": "https://i.imgur.com/FJrIuc5.png",
  "PABLO": "https://i.imgur.com/C2Jxmi3.png",
  "IAGO SILVA": "https://i.imgur.com/nU8xzCP.png",
  "DANIEL SALES": "https://i.imgur.com/iILkX1q.png",
  "ZÉ WELINTON": "https://i.imgur.com/bGs0pUV.jpeg",
  "JOÃO VICTOR DE SOUZA CUNHA": "https://i.imgur.com/q3XcU8d.png",
  "ROSSI": "https://i.imgur.com/MvkU4Yv.png",
  "MATHEUS CUNHA": "https://i.imgur.com/Et1LCXi.jpeg",
  "DYOGO ALVES": "https://i.imgur.com/GACeC0i.jpeg"
}

const cru = {
  "Fernando Seabra": "https://cruzeiropedia.org/images/thumb/a/ac/Fernando.Seabra.png/200px-Fernando.Seabra.png",
  "Leonardo Jardim": "https://i.imgur.com/pcPnp65.jpeg",
  "GABRIEL": "https://i.imgur.com/KZMG2hg.jpeg",
  "MATHEUS PEREIRA": "https://i.imgur.com/oRqEfuc.jpeg",
  "DUDU": "https://i.imgur.com/bK07F1K.jpeg",
  "KAIO JORGE": "https://i.imgur.com/wgpwPRr.jpeg",
  "BOLASIE": "https://i.imgur.com/D2ppWqh.jpeg",
  "DINENNO": "https://i.imgur.com/OtNUeOp.jpeg",
  "LAUTARO DÍAZ": "https://i.imgur.com/kFpyX23.jpeg",
  "MARQUINHOS": "https://i.imgur.com/Zs4wFiq.jpeg",
  "MATHEUS HENRIQUE": "https://i.imgur.com/p4I1inF.jpeg",
  "EDUARDO": "https://i.imgur.com/onUDgMv.jpeg",
  "LUCAS ROMERO": "https://i.imgur.com/pY6SwB8.jpeg",
  "WALACE": "https://i.imgur.com/VNVgVbU.jpeg",
  "LUCAS SILVA": "https://i.imgur.com/YsIJXZX.jpeg",
  "WANDERSON": "https://i.imgur.com/G42kPvQ.jpeg",
  "CHRISTIAN": "https://i.imgur.com/x9b5omT.jpeg",
  "JAPA": "https://i.imgur.com/v9vLHxj.jpeg",
  "RODRIGUINHO": "https://i.imgur.com/RphIdBW.jpeg",
  "FABRÍCIO BRUNO": "https://i.imgur.com/mwffM1B.jpeg",
  "FAGNER": "https://i.imgur.com/X5fOpL8.jpeg",
  "WILLIAM": "https://i.imgur.com/TsLL8tE.jpeg",
  "JOÃO MARCELO": "https://i.imgur.com/kphkwPG.jpeg",
  "KAIKI BRUNO": "https://i.imgur.com/QAch5D3.jpeg",
  "VILLALBA": "https://i.imgur.com/7rgWRfb.jpeg",
  "JONATHAN JESUS": "https://i.imgur.com/qCpobRr.jpeg",
  "GAMARRA": "https://i.imgur.com/l2kq5Af.jpeg",
  "JANDERSON": "https://i.imgur.com/z0COuIW.jpeg",
  "CÁSSIO": "https://i.imgur.com/NFuEEzC.jpeg",
  "LÉO ARAGÃO": "https://i.imgur.com/7CT4DZx.jpeg",
  "OTÁVIO": "https://i.imgur.com/8ZN7zEU.jpeg"
}

const pal = {
  "ABEL FERREIRA": "https://i.imgur.com/wI5bZgz.jpeg",
  "VITOR ROQUE": "https://i.imgur.com/fZfQpUP.jpeg",
  "PAULINHO": "https://i.imgur.com/AAo6O3q.jpeg",
  "Flaco López": "https://i.imgur.com/hIsXngR.jpeg",
  "LUIGHI": "https://i.imgur.com/1P0LCTh.jpeg",
  "BRUNO RODRIGUES": "https://i.imgur.com/QOjk1nX.jpeg",
  "THALYS": "https://i.imgur.com/n55PpCJ.jpeg",
  "ESTÊVÃO": "https://i.imgur.com/rDk49Bs.jpeg",
  "RICHARD RÍOS": "https://i.imgur.com/q81d89T.jpeg",
  "RAPHAEL VEIGA": "https://i.imgur.com/bOHZEHr.jpeg",
  "FELIPE ANDERSON": "https://i.imgur.com/l9Jopo3.jpeg",
  "FACUNDO TORRES": "https://i.imgur.com/AwLo25j.jpeg",
  "MAURÍCIO": "https://i.imgur.com/NCh9feK.jpeg",
  "ANÍBAL MORENO": "https://i.imgur.com/HemIl8H.jpeg",
  "EMILIANO MARTÍNEZ": "https://i.imgur.com/xxBGfZg.jpeg",
  "LUCAS EVANGELISTA": "https://i.imgur.com/zdh1YbC.jpeg",
  "FIGUEIREDO": "https://i.imgur.com/gW05jVf.jpeg",
  "ALLAN": "https://i.imgur.com/PgG2VMZ.jpeg",
  "RAFAEL BARBOSA COUTINHO": "https://i.imgur.com/fyVZUKv.jpeg",
  "GUSTAVO GÓMEZ": "https://i.imgur.com/Yry1V2V.jpeg",
  "PIQUEREZ": "https://i.imgur.com/AB891My.jpeg",
  "MURILO": "https://i.imgur.com/DMD5kHZ.jpeg",
  "GIAY": "https://i.imgur.com/7WlM8G2.jpeg",
  "MAYKE": "https://i.imgur.com/NJHEBmx.jpeg",
  "MARCOS ROCHA": "https://i.imgur.com/3VgIk28.jpeg",
  "VANDERLAN": "https://i.imgur.com/NPjCTf9.jpeg",
  "NAVES": "https://i.imgur.com/kz4G0Qj.jpeg",
  "BRUNO FUCHS": "https://i.imgur.com/yWCuXlv.jpeg",
  "BENEDETTI": "https://i.imgur.com/YCiRdpO.jpeg",
  "MICAEL": "https://i.imgur.com/oCcjSZ6.jpeg",
  "WEVERTON": "https://i.imgur.com/kmJct0R.jpeg",
  "MARCELO LOMBA": "https://i.imgur.com/Zy29K0h.jpeg",
  "MATEUS OLIVEIRA": "https://i.imgur.com/GC1G8xL.jpeg"
}

const cam = {
  "Cuca": "https://i.imgur.com/JaRjwtq.jpeg",
  "HULK": "https://i.imgur.com/Hv0uEz1.jpeg",
  "RONY": "https://i.imgur.com/OjmcOpK.jpeg",
  "JÚNIOR SANTOS": "https://i.imgur.com/9FLGyl5.jpeg",
  "CADU": "https://i.imgur.com/wO1ssMy.jpeg",
  "JOÃO MARCELO": "https://i.imgur.com/AsQKqPQ.jpeg",
  "GUSTAVO SCARPA": "https://i.imgur.com/ViLGOAC.jpeg",
  "GABRIEL MENINO": "https://i.imgur.com/ri9jvoC.jpeg",
  "FAUSTO VERA": "https://i.imgur.com/1OT6zJf.jpeg",
  "BERNARD": "https://i.imgur.com/rK7sjPS.jpeg",
  "ALAN FRANCO": "https://i.imgur.com/pdEngVO.jpeg",
  "CUELLO": "https://i.imgur.com/2Iqmbpm.jpeg",
  "RUBENS": "https://i.imgur.com/bTeW6SQ.jpeg",
  "IGOR GOMES": "https://i.imgur.com/E80f6PS.jpeg",
  "PALACIOS": "https://i.imgur.com/bQdcAPa.jpeg",
  "PATRICK": "https://i.imgur.com/p5BGHIv.jpeg",
  "GUILHERME ARANA": "https://i.imgur.com/uPKAUQd.jpeg",
  "CAIO PAULISTA": "https://i.imgur.com/3h4uojj.jpeg",
  "LYANCO": "https://i.imgur.com/MSMs7SH.jpeg",
  "JUNIOR ALONSO": "https://i.imgur.com/M3DmC0c.jpeg",
  "SARAVIA": "https://i.imgur.com/SHg2h8M.jpeg",
  "IVÁN ROMÁN": "https://i.imgur.com/Ha51QsC.jpeg",
  "NATANAEL": "https://i.imgur.com/CLq3ewC.jpeg",
  "IGOR RABELLO": "https://i.imgur.com/eBjlxRr.jpeg",
  "VITOR HUGO": "https://i.imgur.com/siNYeHr.jpeg",
  "RÔMULO": "https://i.imgur.com/NDoPRsw.jpeg",
  "EVERSON": "https://i.imgur.com/SLXNObT.jpeg",
  "GABRIEL DELFIM": "https://i.imgur.com/Qf7pzNb.jpeg",
  "GABRIEL ATILA": "https://i.imgur.com/OABSdqm.jpeg"
}

const intz = {
  "Roger Machado": "https://i.imgur.com/w8H9BUy.jpeg",
  "ENNER VALENCIA": "https://i.imgur.com/fEVxdZd.jpeg",
  "BORRÉ": "https://i.imgur.com/XvKbKpp.jpeg",
  "CARBONERO": "https://i.imgur.com/HZfj5O1.jpeg",
  "VITINHO": "https://i.imgur.com/TguVPIx.jpeg",
  "LUCCA": "https://i.imgur.com/LrNJIPs.jpeg",
  "RICARDO MATHIAS": "https://i.imgur.com/xCOdH64.jpeg",
  "LUCCA DRUMMOND": "https://i.imgur.com/AwtvYx5.jpeg",
  "ALAN PATRICK": "https://i.imgur.com/4a2FgXw.jpeg",
  "WESLEY": "https://i.imgur.com/ohev02U.jpeg",
  "ÓSCAR ROMERO": "https://i.imgur.com/O6wdgl0.jpeg",
  "THIAGO MAIA": "https://i.imgur.com/9lhpXte.jpeg",
  "FERNANDO": "https://i.imgur.com/otVT4p0.jpeg",
  "GABRIEL CARVALHO": "https://i.imgur.com/CokgJhJ.jpeg",
  "BRUNO TABATA": "https://i.imgur.com/IwncCWd.jpeg",
  "BRUNO HENRIQUE": "https://i.imgur.com/ykn9TAd.jpeg",
  "GUSTAVO PRADO": "https://i.imgur.com/NjljT9l.jpeg",
  "DIEGO ROSA": "https://i.imgur.com/QIkqRP1.jpeg",
  "RONALDO": "https://i.imgur.com/LRhKXOp.jpeg",
  "LUIS OTÁVIO": "https://i.imgur.com/KaxOCmf.jpeg",
  "ESTÊVÃO": "https://i.imgur.com/iaAeIKC.jpeg",
  "YAGO NOAL": "https://i.imgur.com/zcOynDJ.jpeg",
  "MARLON": "https://i.imgur.com/GR3W2Xd.jpeg",
  "BERNABEI": "https://i.imgur.com/7ouZhLd.jpeg",
  "VITÃO": "https://i.imgur.com/zJgI02F.jpeg",
  "MERCADO": "https://i.imgur.com/z0shABN.jpeg",
  "BRUNO GOMES": "https://i.imgur.com/Thomsbp.jpeg",
  "RAMON": "https://i.imgur.com/ixPfdRw.jpeg",
  "ROGEL": "https://i.imgur.com/UKB4eIF.jpeg",
  "KAIQUE ROCHA": "https://i.imgur.com/5uJHoqu.jpeg",
  "AGUIRRE": "https://i.imgur.com/ptari1v.jpeg",
  "NATHAN": "https://i.imgur.com/NB4N2nQ.jpeg",
  "JUNINHO": "https://i.imgur.com/aYczyXf.jpeg",
  "CLAYTON SAMPAIO": "https://i.imgur.com/bf0HCaF.jpeg",
  "PABLO": "https://i.imgur.com/OLta12Y.jpeg",
  "PABLO PEREIRA DA COSTA": "https://i.imgur.com/8XwjJoL.jpeg",
  "ROCHET": "https://i.imgur.com/esmHxUz.jpeg",
  "IVAN QUARESMA": "https://i.imgur.com/dpbXjEL.jpeg",
  "ANTHONI": "https://i.imgur.com/uswAzG3.jpeg",
  "KAUAN": "https://i.imgur.com/OPPQ20s.jpeg"
}

const cea = {
  "Léo Condé": "https://i.imgur.com/tQ6DYHu.jpeg",
  "PEDRO RAUL": "https://i.imgur.com/ktWFSyB.jpeg",
  "PEDRO HENRIQUE": "https://i.imgur.com/s6UJozY.jpeg",
  "LELÊ": "https://i.imgur.com/TKq0dEU.jpeg",
  "AYLON": "https://i.imgur.com/i6uLjdc.jpeg",
  "FERNANDINHO": "https://i.imgur.com/tJgicbE.jpeg",
  "JOÃO VICTOR": "https://i.imgur.com/r5G6cnH.jpeg",
  "GUILHERME LUIZ": "https://i.imgur.com/qZa77bG.jpeg",
  "RÔMULO": "https://i.imgur.com/J0sqDHO.jpeg",
  "MATHEUS ARAÚJO": "https://i.imgur.com/1PB7xki.jpeg",
  "FERNANDO SOBRAL": "https://i.imgur.com/zJURZAs.jpeg",
  "GALEANO": "https://i.imgur.com/dMFykYS.jpeg",
  "LUCAS MUGNI": "https://i.imgur.com/VuBfjwt.jpeg",
  "RECALDE": "https://i.imgur.com/TcDEXZx.jpeg",
  "GUILHERME CASTILHO": "https://i.imgur.com/oNpuPhM.jpeg",
  "LOURENÇO": "https://i.imgur.com/hTegn7d.jpeg",
  "RICHARDSON": "https://i.imgur.com/gvWfMlV.jpeg",
  "ALEJANDRO MARTÍNEZ": "https://i.imgur.com/R47M5MU.jpeg",
  "LUCAS LIMA": "https://i.imgur.com/QQ9jbxE.jpeg",
  "LÉO RAFAEL": "https://i.imgur.com/hamkmWT.jpeg",
  "RAFAEL RAMOS": "https://i.imgur.com/ImZPBby.jpeg",
  "MARCOS VICTOR": "https://i.imgur.com/fqHkVHZ.jpeg",
  "MATHEUS BAHIA": "https://i.imgur.com/MThJAqT.jpeg",
  "MARLLON": "https://i.imgur.com/ObC7dub.jpeg",
  "FABIANO SOUZA": "https://i.imgur.com/NvZuAMb.jpeg",
  "LUIZ OTÁVIO": "https://i.imgur.com/0WCPgD9.jpeg",
  "BRUNO TUBARÃO": "https://i.imgur.com/ow6SuUc.jpeg",
  "Diego": "https://i.imgur.com/EL1AZn6.jpeg",
  "NICOLAS": "https://i.imgur.com/ujS2s2T.jpeg",
  "WILLIAN MACHADO": "https://i.imgur.com/ZuFq1KF.jpeg",
  "RAMON MENEZES": "https://i.imgur.com/cGmzLac.jpeg",
  "ÉDER": "https://i.imgur.com/3j9SNIF.jpeg",
  "GABRIEL LACERDA": "https://i.imgur.com/d5b1ReF.jpeg",
  "KEILLER": "https://i.imgur.com/VfC2Mjo.jpeg",
  "RICHARD": "https://i.imgur.com/20IcxGh.jpeg",
  "FERNANDO MIGUEL": "https://i.imgur.com/rWmAn7a.jpeg",
  "BRUNO FERREIRA": "https://i.imgur.com/dhPQn7H.jpeg"
}

const fort = {
  "Juan Vojvoda": "https://i.imgur.com/HtYbS82.jpeg",
  "DEYVERSON": "https://i.imgur.com/fBfLOe7.jpeg",
  "LUCERO": "https://i.imgur.com/fBNxV1E.jpeg",
  "MOISÉS": "https://i.imgur.com/Km5zanY.jpeg",
  "BRUNO BRANCO": "https://i.imgur.com/9c9dv8D.jpeg",
  "KERVIN ANDRADE": "https://i.imgur.com/PHtCsWP.jpeg",
  "MARINHO": "https://i.imgur.com/8cOxMPg.jpeg",
  "YAGO PIKACHU": "https://i.imgur.com/rglQ6rU.jpeg",
  "BRENO LOPES": "https://i.imgur.com/jQrVKbN.jpeg",
  "POCHETTINO": "https://i.imgur.com/3bS0dv5.jpeg",
  "EMMANUEL MARTÍNEZ": "https://i.imgur.com/KyhXvHI.jpeg",
  "CALEBE": "https://i.imgur.com/EIfvkGf.jpeg",
  "POL FERNÁNDEZ": "https://i.imgur.com/rYt6nVS.jpeg",
  "BORRERO": "https://i.imgur.com/XgApvif.jpeg",
  "JOSÉ WELISON": "https://i.imgur.com/rHNH8LP.jpeg",
  "MATHEUS ROSSETTO": "https://i.imgur.com/BjJOJE3.jpeg",
  "LUCAS SASHA": "https://i.imgur.com/7o3IxC1.jpeg",
  "PEDRO AUGUSTO": "https://i.imgur.com/8L1czCU.jpeg",
  "ALLANZINHO": "https://i.imgur.com/jAG1B0R.jpeg",
  "DAVID LUIZ": "https://i.imgur.com/8gY7RNn.jpeg",
  "KUSCEVIC": "https://i.imgur.com/BgnbsMc.jpeg",
  "GASTÓN ÁVILA": "https://i.imgur.com/h1KVolU.jpeg",
  "DIOGO BARBOSA": "https://i.imgur.com/TT5U26h.jpeg",
  "FELIPE JONATAN": "https://i.imgur.com/Wn30yUJ.jpeg",
  "TINGA": "https://i.imgur.com/S8PNtkR.jpeg",
  "BRÍTEZ": "https://i.imgur.com/xxSDs1j.jpeg",
  "MANCUSO": "https://i.imgur.com/4dn5SYd.jpeg",
  "TITI": "https://i.imgur.com/RMGpboP.jpeg",
  "BRUNO PACHECO": "https://i.imgur.com/GPnnvvW.jpeg",
  "JOÃO RICARDO": "https://i.imgur.com/8S2sipN.jpeg",
  "BRENNO": "https://i.imgur.com/QrE8YS8.jpeg",
  "MAGRÃO": "https://i.imgur.com/wpdqAJq.jpeg"
}

const bot = {
  "Renato Paiva": "https://i.imgur.com/qxx77XV.jpeg",
  "IGOR JESUS": "https://i.imgur.com/Fp9Hxlg.jpeg",
  "ARTUR": "https://i.imgur.com/1lOFxUO.jpeg",
  "MATHEUS MARTINS": "https://i.imgur.com/d9mhjI5.jpeg",
  "MASTRIANI": "https://i.imgur.com/6ehKbIt.jpeg",
  "NATHAN FERNANDES": "https://i.imgur.com/If7bPs5.jpeg",
  "RWAN CRUZ": "https://i.imgur.com/uUacZFR.jpeg",
  "ELIAS MANOEL": "https://i.imgur.com/Xt74j2A.jpeg",
  "YARLEN": "https://i.imgur.com/sOnxfHP.jpeg",
  "KAYKE Queiroz": "https://i.imgur.com/btV5CLe.jpeg",
  "SAVARINO": "https://i.imgur.com/VVkbcVn.jpeg",
  "ALLAN": "https://i.imgur.com/zf00417.jpeg",
  "GREGORE": "https://i.imgur.com/TIxRBaQ.jpeg",
  "SANTIAGO RODRÍGUEZ": "https://i.imgur.com/NaVx5yi.jpeg",
  "JEFFINHO": "https://i.imgur.com/D7dXlzt.jpeg",
  "MARLON FREITAS": "https://i.imgur.com/XJDc7ko.jpeg",
  "PATRICK DE PAULA": "https://i.imgur.com/TxUA7nb.jpeg",
  "DANILO BARBOSA": "https://i.imgur.com/14iSI58.jpeg",
  "KAUÊ Rodrigues": "https://i.imgur.com/5aq2uNs.jpeg",
  "NEWTON": "https://i.imgur.com/unsSKwf.jpeg",
  "RAFAEL LOBATO": "https://i.imgur.com/IixmIkT.jpeg",
  "KAUAN LINDES": "https://i.imgur.com/TBFSSKe.jpeg",
  "ALEX TELLES": "https://i.imgur.com/3thTgsl.jpeg",
  "BASTOS": "https://i.imgur.com/9cDzwB1.jpeg",
  "ALEXANDER BARBOZA": "https://i.imgur.com/ddoc3Rl.jpeg",
  "CUIABANO": "https://i.imgur.com/ocY3ivL.jpeg",
  "VITINHO": "https://i.imgur.com/BMKfmj9.jpeg",
  "MATEO PONTE": "https://i.imgur.com/pWA5Zqy.jpeg",
  "JAIR": "https://i.imgur.com/qfsQLrs.jpeg",
  "MARÇAL": "https://i.imgur.com/2lLnrVl.jpeg",
  "DAVID RICARDO": "https://i.imgur.com/l9JsAhs.jpeg",
  "PHILIPE SAMPAIO": "https://i.imgur.com/s63Ahas.jpeg",
  "SERAFIM": "https://i.imgur.com/wBJakfA.jpeg",
  "JOHN": "https://i.imgur.com/PCDVzeM.jpeg",
  "LÉO LINCK": "https://i.imgur.com/O0Qqw2G.jpeg",
  "RAÚL": "https://i.imgur.com/86JimH7.jpeg"
}

const juv = {
  "Fábio Matias": "https://i.imgur.com/YG1zKUS.jpeg",
  "GILBERTO": "https://i.imgur.com/e7CA5th.jpeg",
  "MATHEUS BABI": "https://i.imgur.com/qkU7VZ9.jpeg",
  "RONIE CARRILLO": "https://i.imgur.com/URn5WS1.jpeg",
  "GABRIEL TALIARI": "https://i.imgur.com/wtr5Q5w.jpeg",
  "VITOR PERNAMBUCO": "https://i.imgur.com/ee3CdGs.jpeg",
  "EMERSON GALEGO": "https://i.imgur.com/pttkQPL.jpeg",
  "DANIEL NUNES": "https://i.imgur.com/9LiZVDs.jpeg",
  "NENÊ": "https://i.imgur.com/FD4o16o.jpeg",
  "PETTERSON": "https://i.imgur.com/xcHnhzA.jpeg",
  "JEAN CARLOS": "https://i.imgur.com/OQuKlc4.jpeg",
  "JÁDSON": "https://i.imgur.com/qlAjGBL.jpeg",
  "BATALLA": "https://i.imgur.com/dkCbvBb.jpeg",
  "ÊNIO": "https://i.imgur.com/AmZfo2q.jpeg",
  "LUIS MANDACA": "https://i.imgur.com/9mWRj9C.jpeg",
  "GIOVANNY": "https://i.imgur.com/lsxC79K.jpeg",
  "CAIQUE": "https://i.imgur.com/UxL34ZN.jpeg",
  "GIRALDO": "https://i.imgur.com/lZELCwy.jpeg",
  "GARCEZ": "https://i.imgur.com/dSJpA9O.jpeg",
  "REGINALDO": "https://i.imgur.com/WIPAeUD.jpeg",
  "RAFINHA": "https://i.imgur.com/s60gFHK.jpeg",
  "DAVI GOES": "https://i.imgur.com/k9Nx8ab.jpeg",
  "KELVI": "https://i.imgur.com/KYpsc1r.jpeg",
  "PEIXOTO": "https://i.imgur.com/V2tVujV.jpeg",
  "WILKER ÁNGEL": "https://i.imgur.com/lNDObN5.jpeg",
  "NATÃ": "https://i.imgur.com/G9N1dIv.jpeg",
  "ALAN RUSCHEL": "https://i.imgur.com/mILHYNT.jpeg",
  "ABNER": "https://i.imgur.com/klfFOAd.jpeg",
  "FELIPINHO": "https://i.imgur.com/IhlQt2T.jpeg",
  "ADRIANO MARTINS": "https://i.imgur.com/NDW2QlQ.jpeg",
  "Ewerthon": "https://i.imgur.com/28ai2CJ.jpeg",
  "KAWAN": "https://i.imgur.com/uBh2GRF.jpeg",
  "CIPRIANO": "https://i.imgur.com/Gw3ric7.jpeg",
  "MARCOS PAULO": "https://i.imgur.com/bP8LS52.jpeg",
  "RODRIGO SAM": "https://i.imgur.com/dEvSG7o.jpeg",
  "GABRIEL SOUZA": "https://i.imgur.com/rgAarJ5.jpeg",
  "GUSTAVO": "https://i.imgur.com/RMeP8BM.jpeg",
  "MARCÃO": "https://i.imgur.com/Y4cg7mA.jpeg",
  "MATEUS CLAUS": "https://i.imgur.com/NY6Bh80.jpeg",
  "RUAN CARNEIRO": "https://i.imgur.com/nDyvtCq.jpeg",
  "EUDES RUAN DE SOUSA CARNEIRO": "https://i.imgur.com/Aaxow5H.jpeg"
}

const flu = {
  "Renato Gaúcho": "https://i.imgur.com/99O2OTV.jpeg",
  "CANO": "https://i.imgur.com/zKXOSsa.jpeg",
  "EVERALDO": "https://i.imgur.com/Mhatjl8.jpeg",
  "ARIAS": "https://i.imgur.com/WDf3d3d.jpeg",
  "GANSO": "https://i.imgur.com/giWlZwi.jpeg",
  "RENATO AUGUSTO": "https://i.imgur.com/UPujrxO.jpeg",
  "CANOBBIO": "https://i.imgur.com/W8iP247.jpeg",
  "SERNA": "https://i.imgur.com/0r8Rb5Q.jpeg",
  "MARTINELLI": "https://i.imgur.com/qG7mLYu.jpeg",
  "KENO": "https://i.imgur.com/CWCK6D9.jpeg",
  "BERNAL": "https://i.imgur.com/bqsMaDB.jpeg",
  "OTÁVIO": "https://i.imgur.com/794g0dy.jpeg",
  "LIMA": "https://i.imgur.com/3mcBMLz.jpeg",
  "HÉRCULES": "https://i.imgur.com/j8VtcjL.jpeg",
  "LAVEGA": "https://i.imgur.com/v8qhX5k.jpeg",
  "NONATO": "https://i.imgur.com/eItVqEJ.jpeg",
  "LEZCANO": "https://i.imgur.com/HyqLGAi.jpeg",
  "RIQUELME FELIPE": "https://i.imgur.com/eScq4LC.jpeg",
  "PAULO BAYA": "https://i.imgur.com/9tURlq4.jpeg",
  "ISAQUE": "https://i.imgur.com/yh2I1tC.jpeg",
  "VITÃO": "https://i.imgur.com/NWBBJpd.jpeg",
  "GUSTAVO APIS": "https://i.imgur.com/2RzO5hk.jpeg",
  "THIAGO SILVA": "https://i.imgur.com/xqTIy4q.jpeg",
  "RENÊ": "https://i.imgur.com/nXGuC0T.jpeg",
  "GUGA": "https://i.imgur.com/WxBNGyn.jpeg",
  "SAMUEL XAVIER": "https://i.imgur.com/AwXTBo2.jpeg",
  "IGNÁCIO": "https://i.imgur.com/1WwBaHR.jpeg",
  "GABRIEL FUENTES": "https://i.imgur.com/rVHdnS6.jpeg",
  "THIAGO SANTOS": "https://i.imgur.com/nnVMU9U.jpeg",
  "MANOEL": "https://i.imgur.com/3fcQsFe.jpeg",
  "FREYTES": "https://i.imgur.com/stpmNNy.jpeg",
  "FÁBIO": "https://i.imgur.com/lYKS5KV.jpeg",
  "MARCELO PITALUGA": "https://i.imgur.com/ozZbP24.jpeg",
  "VITOR EUDES": "https://i.imgur.com/5JDeZBX.jpeg",
  "GUSTAVO RAMALHO": "https://i.imgur.com/X6XtFkD.jpeg"
}

const gre = {
  "MARLON": "https://i.imgur.com/5p1VSe7.jpeg",
  "Gustavo Quinteros": "https://i.imgur.com/DkiiLdd.jpeg",
  "BRAITHWAITE": "https://i.imgur.com/WPvg86P.jpeg",
  "AREZO": "https://i.imgur.com/giLajBM.jpeg",
  "CRISTIAN OLIVERA": "https://i.imgur.com/KNr0qkG.jpeg",
  "ANDRÉ": "https://i.imgur.com/ic5rBGK.jpeg",
  "ALYSSON": "https://i.imgur.com/6fphlzU.jpeg",
  "VILLASANTI": "https://i.imgur.com/FpWdGIb.jpeg",
  "PAVÓN": "https://i.imgur.com/avP0URA.jpeg",
  "ARAVENA": "https://i.imgur.com/9tLoweV.jpeg",
  "CRISTALDO": "https://i.imgur.com/taREVuG.jpeg",
  "MONSALVE": "https://i.imgur.com/hDJji9d.jpeg",
  "GABRIEL MEC": "https://i.imgur.com/BLwNrwN.jpeg",
  "CUÉLLAR": "https://i.imgur.com/DcDtPx5.jpeg",
  "AMUZU": "https://i.imgur.com/RqeRjEy.jpeg",
  "EDENILSON": "https://i.imgur.com/Qfr1md5.jpeg",
  "RONALD": "https://i.imgur.com/owu9vmW.jpeg",
  "DODI": "https://i.imgur.com/yJbX5um.jpeg",
  "NATHAN": "https://i.imgur.com/33MXzWU.jpeg",
  "CAMILO": "https://i.imgur.com/hAxrKTg.jpeg",
  "KANNEMANN": "https://i.imgur.com/KyVSrMS.jpeg",
  "WAGNER LEONARDO": "https://i.imgur.com/XKqerRf.jpeg",
  "IGOR SERROTE": "https://i.imgur.com/bRC7IqC.jpeg",
  "JEMERSON": "https://i.imgur.com/wvpzKAL.jpeg",
  "JOÃO PEDRO": "https://i.imgur.com/kGr8kt7.jpeg",
  "RODRIGO ELY": "https://i.imgur.com/yYqk7EJ.jpeg",
  "GUSTAVO MARTINS": "https://i.imgur.com/TWaZG76.jpeg",
  "LUCAS ESTEVES": "https://i.imgur.com/8ftDPV5.jpeg",
  "LUAN CÂNDIDO": "https://i.imgur.com/htrDelu.jpeg",
  "JOÃO LUCAS": "https://i.imgur.com/nT5NCa7.jpeg",
  "MAYK": "https://i.imgur.com/6BoGhw1.jpeg",
  "VIERY": "https://i.imgur.com/zvLDXOV.jpeg",
  "TIAGO VOLPI": "https://i.imgur.com/FTbJzsT.jpeg",
  "GABRIEL GRANDO": "https://i.imgur.com/PVUjtsu.jpeg",
  "JORGE MEURER": "https://i.imgur.com/LdvlNh8.jpeg"
}

const bah = {
  "Rogério Ceni": "https://i.imgur.com/m3aLZ0Q.jpeg",
  "Lucho Rodríguez": "https://i.imgur.com/9zeX9lA.jpeg",
  "WILLIAN JOSÉ": "https://i.imgur.com/Bz33KaQ.jpeg",
  "ADEMIR": "https://i.imgur.com/ltHFt7v.jpeg",
  "TIAGO": "https://i.imgur.com/O7T6DUB.jpeg",
  "TIAGO SOUZA": "https://i.imgur.com/h4DfrbQ.jpeg",
  "EVERTON RIBEIRO": "https://i.imgur.com/lcrY4Wq.jpeg",
  "ERICK PULGA": "https://i.imgur.com/wsQO8ay.jpeg",
  "CAULY": "https://i.imgur.com/bBd2Q0j.jpeg",
  "KAYKY": "https://i.imgur.com/t7Pg8Nn.jpeg",
  "RODRIGO NESTOR": "https://i.imgur.com/HDeqNna.jpeg",
  "JEAN LUCAS": "https://i.imgur.com/GMFyc4x.jpeg",
  "MICHEL ARAÚJO": "https://i.imgur.com/fIn6NCz.jpeg",
  "CAIO ALEXANDRE": "https://i.imgur.com/y1dLVdb.jpeg",
  "ERICK": "https://i.imgur.com/QFiBQnJ.jpeg",
  "ACEVEDO": "https://i.imgur.com/01y1IlX.jpeg",
  "REZENDE": "https://i.imgur.com/ck2buuf.jpeg",
  "LÉO CITTADINI": "https://i.imgur.com/9Du1sOv.jpeg",
  "SANTIAGO ARIAS": "https://i.imgur.com/OH6gyHp.jpeg",
  "LUCIANO JUBA": "https://i.imgur.com/08qSQE3.jpeg",
  "GILBERTO": "https://i.imgur.com/g8Dlt5F.jpeg",
  "GABRIEL XAVIER": "https://i.imgur.com/CssWuEW.jpeg",
  "SANTIAGO MINGO": "https://i.imgur.com/TjMeaIK.jpeg",
  "KANU": "https://i.imgur.com/n4tvT5T.jpeg",
  "IAGO": "https://i.imgur.com/12eRTGm.jpeg",
  "DAVID DUARTE": "https://i.imgur.com/4IHoSQC.jpeg",
  "ANDRÉ DHOMINIQUE": "https://i.imgur.com/KEXeDlO.jpeg",
  "MARCOS FELIPE": "https://i.imgur.com/sQmIh9L.jpeg",
  "DANILO FERNANDES": "https://i.imgur.com/QkNqEQe.jpeg",
  "RONALDO": "https://i.imgur.com/hXi60aD.jpeg",
  "GABRIEL SOUZA": "https://i.imgur.com/uR1kbDe.jpeg"
}

const rbb = {
  "ISIDRO PITTA": "https://i.imgur.com/4wJhEEu.jpeg",
  "EDUARDO SASHA": "https://i.imgur.com/snA4g4J.jpeg",
  "THIAGO BORBAS": "https://i.imgur.com/8EswSS9.jpeg",
  "FERNANDO": "https://i.imgur.com/US2ViTu.jpeg",
  "HENRY MOSQUERA": "https://i.imgur.com/H07Ao05.jpeg",
  "VINICINHO": "https://i.imgur.com/RaP4YID.jpeg",
  "KAWÊ": "https://i.imgur.com/exbk57H.jpeg",
  "FABINHO": "https://i.imgur.com/AmbeRhn.jpeg",
  "JHON JHON": "https://i.imgur.com/WbxdXfd.jpeg",
  "MATHEUS FERNANDES": "https://i.imgur.com/D3CfluD.jpeg",
  "LUCAS BARBOSA": "https://i.imgur.com/oRT5Vwe.jpeg",
  "PRAXEDES": "https://i.imgur.com/mS5LOLM.jpeg",
  "GABRIEL": "https://i.imgur.com/fQzSVrK.jpeg",
  "LAQUINTANA": "https://i.imgur.com/DFlYVtK.jpeg",
  "ERIC RAMIRES": "https://i.imgur.com/G0NEMmJ.jpeg",
  "VITINHO": "https://i.imgur.com/jpDmWWG.jpeg",
  "GUSTAVINHO": "https://i.imgur.com/KI0m0Fq.jpeg",
  "JOÃO NETO": "https://i.imgur.com/Izi7w9d.jpeg",
  "JUNINHO CAPIXABA": "https://i.imgur.com/38Ut8bk.jpeg",
  "ANDRÉS HURTADO": "https://i.imgur.com/aLeqw6m.jpeg",
  "PEDRO HENRIQUE": "https://i.imgur.com/vXyKmcm.jpeg",
  "GUZMÁN RODRÍGUEZ": "https://i.imgur.com/Ej5jgur.jpeg",
  "SANT'ANNA": "https://i.imgur.com/uRw0TE7.jpeg",
  "NATHAN MENDES": "https://i.imgur.com/XSiNXsD.jpeg",
  "DOUGLAS MENDES": "https://i.imgur.com/MaG2XPR.jpeg",
  "EDUARDO SANTOS": "https://i.imgur.com/dRfmSEZ.jpeg",
  "GUILHERME LOPES": "https://i.imgur.com/WcXlHs9.jpeg",
  "CLEITON": "https://i.imgur.com/5dPZ7Bw.jpeg",
  "LUCÃO": "https://i.imgur.com/tb3EaHn.jpeg",
  "FABRÍCIO": "https://i.imgur.com/1D2hAYW.jpeg"
}

const san = {
  "Pedro Caixinha": "https://i.imgur.com/MWba5Un.jpeg",
  "DEIVID WASHINGTON": "https://i.imgur.com/aIIFmuM.jpeg",
  "TIQUINHO SOARES": "https://i.imgur.com/d7lYhhf.jpeg",
  "GABRIEL VERON": "https://i.imgur.com/velgsDL.jpeg",
  "THACIANO": "https://i.imgur.com/2zg53AP.jpeg",
  "JULIO FURCH": "https://i.imgur.com/EhX2CRR.jpeg",
  "LUCA MEIRELLES": "https://i.imgur.com/ByNkePY.jpeg",
  "NEYMAR": "https://i.imgur.com/QzGeF7o.jpeg",
  "SOTELDO": "https://i.imgur.com/DlxnSN2.jpeg",
  "ROLLHEISER": "https://i.imgur.com/QNgK0Gx.jpeg",
  "GUILHERME": "https://i.imgur.com/hUd0zhw.jpeg",
  "RINCÓN": "https://i.imgur.com/2qjFGfO.jpeg",
  "ZÉ RAFAEL": "https://i.imgur.com/m3vR0FN.jpeg",
  "BARREAL": "https://i.imgur.com/oJ45VJr.jpeg",
  "DIEGO PITUCA": "https://i.imgur.com/yw1PF2d.jpeg",
  "JOÃO SCHMIDT": "https://i.imgur.com/pNW4RwQ.jpeg",
  "GABRIEL BONTEMPO": "https://i.imgur.com/jHX6iy3.jpeg",
  "HYAN": "https://i.imgur.com/lOArixl.jpeg",
  "ZÉ IVALDO": "https://i.imgur.com/fjTTAOP.jpeg",
  "GIL": "https://i.imgur.com/w1IkpJp.jpeg",
  "JP CHERMONT": "https://i.imgur.com/xQFjO22.jpeg",
  "LUAN PERES": "https://i.imgur.com/eGo42mW.jpeg",
  "SOUZA": "https://i.imgur.com/B75Crjz.jpeg",
  "LEO GODOY": "https://i.imgur.com/h5Qy8xj.jpeg",
  "ESCOBAR": "https://i.imgur.com/T8ITHLq.jpeg",
  "JOÃO BASSO": "https://i.imgur.com/BjPPeqA.jpeg",
  "ADERLAN": "https://i.imgur.com/rvIdPB1.jpeg",
  "KEVYSON": "https://i.imgur.com/TRTa1Ya.jpeg",
  "LUISÃO": "https://i.imgur.com/qNrRZQs.jpeg",
  "VINICIUS LIRA": "https://i.imgur.com/596zXT9.jpeg",
  "JOÃO PAULO": "https://i.imgur.com/pQPa6kU.jpeg",
  "GABRIEL BRAZÃO": "https://i.imgur.com/I723fDo.jpeg",
  "DIOGENES": "https://i.imgur.com/3RQrAKT.jpeg"
}

const mir = {
  "Rafael Guanaes": "https://i.imgur.com/PeakOi6.jpeg",
  "RAFA SILVA": "https://i.imgur.com/ylCQlgh.jpeg",
  "LÉO GAMALHO": "https://i.imgur.com/la4hWRe.jpeg",
  "DAVÓ": "https://i.imgur.com/IH0z6Mc.jpeg",
  "IURY CASTILHO": "https://i.imgur.com/K8VAxi2.jpeg",
  "FABRÍCIO DANIEL": "https://i.imgur.com/HyEuURZ.jpeg",
  "CRISTIAN": "https://i.imgur.com/MKtlrER.jpeg",
  "RONI": "https://i.imgur.com/qRdfPFF.jpeg",
  "YAGO FELIPE": "https://i.imgur.com/Txz7RV0.jpeg",
  "CLAYSON": "https://i.imgur.com/gDsVZrw.jpeg",
  "CHICO KIM": "https://i.imgur.com/wMFPbqC.jpeg",
  "GABRIEL": "https://i.imgur.com/2AKDJII.jpeg",
  "NETO MOURA": "https://i.imgur.com/TzOp93g.jpeg",
  "LUIZ FILIPE": "https://i.imgur.com/DpWMA5H.jpeg",
  "DANIELZINHO": "https://i.imgur.com/X0QiqpS.jpeg",
  "MATHEUS SALES": "https://i.imgur.com/zGK4qAL.jpeg",
  "NEGUEBA": "https://i.imgur.com/9s8D7Zo.jpeg",
  "JOSÉ ALDO": "https://i.imgur.com/66jJF1n.jpeg",
  "EDSON CARIOCA": "https://i.imgur.com/tWPfCQ3.jpeg",
  "MACEIÓ": "https://i.imgur.com/uovz5k9.jpeg",
  "MATHEUS BIANQUI": "https://i.imgur.com/i5ueoQO.jpeg",
  "ZÉ VITOR": "https://i.imgur.com/4ZiFnXz.jpeg",
  "REINALDO": "https://i.imgur.com/AYlQ01V.jpeg",
  "DAVID BRAZ": "https://i.imgur.com/jAQfKcM.jpeg",
  "ALAN EMPEREUR": "https://i.imgur.com/2PC9IdJ.jpeg",
  "LUIZ OTÁVIO": "https://i.imgur.com/BiwQ8vc.jpeg",
  "DANIEL BORGES": "https://i.imgur.com/jgCQQRr.jpeg",
  "JOÃO VICTOR": "https://i.imgur.com/jdwISyI.jpeg",
  "LUCAS RAMON": "https://i.imgur.com/y5pByFB.jpeg",
  "JEMMES": "https://i.imgur.com/GCvBeyf.jpeg",
  "DA SILVA": "https://i.imgur.com/FCmmmtt.jpeg",
  "WALTER": "https://i.imgur.com/LAhGRHA.jpeg",
  "ALEX MURALHA": "https://i.imgur.com/SaKAvYR.jpeg",
  "THOMAZELLA": "https://i.imgur.com/EGZb2pk.jpeg"
}

const spo = {
  "Pepa": "https://i.imgur.com/HHW8vpG.jpeg",
  "GONÇALO PACIÊNCIA": "https://i.imgur.com/vZbM1mA.jpeg",
  "PABLO": "https://i.imgur.com/qsCVRc4.jpeg",
  "ARTHUR SOUSA": "https://i.imgur.com/GPMdFuh.jpeg",
  "LENNY LOBATO": "https://i.imgur.com/3MwyoKD.jpeg",
  "ZÉ ROBERTO": "https://i.imgur.com/2Gl6TAj.jpeg",
  "SÉRGIO OLIVEIRA": "https://i.imgur.com/UQp51d4.jpeg",
  "LUCAS LIMA": "https://i.imgur.com/RXUfP3f.jpeg",
  "CHRYSTIAN BARLETTA": "https://i.imgur.com/ypWt7U3.jpeg",
  "DU QUEIROZ": "https://i.imgur.com/DSIeMSs.jpeg",
  "ZÉ LUCAS": "https://i.imgur.com/hx2OgfB.jpeg",
  "CARLOS ALBERTO": "https://i.imgur.com/xrjTVnt.jpeg",
  "HYORAN": "https://i.imgur.com/cnzm2FT.jpeg",
  "FABRICIO DOMÍNGUEZ": "https://i.imgur.com/kwym459.jpeg",
  "ATENCIO": "https://i.imgur.com/QycZbB2.jpeg",
  "RIVERA": "https://i.imgur.com/zWenKLN.jpeg",
  "GUSTAVO MAIA": "https://i.imgur.com/1xtFKch.jpeg",
  "ROMARINHO": "https://i.imgur.com/NRJNIfV.jpeg",
  "TITI ORTÍZ": "https://i.imgur.com/m2te0V5.jpeg",
  "DALBERT": "https://i.imgur.com/NrOx0yJ.jpeg",
  "ANTÔNIO CARLOS": "https://i.imgur.com/gNS9ZzG.jpeg",
  "DI PLACIDO": "https://i.imgur.com/QqCqfcO.jpeg",
  "RAFAEL THYERE": "https://i.imgur.com/MrJLri3.jpeg",
  "CHICO": "https://i.imgur.com/rC8BLjF.jpeg",
  "MATHEUS ALEXANDRE": "https://i.imgur.com/TIILAc4.jpeg",
  "JOÃO SILVA": "https://i.imgur.com/J61KIzd.jpeg",
  "IGOR CARIÚS": "https://i.imgur.com/oRA4nWf.jpeg",
  "LUCAS CUNHA": "https://i.imgur.com/EvfvutY.jpeg",
  "HEREDA": "https://i.imgur.com/RDzCzIl.jpeg",
  "RENZO": "https://i.imgur.com/dWsZd9G.jpeg",
  "FELYPE GABRIEL": "https://i.imgur.com/c7xLOaP.jpeg",
  "FELYPE GABRIEL ALENCAR CARVALHO": "https://i.imgur.com/6eQbIDj.jpeg",
  "CAIQUE FRANÇA": "https://i.imgur.com/8Cf3I5a.jpeg",
  "THIAGO COUTO": "https://i.imgur.com/gP6DNAm.jpeg",
  "DENIS": "https://i.imgur.com/Zi1NvF9.jpeg",
  "DAVI MEDEIROS SERRANO LIRA": "https://i.imgur.com/KFXpsGh.jpeg"
}

const vit = {
  "Thiago Carpini": "https://i.imgur.com/i47V5dF.jpeg",
  "CARLINHOS": "https://i.imgur.com/jFFISsx.jpeg",
  "ERICK": "https://i.imgur.com/1DG4uje.jpeg",
  "GUSTAVO MOSQUITO": "https://i.imgur.com/T306Z85.jpeg",
  "RENATO KAYZER": "https://i.imgur.com/qRfCx2E.jpeg",
  "JANDERSON": "https://i.imgur.com/pt8DeRM.jpeg",
  "Fabri": "https://i.imgur.com/u52kiIa.jpeg",
  "CARLOS EDUARDO": "https://i.imgur.com/FpNMTpf.jpeg",
  "FÁBIO": "https://i.imgur.com/pKKyjKh.jpeg",
  "WELLINGTON RATO": "https://i.imgur.com/wQVRtvD.jpeg",
  "MATHEUZINHO": "https://i.imgur.com/SNzM8Y1.jpeg",
  "PEPÊ": "https://i.imgur.com/czgUQ65.jpeg",
  "OSVALDO": "https://i.imgur.com/dRgsbri.jpeg",
  "BARALHAS": "https://i.imgur.com/kCFWYL7.jpeg",
  "LUCAS BRAGA": "https://i.imgur.com/zqOokAX.jpeg",
  "WILLIAN OLIVEIRA": "https://i.imgur.com/vqGOLyC.jpeg",
  "ALISSON SANTOS": "https://i.imgur.com/sVy15tD.jpeg",
  "RONALD LOPES": "https://i.imgur.com/g3EID4b.jpeg",
  "RICARDO RYLLER": "https://i.imgur.com/9Zx1Fow.jpeg",
  "LÉO PEREIRA": "https://i.imgur.com/9eTJARu.jpeg",
  "THIAGUINHO": "https://i.imgur.com/fHFGRPv.jpeg",
  "BRUNO XAVIER": "https://i.imgur.com/8KjkktX.jpeg",
  "PABLO SANTOS": "https://i.imgur.com/Y9wqG50.jpeg",
  "DIONÍSIO": "https://i.imgur.com/NBMnlyK.jpeg",
  "FELIPE CARDOSO": "https://i.imgur.com/ScpcNB8.jpeg",
  "DIONISIO PEREIRA DE SOUZA NETO": "https://i.imgur.com/3b3kxM0.jpeg",
  "LUCAS HALTER": "https://i.imgur.com/AFlgc82.jpeg",
  "HUGO": "https://i.imgur.com/8KcAEVX.jpeg",
  "CLAUDINHO": "https://i.imgur.com/rGhLLuh.jpeg",
  "NERIS": "https://i.imgur.com/eCEXlOx.jpeg",
  "CAMUTANGA": "https://i.imgur.com/9TVSLXm.jpeg",
  "BRUNO UVINI": "https://i.imgur.com/4xPvPE0.jpeg",
  "RAÚL CÁCERES": "https://i.imgur.com/hGCKPVb.jpeg",
  "ZÉ MARCOS": "https://i.imgur.com/lH5j4Dh.jpeg",
  "EDU": "https://i.imgur.com/YSQt61e.jpeg",
  "JAMERSON": "https://i.imgur.com/EkeJ8wA.jpeg",
  "FELIPE VIEIRA": "https://i.imgur.com/4bEFAZD.jpeg",
  "LUCAS ARCANJO": "https://i.imgur.com/HKpMx14.jpeg",
  "GABRIEL": "https://i.imgur.com/ePvbitK.jpeg",
  "FINTELMAN": "https://i.imgur.com/en2TU4r.jpeg",
  "YURI SENA": "https://i.imgur.com/bvzU2DF.jpeg",
  "DAVI BARBOSA DA SILVA NOVAES": "https://i.imgur.com/P7seHxX.jpeg"
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
        });
        
      });
    }
    async function urlParaDataUrl(url) {
      const resposta = await fetch(url);
      const blob = await resposta.blob();
    
      return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onloadend = () => resolve(leitor.result);
        leitor.onerror = reject;
        leitor.readAsDataURL(blob);
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

    function replacePlayerPhotosLive() {
      document.querySelectorAll(".card-atleta-com-parciais").forEach(card => {
        const nomeEl = card.querySelector(".apelido-atleta");
        const escudoEl = card.querySelector(".escudo-clube");
        const img = card.querySelector(".atleta-perfil-foto");
    
        const altNome = nomeEl?.textContent?.trim();
        const time = escudoEl?.alt?.trim();
    
        if (!altNome || !time || !imagensPorTime[time]) {
          return;
        }
    
        const nomeNormalizado = normalizarNome(altNome);
        const entrada = Object.entries(imagensPorTime[time]).find(
          ([nomeJogador]) => normalizarNome(nomeJogador) === nomeNormalizado
        );
    
        if (entrada) {
          const [_, novaFoto] = entrada;
          img.src = novaFoto;
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
          // div.style.backgroundImage = `${novaFoto}`;

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
      replacePlayerPhotosLive();
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
    }, 300);

    setInterval(() => {
      if (isRunningReservas) return;
      isRunningReservas = true;
      try {
        replaceReservas();
      } finally {
        isRunningReservas = false;
      }
    }, 500);
