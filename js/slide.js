$('.js-popup-quiz').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Quiz</h2> <strong>Quiz</strong> er den mest populære aktivteten Kronbar har. Dørene åpner kanskje 18:00, men køen utfor begynner ofte 17:30. Det pleier nesten alltid være helt fult, og dersom du ankommer lokalet etter 18:30 er sannsynligheten for å få et bord svært lav. Inngangsprisen er 20 kroner, en sum som blir brukt til premiepotten. Premiene består av Gavekort på Kiwi/Rema 1000 og lignende. Quizen består av 2 deler, og temaene varierer for hver gang. Mellom de to delene er det en times pause hvor det også arrangeres en rask Kahoot (med premie). <br /><br /><strong>Lydnivå: </strong> Middels. Man kan fint holde samtaler og spille spill ved siden av quizen. Baren kjører middels/lav bakgrunnsmusikk.</div>',
            type: 'inline'
        }
    });
});
$('.js-popup-spillkveld').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Spillkveld</h2> <strong>Spillkveld</strong> er en annen populær kveld blant studentene. //TODO:<br /><br /><strong>Lydnivå: </strong> Lavt. En rolig kveld med helt perfekt stemning til spillaktiviter. Baren har lav bakgrunnsmusikk.</div>',
            type: 'inline'
        }
    });
});
$('.js-popup-jam').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Jam</h2> <strong>Jam</strong> er en gøyal aften hvor husbandet spiller opp til god stemning. //TODO: <br /><br /><strong>Lydnivå: </strong> Høyt. Vanskelig å holde samtaler</div>',
            type: 'inline'
        }
    });
});
$('.js-popup-konsert').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Konsert</h2> <strong>Konserter</strong> er sjeldne, men alltid bra. Kombiner flotte artister med billig drikke i baren så blir det en kveld med allsang uten like. //TODO: <br /><br /><strong>Lydnivå: </strong> Ekstremt høyt. Det er en konsert, så det er akkurat slik du forventer at det blir.</div>',
            type: 'inline'
        }
    });
});

$('.js-popup-lanekassen').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Lånekassen</h2> <strong>Lånekassen</strong> er //TODO: <br /><br /><strong>Lydnivå: </strong> Lavt. </div>',
            type: 'inline'
        }
    });
});
$('.js-popup-strikk').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Strikk & Drikk</h2> <strong>Strikk & Drikk</strong> er en koselig kveld der vi strikker til Frelsesarmeen og prematuravdelingen på Haukeland sykehus. Vi deler ut strikkepinner, garn og oppskrifter til alle som vil ha, men det er også fullt lov å ta med seg eget strikketøy om du skulle ønske det.<br /><br /><strong>Lydnivå: </strong> Lavt</div>',
            type: 'inline'
        }
    });
});
$('.js-popup-temafest').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Temafest</h2> <strong>Temafester</strong> blir arrangert flere ganger i løpet av semesteret! Dette kan være alt fra Oktoberfest og Halloween til Harry Potter og Låvefest. Om du kommer med kostyme eller ikke kan vi love bra dekor og god stemning!<br /><br /><strong>Lydnivå: </strong> Høyt. God gang fiskestang.</div>',
            type: 'inline'
        }
    });
});
$('.js-popup-filmkveld').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup"><h2>Filmkveld</h2> <strong>Filmkvelder</strong>  er en av de koseligste kveldene Kronbar har! Vi setter opp stoler som en kinosal, og kjører på med gode filmer på skjermen! Det er fullt lov å komme i pysjamas. <br /><br /><strong>Lydnivå: </strong> Lavt, men ikke mulighet til å snakke under filmene.</div>',
            type: 'inline'
        }
    });
});
