const estados = [
  {
    ac: "O Acre, localizado na região Norte do Brasil, tem uma história marcada pela exploração da borracha no final do século XIX e início do século XX. Originalmente parte da Bolívia, foi incorporado ao Brasil após o Tratado de Petrópolis em 1903, resultado de conflitos entre seringueiros brasileiros e autoridades bolivianas. Sua capital é Rio Branco, e o estado é conhecido por sua biodiversidade amazônica e culturas indígenas. Atualmente, o Acre se destaca pela produção de borracha, castanha e açaí, além de esforços de conservação ambiental e desenvolvimento sustentável."
  },
  {
    ba: "Alagoas, com Maceió como capital, é famoso por suas praias paradisíacas e lagoas. A economia baseia-se no turismo, agricultura (cana-de-açúcar) e indústria sucroalcooleira. O estado tem uma rica herança cultural, com influências africanas, indígenas e europeias. Festas tradicionais como o São João são destaque. O artesanato e a culinária local, com pratos como o sururu, são atrativos importantes."
  },
  {
    am: "O Amazonas é o maior estado do Brasil em extensão territorial e abriga a maior parte da Floresta Amazônica. Sua capital, Manaus, é um importante centro econômico e industrial, especialmente na Zona Franca. A economia inclui exploração de recursos naturais, turismo ecológico e indústrias. O estado é vital para a conservação ambiental global devido à sua vasta biodiversidade. Os rios Amazonas e Negro são fundamentais para o transporte e subsistência locais."
  },
  {
    ap: "Localizado no extremo norte do Brasil, o Amapá é famoso pela sua biodiversidade e o Parque Nacional do Tumucumaque. Sua capital, Macapá, é a única cortada pela linha do Equador. A economia baseia-se em mineração, especialmente de manganês, pesca e extrativismo vegetal. O estado também se destaca pela produção de ouro e ferro. A presença de rios e florestas é marcante no seu território."
  },
  {
    ba: "A Bahia, com Salvador como capital, é berço da cultura afro-brasileira, famosa pelo carnaval, música e culinária. O estado possui belas praias e cidades históricas como Salvador e Cachoeira. A economia é diversificada, com turismo, agricultura (cacau), petroquímica e mineração. O Recôncavo Baiano é uma região histórica de grande importância. Festas religiosas como o Círio de Nazaré e manifestações culturais como o samba de roda são marcantes."
  },
  {
    ce: "O Ceará, com Fortaleza como capital, é conhecido por suas praias, como Jericoacoara, e o clima quente e ensolarado. A economia é impulsionada pelo turismo, indústria têxtil e fruticultura irrigada. O estado tem uma rica tradição cultural, com artesanato, literatura de cordel e festas populares como o Fortal. O sertão cearense é conhecido pelos desafios climáticos e pela cultura sertaneja. O Ceará também investe em energias renováveis, como a eólica."
  },
  {
    df: "O Distrito Federal abriga Brasília, a capital do Brasil, planejada por Lúcio Costa e Oscar Niemeyer. É o centro político do país, sediando os principais órgãos do governo. A economia é baseada em serviços públicos, comércio e construção civil. Brasília é conhecida pelo seu planejamento urbano e arquitetura moderna. A cidade também é um importante centro cultural e educacional. O cerrado é o bioma predominante na região."
  },
  {
    es: "Com Vitória como capital, o Espírito Santo possui uma economia diversificada, incluindo petróleo, mineração, agricultura e turismo. O estado é conhecido por suas praias e montanhas. A cultura capixaba tem influências indígenas, africanas e europeias, destacando-se na culinária e festas tradicionais. A produção de café e de mármore e granito são importantes para a economia local. O Porto de Vitória é um importante ponto de exportação."
  },
  {
    go: "Goiás, com Goiânia como capital, é conhecido por sua agropecuária e mineração. O estado possui belas paisagens naturais, como o Parque Nacional da Chapada dos Veadeiros. A cultura goiana é rica em tradições sertanejas, com música, dança e culinária típicas. A economia também inclui indústria e comércio. Goiânia é uma cidade moderna e planejada, sendo um importante centro urbano da região Centro-Oeste."
  },
  {
    ma: "Com São Luís como capital, o Maranhão combina belezas naturais, como os Lençóis Maranhenses, com rica herança cultural. A economia inclui agricultura, pecuária, extrativismo e mineração. São Luís, Patrimônio Mundial da UNESCO, destaca-se pela arquitetura colonial. Festas como o Bumba Meu Boi são parte do patrimônio cultural. O estado enfrenta desafios socioeconômicos, mas tem grande potencial turístico."
  },
  {
    mg: "Belo Horizonte é a capital de Minas Gerais, conhecido por suas cidades históricas, como Ouro Preto e Tiradentes, e pela rica cultura e culinária. A economia é forte na mineração, agricultura e indústria. Minas Gerais possui belas paisagens naturais e um patrimônio cultural vibrante. O estado é famoso por seus queijos e doces típicos. Festas tradicionais e o turismo religioso são importantes aspectos culturais."
  },
  {
    ms: "Com Campo Grande como capital, Mato Grosso do Sul é conhecido pelo Pantanal, uma das maiores áreas úmidas do mundo. A economia baseia-se na agropecuária, turismo e mineração. O estado possui uma rica cultura pantaneira, com destaque para a música, dança e gastronomia. O ecoturismo é uma atividade crescente, com atrações como Bonito. A biodiversidade do Pantanal é um dos maiores patrimônios naturais do estado."
  },
  {
    mt: "Com Cuiabá como capital, Mato Grosso é um dos maiores produtores agrícolas do Brasil, destacando-se na produção de soja, milho e algodão. O estado abriga o Pantanal e parte da Amazônia, com rica biodiversidade. A economia também inclui pecuária e mineração. A preservação ambiental é um desafio constante. Mato Grosso é um importante centro para a exportação de commodities agrícolas."
  },
  {
    pa: "Com Belém como capital, o Pará é um dos maiores estados do Brasil e possui vastas áreas de floresta tropical. A economia é impulsionada pela mineração (bauxita, ferro) e agricultura (soja, dendê). O estado é culturalmente rico, com influências indígenas e coloniais, destacando-se a festa do Círio de Nazaré. As hidrelétricas e a exportação de commodities são pilares econômicos. Além disso, é um importante centro logístico com o porto de Belém."
  },
  {
    pb: "A Paraíba, com João Pessoa como capital, é conhecida por suas praias e patrimônio histórico. A economia baseia-se na agricultura, indústria e turismo. O estado tem forte tradição cultural, com destaque para o forró, artesanato e festas juninas. João Pessoa é uma das capitais mais antigas do Brasil e é conhecida por seu centro histórico. O litoral paraibano é um dos mais preservados do país."
  },
  {
    pe: "Com Recife como capital, Pernambuco é conhecido por suas manifestações culturais, como o frevo e o maracatu, além do carnaval de Olinda. A economia é diversificada, incluindo indústria, comércio, agricultura e turismo. Pernambuco possui um rico patrimônio histórico e belas praias. A Zona da Mata e o Sertão são regiões importantes para a economia agrícola. O estado também é um centro educacional e tecnológico no Nordeste."
  },
  {
    pi: "O Piauí, com Teresina como capital, tem uma economia baseada na agricultura (soja, milho) e pecuária. Conhecido por suas paisagens naturais, como a Serra da Capivara, o estado possui um rico patrimônio arqueológico. A cultura local é marcada por tradições folclóricas e festas populares. A expansão da infraestrutura tem contribuído para o desenvolvimento econômico. O Piauí também investe em energias renováveis, como a solar."
  },
  {
    pr: "Com Curitiba como capital, o Paraná é um importante centro agrícola e industrial. O estado possui belas paisagens naturais, como as Cataratas do Iguaçu. A cultura paranaense é marcada por influências de imigrantes europeus, especialmente italianos, alemães e poloneses. A economia inclui a produção de grãos, pecuária e indústria automotiva. Curitiba é conhecida por seu planejamento urbano e qualidade de vida."
  },
  {
    rj: "Com a capital homônima, o Rio de Janeiro é famoso por suas praias, carnaval e o Cristo Redentor. A economia é diversificada, incluindo turismo, indústria, petróleo e comércio. O estado tem uma rica herança cultural, com influências africanas, indígenas e europeias. A cidade do Rio de Janeiro é um importante centro cultural e econômico. A região serrana e as praias de Angra dos Reis são destinos turísticos populares.",
  },
  {
    rn: "Com Natal como capital, o Rio Grande do Norte é famoso por suas dunas, praias e o maior cajueiro do mundo. A economia é baseada no turismo, mineração de sal e petróleo, e fruticultura (melão). O estado possui rica herança cultural, com influências indígenas, africanas e europeias. Festas populares e a culinária, com pratos à base de frutos do mar, são destaques. A cidade de Mossoró é importante para a economia do estado."
  },
  {
    ro: "Rondônia, cuja capital é Porto Velho, é um estado marcado pela colonização recente e pela expansão agrícola e pecuária. Destaca-se na produção de café, soja e carne bovina. A construção de usinas hidrelétricas como Jirau e Santo Antônio impulsionou a economia local. Rondônia abriga importantes reservas indígenas e possui rica biodiversidade. A exploração madeireira e os conflitos agrários são questões relevantes."
  },
  {
    rr: "Roraima é o estado menos populoso do Brasil, com Boa Vista como capital. Faz fronteira com a Venezuela e a Guiana, e é conhecido pelo Monte Roraima e belezas naturais. A economia inclui agricultura, pecuária e mineração, com ênfase em ouro e diamantes. Roraima enfrenta desafios logísticos devido à sua localização remota. O estado é culturalmente diverso, com influências indígenas significativas."
  },
  {
    rs: "Porto Alegre é a capital do Rio Grande do Sul, conhecido por sua cultura gaúcha, com tradições como o chimarrão e a música nativista. A economia baseia-se na agricultura, pecuária e indústria. O estado possui paisagens diversas, incluindo serras, pampas e litoral. A produção de vinho na Serra Gaúcha é destaque. Festas tradicionais, como o Carnaval de Uruguaiana, são parte da rica herança cultural."
  },
  {
    sc: "Com Florianópolis como capital, Santa Catarina é conhecido por suas belas praias e montanhas. A economia é diversificada, incluindo indústria, agricultura e turismo. O estado tem uma forte influência de imigrantes alemães, italianos e açorianos, visível na cultura e arquitetura. A produção de carne suína e aves é importante para a economia local. Blumenau é famosa pela Oktoberfest, uma das maiores festas alemãs do Brasil."
  },
  {
    se: "Sergipe, com Aracaju como capital, é o menor estado do Brasil em área. Conhecido por suas praias e o Cânion do Xingó, a economia baseia-se na agricultura, pecuária, indústria e turismo. Sergipe possui uma cultura vibrante, com festas tradicionais como o São João e culinária típica. O estado tem importantes reservas de petróleo e gás. A cidade histórica de São Cristóvão é um dos principais pontos turísticos."
  },
  {
    sp: "São Paulo, com a capital de mesmo nome, é o estado mais rico e populoso do Brasil, sendo o principal centro econômico e industrial do país. A economia é diversificada, abrangendo indústria, serviços, agricultura e tecnologia. O estado é conhecido por sua diversidade cultural e influência global. A capital é um importante centro financeiro e cultural. O interior do estado também é economicamente dinâmico, com produção agrícola e industrial."
  },
  {
    to: "Tocantins, criado em 1988, tem Palmas como capital. Localizado na transição entre o Cerrado e a Amazônia, é conhecido por suas belezas naturais, como o Jalapão. A economia é baseada na agricultura (soja, milho), pecuária e energia hidrelétrica. A construção de rodovias e ferrovias tem impulsionado o desenvolvimento regional. Tocantins também foca no ecoturismo e na preservação ambiental."
  }
]

//console.log(estados[0].ac)

function createParagraph() {
    const paragraph = document.createElement("p")
    paragraph.innerText = `${estados[0].ac}`
    const content = document.getElementById("jscontent")
    content.appendChild(paragraph)
}
createParagraph()