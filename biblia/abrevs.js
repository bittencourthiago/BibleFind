const abrevs = (msg) => {

    let headder = `Abreviação / Nome / Numero de capítulos`
    let oldTest = `

        Gn	Gênesis	50
        Ex	Êxodo	40
        Lv	Levítico	27
        Nm	Números	36
        Dt	Deuteronômio	34
        Js	Josué	24
        Jz	Juízes	21
        Rt	Rute	4
        1Sm	1º Samuel	31
        2Sm	2º Samuel	24
        1Rs	1º Reis	22
        2Rs	2º Reis	25
        1Cr	1º Crônicas	29
        2Cr	2º Crônicas	36
        Ed	Esdras	10
        Ne	Neemias	13
        Et	Ester	10
        Jo	Jó	42
        Sl	Salmos	150
        Pv	Provérbios	31
        Ec	Eclesiastes	12
        Ct	Cantares ou Cânticos dos Cânticos	8
        Is	Isaías	66
        Jr	Jeremias	52
        Lm	Lamentações de Jeremias	5
        Ez	Ezequiel	48
        Dn	Daniel	12
        Os	Oséias	14
        Jl	Joel	3
        Am	Amós	9
        Ob	Obadias	-
        Jn	Jonas	4
        Mq	Miquéias	7
        Na	Naum	3
        Hc	Habacuque	3
        Sf	Sofonias	3
        Ag	Ageu	2
        Zc	Zacarias	14
        Ml	Malaquias	4 
    `
    let newTest = `
        Mt	Mateus	28
        Mc	Marcos	16
        Lc	Lucas	24
        Jo	João	21
        At	Atos dos Apóstolos	28
        Rm	Romanos	16
        1Co	1ª Coríntios	16
        2Co	2ª Coríntios	13
        Gl	Gálatas	6
        Ef	Efésios	6
        Fp	Filipenses	4
        Cl	Colossenses	4
        1Ts	1ª Tessalonicenses	5
        2Ts	2ª Tessalonicenses	3
        1Tn	1ª Timóteo	6
        2Tm	2ª Timóteo	4
        Tt	Tito	3
        Fm	Filemom	-
        Hb	Hebreus	13
        Tg	Tiago	5
        1Pe	1ª Pedro	5
        2Pe	2ª Pedro	3
        1Jo	1ª João	3
        2Jo	2ª João	-
        3Jo	3ª João	-
        Jd	Judas	-
        Ap	Apocalipse	22
    `

    let oldTestOk = oldTest.toLocaleLowerCase()
    let newTestOk = newTest.toLocaleLowerCase()


    msg.reply(headder);
    msg.reply(oldTestOk);
    msg.reply(newTestOk);


}
module.exports = abrevs