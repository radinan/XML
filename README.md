# XML

## Описание на проекта ##
Проектът представлява каталог за анимета, като съдържа информация относно различните анимета. Всяко от тях се състои от четири части, основна информация - заглавие, автор, жанр, тип и източник, информация за предаването - сезони и всеки сезон, всички епизоди, продължителност на епизод, информация относно публикуването му - периода на излъчване (начало и край), премиерата му, студиото, от което е излъчван, продуцентите и лицензорите, статистическа информация - резултат от гласове, ранк в класацията и популярност. Допълнително всяко аниме има свой идентификационен номер, всеки автор - националност, сезоните имат атрибут от колко епизода се състоят, продължителността на епизодите има атрибут тип и премиерата му има пояснителен атрибут сезон, който представлява сезон от годината измежду стойностите зима, пролет, лято, есен.
   
## Съдържание на проекта ##
_**anime\_catalog.dtd**_ – DTD файл, описващ структурата на използваните XML файлове   
_**valid\_xml\_\*.xml**_ ( * = [1,5] ) - XML файлове изпълняващи DTD описанието   
_**xml.js**_ – JavaScript файл, генериращ валиден XML чрез DOM   
_**main.js**_ – JavaScript файл   

## Описание на DTD файла ##
Списък на елементите   

_**anime\_catalog**_ – основния елемент в XML документите, който съдържа 0 или повече елемента “anime”    
_**anime**_ – елемент, обединяващ цялата подробна информация за анимето   
   
_**main\_info**_ – елемент, обединяваш основните елементи характеризиращи конкретното аниме   
_**tittle**_ – елемент, съдържащ символен низ, който е заглавието   
_**author**_ – елемент, съдържащ символен низ - създателя на анимето(и най-често мангата)   
_**genre**_ – елемент, съдържащ информация за жанра     
_**type**_ – елемент, съдържащ символен низ, типът спрямо аниме класификациите   
_**source**_ – елемент, съдържащ символен низ, обозначаващ основния източник на анимето (например манга)   
   
_**show\_info**_ – елемент, обхващащ специфицираната информация за предаването, състоящ се от поне един елемент “seasons” и елементи “all_episodes” и “duration”   
_**seasons**_ - елемент, обединяващ сезоните   
_**season**_ - елемент, съдържащ информация за номера на сезона   
_**all\_episodes**_ - елемент, съдържащ символен низ, всички епизоди на анимето   
_**duration**_ - елемент, съдържащ информация за средната продължителност на всеки епизод   
   
_**publish\_info**_ - елемент, обхващащ информацията относно публикуването на анимето - излъчване, премиера, студио, продуценти и лицензаторите   
_**aired**_ - елемент, обхващащ началото и края на периода на излъчване   
_**begin**_ - елемент, обозначаващ началото на периода на излъчване   
_**end**_ - елемент, обозначаващ края на периода на излъчване   
_**premiered**_ - елемент, съдържащ информация кога е излъчена премиерата   
_**studio**_ - елемент, съдържащ информация за студиото, от което е излъчено анимето   
_**producers**_ – елемент, съдържащ символен низ, отговарящ на продуцентите   
_**licensors**_ – елемент, съдържащ символен низ, който обозначава лицензаторите   
   
_**statistics\_info**_ - елемент, обхващащ статистическите данни относно анимето - сбор на гласове, ранк и популярност   
_**score**_ - елемент, съдържащ информация за сбора от гласове на гледащите   
_**rank**_ - елемент, съдържащ информация за ранка спрямо оценките на зрителите   
_**popularity**_ - елемент, съдържащ символен низ, показващ колко е популярно дадено аниме   
   
## Списък на атрибутите ##
_**anime_id**_ - задължителен атрибут на елемента anime, показващ идентификационния номер на анимето   
_**nationality**_ - задължителен атрибут на елемента author, представялява националността   
_**episodes**_ - задължителен атрибут на елемента season, представлява броят епизоди в даден сезон   
_**unit**_ - задължителен атрибут на елемента duration, представя типът на продължителността   
_**season**_ - задължителен атрибут на елемента premiered, показващ сезона през който е излъчена премиерата (измежду зима, пролет, лято)   
