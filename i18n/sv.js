(function(G){G['i18n']={lc:{"sv":function(n){return n===1?"one":"other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){i18n.c(d,k);return d[k]},
p:function(d,k,o,l,p){i18n.c(d,k);return d[k] in p?p[d[k]]:(k=i18n.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){i18n.c(d,k);return d[k] in p?p[d[k]]:p.other}}
i18n["sv"] = {
"Scroll up":function(d){return "Bläddra upp"},
"Next":function(d){return "Nästa"},
"My con":function(d){return "Min konferens"},
"People":function(d){return "Deltagare"},
"Refresh data":function(d){return "Uppdatera info"},
"List items by:":function(d){return "Visa punkter efter:"},
"Time":function(d){return "Tid"},
"Location":function(d){return "Plats"},
"Show items starting after:":function(d){return "Visa punkter som startar efter:"},
"earlier":function(d){return "tidigare"},
"later":function(d){return "senare"},
"Search":function(d){return "Sök"},
"Go":function(d){return "Sök!"},
"Clear all":function(d){return "Rensa"},
"Loading…":function(d){return "Läser in…"},
"just now":function(d){return "just nu"},
"Expand all":function(d){return "Expandera alla punkter"},
"Collapse all":function(d){return "Minimera alla punkter"},
"all":function(d){return "alla"},
"Photo":function(d){return "Bild"},
"weekday_n":function(d){return i18n.p(d,"N",0,"sv",{"0":"Söndag","1":"Måndag","2":"Tisdag","3":"Onsdag","4":"Torsdag","5":"Fredag","6":"Lördag","other":"???"})},
"month_n":function(d){return i18n.p(d,"N",0,"sv",{"0":"januari","1":"februari","2":"mars","3":"april","4":"maj","5":"juni","6":"juli","7":"augusti","8":"september","9":"oktober","10":"november","11":"december","other":"???"})},
"time_diff":function(d){return i18n.v(d,"T")+" "+i18n.p(d,"T_UNIT",0,"sv",{"0":"sekunder","1":"minuter","2":"timmar","3":"dagar","4":"veckor","5":"månader","6":"år","other":"???"})+" "+i18n.s(d,"T_PAST",{"true":"sedan","other":"från nu"})},
"search_hint":function(d){return "<b>Tips:</b> sökning sker efter hela ord i programpunkternas titel, beskrivning, sal och deltagare. Det går att använda * och ? som jokertecken och \"citerade ord\" för exakta fraser."},
"search_example":function(d){return "Prova till exempel <b>"+i18n.v(d,"X")+"</b>"},
"part_filter":function(d){return i18n.s(d,"T",{"first":"Alla deltagare efter förnamn:","last":"Alla deltagare efter efternamn:","other":"Visa alla deltagare i programmet"})},
"last_updated":function(d){return "Program- och deltagaruppgifter uppdaterades för "+i18n.v(d,"T")},
"no_ko_id":function(d){return "ID saknas! Ge konopas_set.id en unik identifierare."},
"old_browser":function(d){return "Tyvärr hanterar din webbläsare inte några av de JavaScript-funktioner som KonOpas behöver. Du behöver använda en annan webbläsare."},
"private_mode":function(d){return "Det verkar som du använder webbläsaren i privat läge, vilket stänger av den lokala lagringen (localStorage). Detta gör att KonOpas inte fungerar optimalt."},
"item_not_found":function(d){return "Hittade inte program-ID <b>"+i18n.v(d,"ID")+"</b>!"},
"next_ended":function(d){return "Det finns inga fler planerade programpunkter."},
"next_start":function(d){return "Nästa programpunkt börjar om "+i18n.p(d,"H",0,"sv",{"0":"","one":"en timme och","other":i18n.n(d,"H")+" timmar och"})+" "+i18n.p(d,"M",0,"sv",{"one":"en minut","other":i18n.n(d,"M")+" minuter"})+" efter den angivna tiden."},
"star_export_this":function(d){return "Dina aktuella stjärnmarkeringar är lagrade i <a href=\""+i18n.v(d,"THIS")+"\" target=\"_blank\">adressen till denna sida</a>, som du kan öppna på en annan plats och dela med dig av."},
"star_export_share":function(d){return "Dela enklare med en <a href=\""+i18n.v(d,"SHORT")+"\">kortare länk</a> eller en <a href=\""+i18n.v(d,"QR")+"\">QR-kod</a>."},
"star_import_this":function(d){return "Dina tidigare stjärnmarkerade punkter har ett markerat innanmäte, medan de som importerats via <a href=\""+i18n.v(d,"THIS")+"\">denna länk</a> har en markerad kant."},
"star_import_diff":function(d){return "Din tidigare markering "+i18n.p(d,"PREV",0,"sv",{"0":"var tom","one":"innehöll en punkt","other":"hade "+i18n.n(d,"PREV")+" punkter"})+", och den importerade markeringen har "+i18n.p(d,"NEW",0,"sv",{"0":"inga nya punkter","one":"en ny punkt","other":i18n.n(d,"NEW")+" nya punkter"})+" "+i18n.p(d,"SAME",0,"sv",{"0":"","one":"och en som redan var markerad","other":"och "+i18n.n(d,"SAME")+" som redan var markerade"})+"."},
"star_import_bad":function(d){return i18n.p(d,"BAD",0,"sv",{"0":"","one":"En av de importerade punkterna hade ett ogiltiga ID.","other":i18n.n(d,"BAD")+" av de importerade punkterna hade ogiltiga IDs."})},
"star_set":function(d){return "Ändra mina markeringar till de importerade markeringarna"},
"add_n":function(d){return "lägg till "+i18n.v(d,"N")},
"discard_n":function(d){return "kasta bort "+i18n.v(d,"N")},
"star_add":function(d){return "Lägg till "+i18n.p(d,"N",0,"sv",{"one":"ny punkt","other":i18n.n(d,"N")+" nya punkter"})+" till min markering"},
"star_export_link":function(d){return "<a href=\""+i18n.v(d,"URL")+"\">Exportera markering</a> ("+i18n.p(d,"N",0,"sv",{"one":"en punkt","other":i18n.n(d,"N")+" punkter"})+")"},
"star_hint":function(d){return "”Stjärnmarkera” en programpunkt genom att klocka på den grå fyrkanten bredvid den. Dina markeringar lagras och visas i denna vy. Du har inte markerat några programpunkter än, så listan är för närvarande tom."},
"filter_sum_id":function(d){return "Visar "+i18n.p(d,"N",0,"sv",{"one":"en punkt: "+i18n.v(d,"TITLE"),"other":i18n.n(d,"N")+" punkter med id "+i18n.v(d,"ID")})},
"filter_sum":function(d){return "Visar "+i18n.p(d,"N",0,"sv",{"one":"en "+i18n.v(d,"TAG")+" punkt","other":i18n.v(d,"ALL")+" "+i18n.n(d,"N")+" "+i18n.v(d,"TAG")+" punkter"})+" "+i18n.s(d,"GOT_DAY",{"true":"på "+i18n.v(d,"DAY"),"other":""})+" "+i18n.s(d,"GOT_AREA",{"true":"i "+i18n.v(d,"AREA"),"other":""})+" "+i18n.s(d,"GOT_Q",{"true":"stämmer med sökningen "+i18n.v(d,"Q"),"other":""})},
"Votes":function(d){return "Röster"},
"Not connected":function(d){return "Inte ansluten"},
"Click to close":function(d){return "Klicka och stäng"},
"Server error":function(d){return "Serverfel"},
"Hide comments":function(d){return "Göm kommentarer"},
"Loading comments…":function(d){return "Läser in kommentarer…"},
"Cancel":function(d){return "Avbryt"},
"Post anonymously":function(d){return "Skicka anonymt"},
"Hide from public":function(d){return "Göm från allmänheten"},
"Posting…":function(d){return "Skickar…"},
"Post comment":function(d){return "Skicka kommentar"},
"Add a comment":function(d){return "Lägg till kommentar"},
"Login to sync your data":function(d){return "Logga in och synka dina data"},
"Logout":function(d){return "Logga ut"},
"server_cmd_fail":function(d){return "Kommandot \""+i18n.v(d,"CMD")+"\" fallerade."},
"show_comments":function(d){return "Visa "+i18n.p(d,"N",0,"sv",{"one":"en kommentar","other":i18n.n(d,"N")+" kommentarer"})},
"post_author":function(d){return i18n.v(d,"N")+" skrev…"},
"ical_login":function(d){return "Logga in och visa fler exportalternativ."},
"ical_link":function(d){return "Dina val finns som en iCal-kalender (.ics) på:"},
"ical_hint":function(d){return "Märk att det kan dröja innan ändringar du gör i denna guide visas i din externa kalenderprogramvara."},
"ical_make":function(d){return "Du kan även visa dina val i din kalenderapp genom att "+i18n.v(d,"A_TAG")+"göra den tillgänglig</a> i iCals kalenderformat (.ics)"},
"login_why":function(d){return "När du har bekräftat din e-postadress kan du synka dina uppgifter mellan olika klienter (även externa kalendrar) samt rösta på och kommentera programpunkter."}}
})(this);