var I18n = I18n || {};
I18n.translations = {"en":{"errors":{"messages":{"carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_whitelist_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_blacklist_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","content_type_whitelist_error":"You are not allowed to upload %{content_type} files","content_type_blacklist_error":"You are not allowed to upload %{content_type} files","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image?","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","min_size_error":"File size should be greater than %{min_size}","max_size_error":"File size should be less than %{max_size}","inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"},"not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}},"format":"%{attribute} %{message}","template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}},"models":{"post":{"attributes":{"group_id":{"user_not_in_group":"You're not a member of %{group}"}}}}},"models":{"event":{"one":"Event","other":"Events"},"post":{"one":"News post","other":"News posts"},"course":{"one":"Course","other":"Courses"},"contact":{"one":"Contact"},"comment":{"one":"Comment","other":"Comments"},"committee":{"one":"Committee","other":"Committees"}},"attributes":{"course":{"year":"Year","code":"Course code","required":"Required","homepage":"Course homepage","period":{"one":"Period","other":"Periods"},"programme":"Programme","description":"Description","name":"Name"},"post":{"title":"Title","user_id":"User","group_id":"Association / Committee","sticky":"Sticky","body":"Body","show_public":"Show public (for visitors)","documents":"Documents"},"comment":{"user_id":"User","body":"Comment"}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"will_paginate":{"previous_label":"\u003cdiv class=\"button tiny\"\u003e\u003ci class=\"fa fa-angle-left\" aria-hidden=\"true\"\u003e\u003c/i\u003e Previous\u003c/div\u003e","next_label":"\u003cdiv class=\"button tiny\"\u003eNext \u003ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003e\u003c/i\u003e\u003c/div\u003e","page_gap":"...","page_entries_info":{"single_page":{"zero":"No %{model} found","one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}"},"single_page_html":{"zero":"No %{model} found","one":"Displaying \u003cb\u003e1\u003c/b\u003e %{model}","other":"Displaying \u003cb\u003eall\u0026nbsp;%{count}\u003c/b\u003e %{model}"},"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e of \u003cb\u003e%{count}\u003c/b\u003e in total"}},"ice_cube":{"pieces_connector":" / ","not":"not %{target}","not_on":"not on %{target}","date":{"formats":{"default":"%B %-d, %Y"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"times":{"other":"%{count} times","one":"%{count} time"},"until":"until %{date}","days_of_week":"%{segments} %{day}","days_of_month":{"other":"%{segments} days of the month","one":"%{segments} day of the month"},"days_of_year":{"other":"%{segments} days of the year","one":"%{segments} day of the year"},"at_hours_of_the_day":{"other":"on the %{segments} hours of the day","one":"on the %{segments} hour of the day"},"on_minutes_of_hour":{"other":"on the %{segments} minutes of the hour","one":"on the %{segments} minute of the hour"},"at_seconds_of_minute":{"other":"at the %{segments} seconds","one":"at the %{segments} second"},"on_seconds_of_minute":{"other":"on the %{segments} seconds of the minute","one":"on the %{segments} second of the minute"},"each_second":{"one":"Secondly","other":"Every %{count} seconds"},"each_minute":{"one":"Minutely","other":"Every %{count} minutes"},"each_hour":{"one":"Hourly","other":"Every %{count} hours"},"each_day":{"one":"Daily","other":"Every %{count} days"},"each_week":{"one":"Weekly","other":"Every %{count} weeks"},"each_month":{"one":"Monthly","other":"Every %{count} months"},"each_year":{"one":"Yearly","other":"Every %{count} years"},"on":"on the %{sentence}","in":"in %{target}","integer":{"negative":"%{ordinal} to last","literal_ordinals":{"-1":"last","-2":"2nd to last"},"ordinal":"%{number}%{ordinal}","ordinals":{"default":"th","1":"st","2":"nd","3":"rd","11":"th","12":"th","13":"th"}},"on_weekends":"on Weekends","on_weekdays":"on Weekdays","days_on":["Sundays","Mondays","Tuesdays","Wednesdays","Thursdays","Fridays","Saturdays"],"on_days":"on %{days}","array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "},"string":{"format":{"day":"%{rest} %{current}","day_of_week":"%{rest} %{current}","day_of_month":"%{rest} %{current}","day_of_year":"%{rest} %{current}","hour_of_day":"%{rest} %{current}","minute_of_hour":"%{rest} %{current}","until":"%{rest} %{current}","count":"%{rest} %{current}","default":"%{rest} %{current}"}}},"page_title":"Information Technology on Chalmers","techsec":"Student Division","section":"The division","it":"Information Technology","chs":"Chalmers Student Union","cth":"Chalmers University of Technology","login":"Sign in","signed_out":"You have been signed out","loading":"Loading","logout":"Sign out","signed_in":"You have been signed in","sv":"Swedish","en":"English","pw_reset":"Reset password","search":"Search chalmers.it","search_title":"Results for '%{search_term}'","search_found":"Found %{number} results","search_failed":"Please try your search again","contact":"Contact","services":"services","news":"News","courses":"Courses","preview":"Preview","business":"Business","mailing_address":"Mailing address","visiting_address":"Visiting address","developed_by":"Developed by","more_info":"more info","follow":"Follow","name":"Name","new":"New %{name}","more":"More %{model}","in_locale":"%{name} in %{lang}","edit":"Edit","editing":"Editing","delete":"Delete","back":"Back","show":"Show","confirm":"Are you sure?","true":true,"false":false,"model_destroyed":"%{name} has been deleted","model_updated":"%{name} has been updated","model_created":"%{name} has been created","comment_definite":"The comment","published":"Published","permalink":"Permalink","translation_missing":"This %{model} is missing a translation for your language.","no_posts_found":"No posts found","not_authorized":"You are not authorized to perform this action.","to_whom":"Who do you want to contact?","send_contact":"Send message","contact_form":"Contact form","partner":"Partner","unsupported_file_format":"Unsupported file format (only pdf/md/txt/jpg/jpeg/gif/png/webp)","copy_link":"Copy link","uploaded_files":"Uploaded files","about_section":"About our division","committees_assoiciations":"Committees, associations and other instances","activemodel":{"models":{"print":"Print","printer":"Printer"},"attributes":{"print":{"file":"File","printer":"Printer","copies":"No. of copies","sides":"Double-sided","collated":"Collated","ranges":"Ranges","media":"Paper size","ppi":"Resolution","username":"CID","password":"Password"}},"errors":{"models":{"print":{"attributes":{"file":{"invalid_type":"File type is unsupported"},"media":{"unsupported":"Paper size is not supported by the printer"}}}}}},"layouts":{"header":{"tools":"Tools","new_news_post":"Publish news post","new_page":"Add new page","edit_profile":"Edit profile","admin":"Admin","edit_frontpage":"Edit section frontpage","add_committee":"Add new committee","edit_menu_links":"Edit menu links","edit_menu":"Edit menu","edit_sponsor":"Edit sponsors","search_news":"Search news"},"home":{"booking":"bookIT","group_room":"Group room","print":"Print","schema":"Schedule","charge_card":"S.U. card","slack":"Slack","book_hubben_desc":"Book Hubben or the group room","book_chalmers_desc":"Book group room at Chalmers","print_desc":"Print on one of Chalmers printers","charge_card_desc":"Shortcut for charging your student union card","slack_desc":"Join the IT student division chat","events":"Events","student_union_card":"Student union card balance"}},"posts":{"form":{"title_placeholder":"Title for the news post","userid_placeholder":"Your username!","groupid_placeholder":"Publish post as","body_placeholder":"The news content goes here"},"post":{"organizer_event":"Organizer of this event","facebook_link_to_event":"Link to Facebook event","posted_for":"Written for","by":"by","posts_by":"News posts written by"},"event_fields":{"empty_if_group":"Leave blank if same as post creator"},"show":{"prev_posts":"Previous news","all_posts":"All news","next_posts":"Next news post","sign_in_add_comment":"Sign in to add comment"}},"comments":{"form":{"write_comment":"Write a comment"}},"users":{"sidebar":{"see_all_posts_by":"Show all news post by %{user}"}},"lunch":{"feed":{"lunch":"Lunch","no_lunch_today":"No lunch today","show_lunch":"Show lunch","hide_lunch":"Hide lunch"}},"home":{"today":{"next_event":"Upcoming events","no_events":"There are no events today"},"card_balance_form":{"card_number":"Card number","get_balance":"Get balance"},"card_balance":{"balance":"Balance","card_number":"Card number","card_holder":"Card holder","remove_card":"Remove card"}},"print":{"new":{"supported_file_types":"Supported file types","suggestions":"Suggestions","user":"User","uploaded":"Uploaded file","password_notice":"Note: It is your Chalmers password you should use, not the one you use for our services.","forgot_pw_notice":"If you have forgotten you password, visit "}},"calendar":{"fetch":{"events":"Events","subscribe":"Subscribe (Google Calendar)"}},"frontpage":{"form":{"update_form_title":"Change section frontpage","frontpage":"Frontpage","page":"Page"}},"simple_form":{"labels":{"contact":{"body":"Body","title":"Title","email":"Email (Leave empty if you want to be anonymous)","contact_form":"Kontaktformulär"}},"placeholders":{"contact":{"body":"What do you want to say?","email":"user@domain.com"}},"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Please review the problems below:"}}},"ja":{"ice_cube":{"pieces_connector":" / ","not":"%{target}以外","not_on":"%{target}以外","date":{"formats":{"default":"%Y年%m月%d日"},"month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"day_names":["日曜","月曜","火曜","水曜","木曜","金曜","土曜"]},"times":{"other":"%{count}回","one":"%{count}回"},"until":"%{date}まで","days_of_week":"%{segments}%{day}","days_of_month":{"other":"%{segments}日","one":"%{segments}日"},"days_of_year":{"other":"%{segments}日","one":"%{segments}日"},"at_hours_of_the_day":{"other":"%{segments}時","one":"%{segments}時"},"on_minutes_of_hour":{"other":"%{segments}分","one":"%{segments}分"},"on_seconds_of_minute":{"other":"%{segments}秒","one":"%{segments}秒"},"each_second":{"one":"毎秒","other":"%{count}秒ごと"},"each_minute":{"one":"毎分","other":"%{count}分ごと"},"each_hour":{"one":"毎時間","other":"%{count}時間ごと"},"each_day":{"one":"毎日","other":"%{count}日ごと"},"each_week":{"one":"毎週","other":"%{count}週間ごと"},"each_month":{"one":"毎月","other":"%{count}ヶ月ごと"},"each_year":{"one":"毎年","other":"%{count}年ごと"},"on":"%{sentence}","in":"%{target}","integer":{"negative":"最終%{ordinal}","literal_ordinals":{"-1":"最終","-2":"最後から2番目の"},"ordinal":"%{ordinal}%{number}","ordinals":{"default":""}},"on_weekends":"週末","on_weekdays":"平日","days_on":["日曜","月曜","火曜","水曜","木曜","金曜","土曜"],"on_days":"%{days}","array":{"last_word_connector":"、","two_words_connector":"、","words_connector":"、"},"string":{"format":{"day":"%{rest}%{current}","day_of_week":"%{rest}%{current}","day_of_month":"%{rest}%{current}","day_of_year":"%{rest}%{current}","hour_of_day":"%{rest}%{current}","minute_of_hour":"%{rest}%{current}","until":"%{current}%{rest}","count":"%{rest}%{current}","default":"%{rest}%{current}"}}}},"es":{"ice_cube":{"pieces_connector":", ","not":"excepto %{target}","not_on":"excepto el %{target}","date":{"formats":{"default":"%-d de %B de %Y"},"month_names":[null,"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"day_names":["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},"times":{"other":"%{count} veces","one":"%{count} vez"},"until":"hasta el %{date}","days_of_week":"%{segments} %{day}","days_of_month":{"other":"los días %{segments} del mes","one":"el día %{segments} del mes"},"days_of_year":{"one":"el día %{segments}","other":"los días %{segments}"},"at_hours_of_the_day":{"one":"en la hora %{segments}","other":"en las horas %{segments}"},"on_minutes_of_hour":{"one":"en el minuto %{segments}","other":"en los minutos %{segments}"},"at_seconds_of_minute":{"one":"en el segundo %{segments}","other":"en los segundos %{segments}"},"on_seconds_of_minute":{"one":"en el segundo %{segments} del minuto","other":"en los segundos %{segments} del minuto"},"on_days":"%{days}","each_second":{"one":"Cada segundo","other":"Cada %{count} segundos"},"each_minute":{"one":"Cada minuto","other":"Cada %{count} minutos"},"each_hour":{"one":"Cada hora","other":"Cada %{count} horas"},"each_day":{"one":"Diariamente","other":"Cada %{count} días"},"each_week":{"one":"Semanalmente","other":"Cada %{count} semanas"},"each_month":{"one":"Mensualmente","other":"Cada %{count} meses"},"each_year":{"one":"Anualmente","other":"Cada %{count} años"},"on":"en %{sentence}","in":"en %{target}","integer":{"negative":"%{ordinal} por la cola","literal_ordinals":{"-1":"el último","-2":"el penúltimo"},"ordinal":"%{number}%{ordinal}","ordinals":{"default":"º","1":"º","2":"º","3":"º","11":"º","12":"º","13":"º"}},"on_weekends":"en fin de semana","on_weekdays":"en días laborables","days_on":["los domingos","los lunes","los martes","los miércoles","los jueves","los viernes","los sábados"],"array":{"last_word_connector":" y ","two_words_connector":" y ","words_connector":", "},"string":{"format":{"day":"%{rest} %{current}","day_of_week":"%{rest} %{current}","day_of_month":"%{rest} %{current}","day_of_year":"%{rest} %{current}","hour_of_day":"%{rest} %{current}","minute_of_hour":"%{rest} %{current}","until":"%{rest} %{current}","count":"%{rest} %{current}","default":"%{rest} %{current}"}}},"date":{"day_names":["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],"abbr_day_names":["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],"month_names":[null,"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"abbr_month_names":[null,"Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],"formats":{"default":"%d/%m/%Y","long":"%d de %B de %Y","short":"%d de %B"}},"time":{"formats":{"default":"%A, %d de %B de %Y %H:%M:%S %z","short":"%d de %b %H:%M","long":"%d de %B de %Y a las %H:%M"},"am":"am","pm":"pm"}},"sv":{"simple_form":{"yes":"Ja","no":"Nej","required":{"text":"obligatorisk","mark":"*"},"error_notification":{"default_message":"Var god kontrollera följande problem:"},"labels":{"contact":{"body":"Innehåll","title":"Ämne","email":"Epostadress (Fyll inte i om du vill vara anonym)"}},"placeholders":{"contact":{"body":"Vad vill du säga?","email":"user@domain.com"}}},"page_title":"Informationsteknik på Chalmers","techsec":"Teknologsektionen","section":"Sektionen","it":"Informationsteknik","chs":"Chalmers Studentkår","cth":"Chalmers Tekniska Högskola","login":"Logga in","signed_in":"Du har blivit inloggad","loading":"Laddar","logout":"Logga ut","signed_out":"Du har blivit utloggad","sv":"svenska","en":"engelska","pw_reset":"Glömt lösenord","search":"Sök på chalmers.it","search_title":"Resultat för '%{search_term}'","search_found":"Hittade %{number} resultat","search_failed":"Vänligen försök med din sökning igen","contact":"Kontakt","services":"Tjänster","news":"Nyheter","courses":"Kurser","preview":"Förhandsgranska","business":"Företag","mailing_address":"Postadress","visiting_address":"Besöksadress","developed_by":"Utvecklad av","more_info":"mer info","follow":"Följ","name":"Namn","new":"Ny %{name}","more":"Fler %{model}","in_locale":"%{name} på %{lang}","edit":"Ändra","editing":"Ändrar","delete":"Ta bort","back":"Tillbaka","show":"Visa","confirm":"Är du säker?","true":"Ja","false":"Nej","model_destroyed":"%{name} har tagits bort","model_updated":"%{name} har uppdaterats","model_created":"%{name} har skapats","comment_definite":"Kommentaren","published":"Publicerad","permalink":"Permalänk","translation_missing":"Denna %{model} saknar en översättning till ditt språk","no_posts_found":"Inga nyheter hittades","not_authorized":"Du har inte behörighet att utföra detta.","send_contact":"Skicka meddelande","to_whom":"Vem vill du kontakta","contact_form":"Kontaktformulär","partner":"Samarbetspartner","unsupported_file_format":"Ogiltigt filformat (endast pdf/md/txt/jpg/jpeg/gif/png/webp)","copy_link":"Kopiera länk","uploaded_files":"Uppladdade filer","about_section":"Om Sektionen","committees_assoiciations":"Kommittéer, föreningar och andra instanser","activerecord":{"errors":{"models":{"post":{"attributes":{"group_id":{"user_not_in_group":"Du är inte medlem i %{group}"}}}}},"models":{"event":"Arrangemang","post":{"one":"Nyhet","other":"Nyheter"},"course":{"one":"Kurs","other":"Kurser"},"contact":{"one":"Kontakt"},"comment":{"one":"Kommentar","other":"Kommentarer"},"committee":{"one":"Kommitté","other":"Kommitteér"},"frontpage":{"one":"Framsida"}},"attributes":{"event":{"event_date":"Arrangemangsdatum","full_day":"Heldag","start_time":"Starttid","end_time":"Sluttid","facebook_link":"Facebooklänk","location":"Plats","organizer":"Arrangör"},"course":{"year":"År","code":"Kurskod","required":"Obligatorisk","homepage":"Kurshemsida","period":{"one":"Läsperiod","other":"Läsperioder"},"programme":"Program","description":"Beskrivning","name":"Namn"},"post":{"title":"Titel","user_id":"Användare","group_id":"Förening/kommitté","sticky":"Fäst inlägget överst","body":"Innehåll","show_public":"Visa publikt (för besökare)","documents":"Dokument"},"comment":{"user_id":"Användare","body":"Kommentar"},"committee":{"name":"Namn","title":"Titel","description":"Beskrivning","url":"URL","email":"Epost"}}},"activemodel":{"models":{"print":"Utskrift","printer":"Skrivare"},"attributes":{"print":{"file":"Fil","printer":"Skrivare","copies":"Antal kopior","sides":"Dubbelsidig utskrift","collate":"Sortera","ranges":"Intervall","media":"Pappersstorlek","ppi":"Upplösning","username":"CID","password":"Lösenord"}},"errors":{"models":{"print":{"attributes":{"file":{"invalid_type":"Filtypen stöds ej"},"media":{"unsupported":"stöds inte av skrivaren"}}}}}},"layouts":{"header":{"tools":"Verktyg","new_news_post":"Posta nyhet","new_page":"Lägg till ny sida","edit_profile":"Redigera profil","admin":"Admin","edit_frontpage":"Ändra sektionsida","add_committee":"Lägg till ny kommitté","edit_menu_links":"Ändra menylänkar","edit_menu":"Ändra meny","edit_sponsor":"Ändra sponsorer","search_news":"Sök nyheter"},"home":{"booking":"bookIT","group_room":"Grupprum","print":"Skriv ut","schema":"Schema","charge_card":"Kårkort","slack":"Slack","book_hubben_desc":"Boka Hubben eller grupprummet","book_chalmers_desc":"Boka grupprum på Chalmers","print_desc":"Skriv ut på Chalmers skrivare","charge_card_desc":"Genväg för att ladda ditt kårkort","slack_desc":"Gå med i IT-sektionens chatt","events":"Evenemang","student_union_card":"Kårkortssaldo"}},"posts":{"form":{"title_placeholder":"Titel för nyheten","userid_placeholder":"Ditt användarnamn!","groupid_placeholder":"Posta nyhet som","body_placeholder":"Nyhetsinnehållet skrivs här"},"post":{"organizer_event":"Arrangör av detta evenemang","facebook_link_to_event":"Arrangemangets sida på Facebook","posted_for":"Skriven för","by":"av","posts_by":"Nyheter skrivna av"},"event_fields":{"empty_if_group":"Lämna tom om samma som skaparen av nyheten"},"show":{"prev_posts":"Föregående nyhet","all_posts":"Alla nyheter","next_posts":"Nästa nyhet","sign_in_add_comment":"Logga in för att kommentera"}},"comments":{"form":{"write_comment":"Skriv en kommentar"}},"users":{"sidebar":{"see_all_posts_by":"Se alla nyheter av %{user}"}},"lunch":{"feed":{"lunch":"Lunch","no_lunch_today":"Ingen lunch idag","show_lunch":"Visa lunchmeny","hide_lunch":"Dölj lunchmeny"}},"home":{"today":{"next_event":"Kommande evenemang","no_events":"Det finns inga evenemang idag"},"card_balance_form":{"card_number":"Kortnummer","get_balance":"Hämta saldo"},"card_balance":{"balance":"Saldo","card_number":"Kortnummer","card_holder":"Kortinnehavare","remove_card":"Ta bort kort"}},"calendar":{"fetch":{"events":"Evenemang","subscribe":"Prenumerera (Google Kalender)"}},"print":{"new":{"supported_file_types":"Filtyper som stöds","suggestions":"Förslag","user":"Användare","uploaded":"Uppladdad fil","password_notice":"Notera: Det är ditt Chalmerslösenord du ska använda och inte det du använder för våra tjänster.","forgot_pw_notice":"Om du har glömt ditt lösenord, besök "}},"frontpage":{"form":{"update_form_title":"Ändra sektionssida","frontpage":"Framsida","page":"Sida"}},"date":{"abbr_day_names":["sön","mån","tis","ons","tor","fre","lör"],"abbr_month_names":[null,"jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],"day_names":["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],"formats":{"default":"%Y-%m-%d","long":"%e %B %Y","short":"%e %b"},"month_names":[null,"januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"ungefär en timme","other":"ungefär %{count} timmar"},"about_x_months":{"one":"ungefär en månad","other":"ungefär %{count} månader"},"about_x_years":{"one":"ungefär ett år","other":"ungefär %{count} år"},"almost_x_years":{"one":"nästan ett år","other":"nästan %{count} år"},"half_a_minute":"en halv minut","less_than_x_minutes":{"one":"mindre än en minut","other":"mindre än %{count} minuter"},"less_than_x_seconds":{"one":"mindre än en sekund","other":"mindre än %{count} sekunder"},"over_x_years":{"one":"mer än ett år","other":"mer än %{count} år"},"x_days":{"one":"en dag","other":"%{count} dagar"},"x_minutes":{"one":"en minut","other":"%{count} minuter"},"x_months":{"one":"en månad","other":"%{count} månader"},"x_seconds":{"one":"en sekund","other":"%{count} sekunder"}},"prompts":{"day":"Dag","hour":"Timme","minute":"Minut","month":"Månad","second":"Sekund","year":"År"}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"måste vara accepterad","blank":"måste anges","confirmation":"stämmer inte överens","empty":"får ej vara tom","equal_to":"måste vara samma som","even":"måste vara jämnt","exclusion":"är reserverat","greater_than":"måste vara större än %{count}","greater_than_or_equal_to":"måste vara större än eller lika med %{count}","inclusion":"finns inte i listan","invalid":"har fel format","less_than":"måste vara mindre än %{count}","less_than_or_equal_to":"måste vara mindre än eller lika med %{count}","not_a_number":"är inte ett nummer","not_an_integer":"måste vara ett heltal","odd":"måste vara udda","record_invalid":"Ett fel uppstod: %{errors}","taken":"används redan","too_long":"är för lång (maximum är %{count} tecken)","too_short":"är för kort (minimum är %{count} tecken)","wrong_length":"har fel längd (ska vara %{count} tecken)"},"template":{"body":"Det var problem med följande fält:","header":{"one":"Ett fel förhindrade denna %{model} från att sparas","other":"%{count} fel förhindrade denna %{model} från att sparas"}}},"helpers":{"select":{"prompt":"Välj"},"submit":{"create":"Skapa %{model}","submit":"Spara %{model}","update":"Ändra %{model}"}},"number":{"currency":{"format":{"delimiter":"","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"kr"}},"format":{"delimiter":"","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Miljard","million":"Miljon","quadrillion":"Biljard","thousand":"Tusen","trillion":"Biljon","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":" och ","two_words_connector":" och ","words_connector":", "}},"time":{"am":"","formats":{"default":"%a, %e %b %Y %H:%M:%S %z","long":"%e %B %Y %H:%M","short":"%e %b %H:%M"},"pm":""},"will_paginate":{"previous_label":"\u003cdiv class=\"button tiny\"\u003e\u003ci class=\"fa fa-angle-left\" aria-hidden=\"true\"\u003e\u003c/i\u003e Föregående\u003c/div\u003e","page_gap":"...","next_label":"\u003cdiv class=\"button tiny\"\u003eNästa \u003ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003e\u003c/i\u003e\u003c/div\u003e"}}};