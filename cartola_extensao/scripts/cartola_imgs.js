const teamNames = {
    "CAM": "atletico-mg", "BAH": "bahia", "BOT": "botafogo", "RBB": "bragantino", "CEA": "ceara", 
    "COR": "corinthians", "CRU": "cruzeiro", "FLA": "flamengo", "FLU": "fluminense", "FOR": "fortaleza", 
    "GRE": "gremio", "INT": "internacional", "JUV": "juventude", "MIR": "mirassol", "PAL": "palmeiras", 
    "SAN": "santos", "SPT": "sport", "SAO": "sao-paulo", "VAS": "vasco", "VIT": "vitoria"
};

const teamShirtImages = {
    "SAO": "https://acdn-us.mitiendanube.com/stores/002/183/167/products/camisa-sao-paulo-1-home-i-branca-torcedor-kit-jersey-fan-white-2025-2026-new-balance-15f1621d1d42baafdb17387724707447-640-0.png",
    "SPT": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqPHzxGweovH6NxCKA0hijli4_F8Z9qUSiw&s",
    "CAM": "https://cdn.awsli.com.br/2500x2500/1598/1598989/produto/175333476d9ac4fb544.jpg",
    "GRE": "https://gremiofbpa.vtexassets.com/arquivos/ids/232579/Camisa_Juv_Of1_2023_Frente.jpg?v=638639833489600000",
    "RBB": "https://images.tcdn.com.br/img/img_prod/1250605/red_bull_bragantino_home_jersey_puma_branca_masculina_25_patrocinadores_1395_1_0323f64ec30e4cc4016c1134bac12ea3.jpg",
    "ATL": "https://cdn.awsli.com.br/2500x2500/1598/1598989/produto/175333476d9ac4fb544.jpg",
    "FLA": "https://flamengo.vteximg.com.br/arquivos/ids/172067-1000-1000/IV6052_FR_Torso_eCom-3-removebg-preview.png.png?v=638731056917300000",
    "INT": "https://acdn-us.mitiendanube.com/stores/002/183/167/products/camisa-internacional-porto-alegre-1-home-i-vermelha-colorado-torcedor-kit-jersey-t-shirt-fan-red-adidas-9520d8e7fa4223a40717377189832649-640-0.png",
    "VAS": "https://images.mantosdofutebol.com.br/wp-content/uploads/2020/08/Camisas-do-Vasco-da-Gama-2020-2021-Kappa-Preta-1.jpg",
    "CRU": "https://images.tcdn.com.br/img/img_prod/1052037/camisa_cruzeiro_home_2024_25_masculina_5247_1_5b9cfa821dc2356e24ad14940c6684ad.png",
    "MIR": "https://cdn.awsli.com.br/2500x2500/1789/1789507/produto/331841664/01-camisa-jogo-1-fxldjs6xwp.jpg",
    "FOR": "https://images.tcdn.com.br/img/img_prod/1136975/camisa_fortaleza_volt_2024_uniforme_1_torcedor_masculino_10690_3_ff6bc930889f17f94acdfaafd1871045.jpg",
    "FLU": "https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/camisa-umbro-fluminense-oficial-1-2023-s-n-masculina-64ef844c9fa1d.png",
    "JUV": "https://images.mantosdofutebol.com.br/wp-content/uploads/2022/04/Camisas-do-Juventude-2022-19Treze-kit-1.jpg",
    "VIT": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf064gMSbixCRnN4QQqXy7w41-OyrZKs8EPw&s",
    "PAL": "https://lojapalmeiras.vtexassets.com/arquivos/ids/190215-800-auto?v=638751389168470000&width=800&height=auto&aspect=true",
    "BOT": "https://botafogo.vtexassets.com/arquivos/ids/158000/7908796729767_1.jpg?v=638779910035870000",
    "SAN": "https://images.mantosdofutebol.com.br/wp-content/uploads/2020/05/Camisas-do-Santos-FC-2020-2021-Umbro-Listrada-1.jpg",
    "BAH": "https://images.mantosdofutebol.com.br/wp-content/uploads/2018/09/Camisas-do-Bahia-2018-2019-Esquadr%C3%A3o-Listrada-1.jpg",
    "COR": "https://bayard.vtexassets.com/arquivos/ids/3364964/0835400001-A.jpg?v=638560414242670000",
    "BRA": "https://images.mantosdofutebol.com.br/wp-content/uploads/2021/09/Camisas-do-Red-Bull-Bragantino-2021-2022-Nike-Home-1.jpg",
    "CEA": "https://images.mantosdofutebol.com.br/wp-content/uploads/2024/04/Camisa-titular-do-Ceara-SC-2024-2025-Vozao-kit.jpg"
};

function replaceImages() {
    Object.entries(teamNames).forEach(([code, name]) => {
        const targetSrc = `https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/clubes_2025/escudos/${code}/60x60.png`;
        let newSrc;
        const shirtSrc = `https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/clubes_2025/silhuetas/${code}/220x220.png`;
        const iconSrc = `https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/clubes_2025/escudos/${code}/45x45.png`
        const shirtNewSrc = teamShirtImages[code];
        switch (code) {
            case "GRE":
                newSrc = "https://s.sde.globo.com/media/organizations/2018/03/12/gremio.svg";
                break;
            case "BOT":
                newSrc = "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg";
                break;
            case "SAN":
                newSrc = "https://s.sde.globo.com/media/organizations/2018/03/12/santos.svg";
                break;
            case "MIR":
                newSrc = "https://s.sde.globo.com/media/organizations/2024/08/20/mirassol-novo-svg-71690.svg";
                break;
            case "CAM":
                newSrc = "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg"
                break;
            case "RBB":
                newSrc = "https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg";
                break;
            default:
                newSrc = `https://s.sde.globo.com/media/organizations/2018/03/11/${name}.svg`;
        }
        document.querySelectorAll("div").forEach(div => {
            if (div.style.backgroundImage.includes(shirtSrc)) {
                div.style.backgroundImage = `url(${shirtNewSrc})`;
            }
        });
        
        document.querySelectorAll(`img[src='${shirtSrc}']`).forEach(img => {
            img.src = shirtNewSrc;
        });
        document.querySelectorAll(`img[src='${iconSrc}']`).forEach(img => {
            img.src = newSrc;
        });
        document.querySelectorAll(`img[src='${targetSrc}']`).forEach(img => {
            img.src = newSrc;
            img.style.width = "47.47px";
        });
    });
}

setInterval(replaceImages, 80);
