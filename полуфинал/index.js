 // --- БАЗА ДАННЫХ СОБЫТИЙ (ОБНОВЛЕННАЯ) ---
        const eventsDB = { 
            

            // Музеи
            4: {
                title: 'Национальный Музей Истории',
                img: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/National_Museum_of_History_of_Azerbaijan_03.jpg',
                desc: '🏛️ Особняк, Хранящий Тысячелетия! 👑\n\nМузей расположен в великолепном особняке Гаджи Зейналабдина Тагиева, нефтяного магната и филантропа. Это не только музей истории, но и шедевр архитектуры сам по себе. Здесь вы сможете:\n\n Погрузиться в прошлое: От древних артефактов Кавказской Албании до средневековых рукописей и коллекций оружия.\n Увидеть роскошь: Посетите личные покои Тагиева, где сохранились оригинальные интерьеры и мебель, отражающие золотой век Баку.\n Узнать о меценатстве: Экспозиции расскажут о роли Тагиева в развитии образования и культуры Азербайджана.\n\nАдрес: ул. Гусейна Джавада, 4. Ваш билет в историю Азербайджана.',
            	mapQuery: 'Национальный музей истории Азербайджана, Баку',
	        mapImg: 'data:image/png;base64,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'
	    },
            5: {
                title: 'Музей Азербайджанского Ковра',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carpet_Museum_Baku.jpg/1200px-Carpet_Museum_Baku.jpg',
                desc: '🎨 Архитектурный Шедевр и Наследие ЮНЕСКО! 🖼️\n\nУникальное здание, построенное в форме свернутого ковра на Приморском бульваре, является домом для самой богатой коллекции азербайджанских ковров в мире. Ковроткачество — это душа и культурный код страны.\n\nЧто вы откроете:\n Стили и школы: Увидите ковры, представляющие все основные школы ткачества Азербайджана (Карабах, Куба, Ширван и др.).\n История в узорах: Узнаете, как каждый узор и цвет рассказывал свою историю или отражал верования и быт народов.\n Редкие экспонаты: В коллекции есть ковры, датируемые XVII веком, а также современные работы.\n\nАдрес: Приморский бульвар. Посещение этого музея — это путешествие по истории искусства, сотканной из шерсти и шелка.',
            	mapQuery: 'Музей азербайджанского ковра, Баку',
	        mapImg: 'img/maps/maiden-tower.jpg'
	    },
            6: {
                title: 'Музей Современного Искусства',
                img: 'https://bakutravelguide.com/wp-content/uploads/2023/03/Baku-Museum-of-Modern-Art.jpg',
                desc: '✨ Пространство Свободы и Авангарда! 🎭\n\nМузей Современного Искусства (MOMA) — это вызов традициям. Его интерьер спроектирован без прямых углов и жестких границ, символизируя свободу мысли и искусства. Это идеальное место, чтобы почувствовать пульс современного Азербайджана.\n\nОсобенности экспозиции:\n Работы азербайджанских художников-авангардистов и скульпторов второй половины XX века и современности.\n Отдельная экспозиция, посвященная европейскому модернизму (Пикассо, Дали, Шагал).\n Уникальная атмосфера, созданная архитектурным решением, которое само является арт-объектом.\n\nАдрес: ул. Юсифа Сафарова, 5. Вдохните искусство будущего!',
            	mapQuery: 'Museum of Modern Art, Baku',
	        mapImg: 'img/maps/maiden-tower.jpg'
   	    },
            7: {
                title: 'Музей Литературы им. Низами',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nizami_Museum_of_Literature.jpg/800px-Nizami_Museum_of_Literature.jpg',
                desc: '📚 Храм Слова и Красоты! 🏛️\n\nФасад музея украшен шестью статуями великих азербайджанских поэтов и мыслителей. Само здание, построенное в стиле итальянского Ренессанса с элементами национального зодчества, — уже произведение искусства.\n\nВнутри вы увидите:\n Бесценные рукописи: Оригинальные манускрипты, миниатюры и первые издания произведений Низами Гянджеви, Физули и других классиков.\n Развитие письменности: Экспонаты, прослеживающие историю азербайджанской литературы с древнейших времен до современности.\n Атмосфера истории: Залы, посвященные разным эпохам, позволят вам почувствовать себя частью литературного процесса.\n\nАдрес: пр. Независимости, 53. Погрузитесь в мир поэзии и мудрости Востока.',
            	 mapQuery: 'Nizami Museum of Azerbaijani Literature, Baku',
		 mapImg: 'data:image/png;base64,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'
	    },
            8: {
                title: 'Дом-музей Узеира Гаджибейли',
                img: 'https://citylife.az/images/posts/20180924130822635591f814893215b7d508003b2516_d.jpg',
                desc: '🎵 Где Родилась Первая Опера Востока! 🎼\n\nЭтот мемориальный дом-музей посвящен жизни и творчеству Узеира Гаджибейли, основоположника профессиональной азербайджанской музыки. Именно здесь он создал свою знаменитую оперу "Лейли и Меджнун" и оперетту "Аршин мал алан".\n\nЧто сохранено:\n Личные вещи: Его рояль, рукописи, письма и мебель, сохраненные в первозданном виде.\n Рабочий кабинет: Атмосфера творчества, в которой создавались бессмертные произведения.\n Эпоха Баку: Фотографии и документы, рассказывающие о культурной жизни города в начале XX века.\n\nАдрес: ул. Р. Рзаева, 67. Почувствуйте себя гостем великого композитора.',
            	mapQuery: 'Узеир Гаджибеков дом-музей, Баку',
	        mapImg: 'https://www.google.com/maps/vt/data=QsBgApHy5eUulvvCfyd3qgadSCIEKYfMiF1GPzlkaeW7SBj0hev2x1depN6htp9sCM6x8smXajbev2qxtZnb3QMVYgpo30_IvvIOosZTKpfbhBeYZRvt11Q-DNct_tN0YnG36UADq3vgdwyT60Egst43I-vDFbQBCRUFKkkXDAIV&w=249&h=160'
	    },
            
            // Современная архитектура
            9: {
                title: 'Центр Гейдара Алиева',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Heydar_Aliyev_Center_Baku.jpg/800px-Heydar_Aliyev_Center_Baku.jpg',
                desc: '🏗️ Икона Архитектуры от Захи Хадид! 🌟\n\nЦентр Гейдара Алиева — это не просто выставочный комплекс, это архитектурное чудо, ставшее символом современного Баку. Его волнообразные, плавные линии, созданные легендарной Захой Хадид, бросают вызов гравитации.\n\nВнутри вы найдете:\n Музей: Детальные экспозиции, посвященные истории Азербайджана, культуре и жизни Гейдара Алиева.\n Выставочные залы: Регулярные сменные выставки мирового и национального искусства.\n Коллекция автомобилей: Уникальная выставка классических и ретро-автомобилей, пользующаяся огромной популярностью.\n\nАдрес: пр. Гейдара Алиева, 1. Вы просто обязаны увидеть этот шедевр своими глазами!',
            	mapQuery: 'Heydar Aliyev Center, Baku',
	        mapImg: 'https://www.google.com/maps/vt/data=zcDGYYATgInJORApzUu6MB1EVWAIqQn9YhSoND1HmZxvayYBRUYbPvPN7vKNVxYy4lxmJfaqcpz27T1cVMpqXCZKiP3ChIa1iXJOJG2SmPmYqIiteVKunHktX4x5NInSA3qLZs7zRYU6jsaAuVAwUGHfdcGcwSbBms9qRyyAP27W&w=184&h=160'
	    },
            15: {
                title: 'Башни Пламени (Flame Towers)',
                img: 'https://fs.tonkosti.ru/du/5u/du5u3xgl84gkw0s0kgsswssck.jpg',
                desc: '🔥 Самый узнаваемый символ современного Баку! 🏙️\n\n"Башни Пламени" — три небоскреба, являющиеся самыми высокими зданиями в Азербайджане и самым ярким символом столицы. Их форма, напоминающая языки пламени, отражает прозвище страны — "Страна Огней".\n\nОсобенности:\n **Ночная иллюминация: Фасады покрыты более чем 10 000 светодиодных светильников, которые проецируют движущиеся изображения пламени, флага и фигуры человека.\n Состав комплекса: Включает в себя отель Fairmont, жилые апартаменты и офисные помещения.\n Расположение: Возвышаются на холме, откуда открывается лучший вид на Бакинскую бухту и Старый город, создавая контраст истории и современности.\n\nЭто чудо инженерии обязательно к просмотру, особенно в темное время суток!\n\nАдрес:* ул. Мехти Гусейна, 1А.',
            	mapQuery: 'Flame Towers, Baku',
	        mapImg: 'https://www.google.com/maps/vt/data=UFA3vCZuD2Td5qkju_UE3ryKXrAWqwLqByLVQdS4d0WNsfsDo0FWFvdyNV-1cCuuRo5H_7Onuo4yTE-C79DbjDW4hvxIDsE7RMBoko9TJNkvaguo6nIK4fxJoYTB_Fkb4lI04ujsJOdxNHPaf_Asc_V5EeDuAq1i3XuOGg&w=249&h=160'
	    },

            // Исторические Объекты
            10: {
                title: 'Дворец Ширваншахов',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Palace_of_the_Shirvanshahs%2C_Baku.jpg/800px-Palace_of_the_Shirvanshahs%2C_Baku.jpg',
                desc: '🏰 **Жемчужина Азербайджанского Зодчества (Объект UNESCO)**\n\nДворец Ширваншахов — бывшая резиденция правителей Ширваншахов. Это крупнейший памятник Ширвано-Апшеронской ветви азербайджанского зодчества, расположенный в историческом центре Баку — Ичери-Шехер.\n\n**Что включает комплекс:**\n* **Дворец:** Главное здание с роскошными залами.\n* **Диван-хане:** Дворик с восьмиугольным павильоном, используемый для официальных приемов.\n* **Усыпальница (Тюрбе):** Усыпальница династии.\n* **Шахская мечеть:** Мечеть с минаретом 1441 года.\n\nЭто великолепный образец средневековой архитектуры, который рассказывает о богатой истории династии, правившей здесь веками.',
            	mapQuery: 'Palace of the Shirvanshahs, Baku',
	        mapImg: 'data:image/png;base64,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'
	    },
            11: {
                title: 'Девичья башня (Qız Qalası)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Qiz_qalasi.jpg/800px-Qiz_qalasi.jpg',
                desc: '🗼 **Символ Баку и Легенд (Объект UNESCO)**\n\nДевичья башня — древний символ Баку, возвышающийся на скале в прибрежной части Старого города. Точная дата и цель постройки до сих пор являются предметом споров, что породило множество легенд, самая известная из которых — о бросившейся с неё девушке.\n\n**Особенности:**\n* **Высота:** Около 28 метров, с толщиной стен до 5 метров.\n* **Назначение:** Предположительно, была маяком, оборонительным сооружением или даже зороастрийским храмом.\n* **Вид:** Со смотровой площадки открывается захватывающий панорамный вид на Бакинскую бухту и Ичери-Шехер.\n\nЭто обязательное место для посещения, пропитанное историей и тайнами.',
            	mapQuery: 'Maiden Tower, Baku',
	        mapImg: 'https://www.google.com/maps/vt/data=zKPaRMi6LE04pJSxVBOqq7-4Ul6vwt-W5Y5lBS9jJdcjY_rwZcfHF6cwk-MQ4LihrtNCer9INUIQb2Y28u8qWTHRyugkzx0c_rp8L_3_dvSNJxob7NPNLN1xyINi1k4jKOoSTBeb0kse-Wc_BbuF1QMseaYDwOAYkktFS53QLJn-HU5txtKowdmWKg8v79bKQbjnsJUTjJ2Be0rnYejbIV6hbMgaGvWEoBKuBQoNhh2u52T_JeTFqtkU4ptSN7InYJwsjSGiJUzyuJqkVyPUX618dkQUrUE'
	    },
            12: {
                title: 'Храм огнепоклонников Атешгях',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_Ateshgah.jpg/800px-Baku_Ateshgah.jpg',
                desc: '🔥 **Храм Вечного Огня** 🔥\n\nАтешгях ("Дом Огня") — уникальный храмовый комплекс, расположенный на Апшеронском полуострове. Он был построен в XVII–XVIII веках на месте выхода природного газа, который самовоспламенялся. Храм служил местом паломничества и поклонения для зороастрийцев (огнепоклонников) и индуистов.\n\n**Уникальность:**\n* **Четырёхугольный комплекс:** Представляет собой замок с алтарём в центре, вокруг которого расположены кельи.\n* **Слияние культур:** Архитектура отражает смешение индийских и азербайджанских стилей.\n* **Газовые горелки:** Сегодня огонь поддерживается за счёт подведённого газа, поскольку природные источники истощились, но атмосфера древнего поклонения сохранена.\n\nПосетите это место, чтобы прикоснуться к древним верованиям!',
            	mapQuery: 'Ateshgah Fire Temple, Surakhani, Baku',
	        mapImg: 'https://www.google.com/maps/vt/data=qL2V90yaNOe68txp5-KNmmzvlbELgIIap-m1jsVscoIV0YldXxqFwLg2fXzFfyU4gOeIa0Hx1fikhnZ7YFK3ATUdPQAWFyIvaLLL2QdM7NiJ0MaatMD38DAxV1O8Sw70GA-JeV7jAkEDcol-v7f2M_u9-lANKAL9Jd6hkNxALc2r&w=184&h=160'
	    },
            13: {
                title: 'Горящая гора Янардаг',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yanar_Dag_2016.jpg/800px-Yanar_Dag_2016.jpg',
                desc: '🌋 **Природное Чудо Апшерона** 🌅\n\nЯнардаг ("Горящая гора") — природный вечный огонь, непрерывно горящий на склоне холма на Апшеронском полуострове. В отличие от Атешгяха, это открытое пламя, которое никогда не гаснет, что делает Азербайджан "Страной Огней" не только метафорой, но и реальностью.\n\n**Особенности:**\n* **Естественный выход газа:** Огонь питается природным газом, просачивающимся из пористого слоя песчаника.\n* **Лучшее время:** Наиболее впечатляющее зрелище — после захода солнца.\n\nЭто прекрасная возможность увидеть невероятное природное явление, почитаемое тысячелетиями.',
            	mapQuery: 'Yanar Dag, Azerbaijan',
	        mapImg: 'https://www.google.com/maps/vt/data=u62eEABxml8KxVNzSnUx54a8CqfQM9Cn1b2HysZkUJYOXiLWvLetyZ6asKrCZOIfSBtPm2IrxbHmKnRx31sFlrzUacp5pakIyogFhJnTi5SfQY7HU_kfcYX-ZbyFq8aQYknaaSSQtOskMQw9xmySnskOfzX_ZAnd4z7sJAnXzvU0idkm-OGEYltgzqqjTSlmd-J2no1Rp2Nb1lfP'
	    },
            14: {
                title: 'Национальный парк Гобустан',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gobustan_Petroglyphs_02.jpg/800px-Gobustan_Petroglyphs_02.jpg',
                desc: '🗿 **Музей Под Открытым Небом (Объект UNESCO)** 🏞️\n\nГобустан — это горно-холмистый район и Национальный парк, знаменитый своими наскальными рисунками (петроглифами) и грязевыми вулканами (хотя сами вулканы расположены немного в стороне).\n\n**Что вы увидите:**\n* **Петроглифы:** Более 6000 рисунков, датируемых от 5 до 40 тысяч лет, изображающих сцены охоты, ритуальные танцы, животных и лодки.\n* **"Гавал-даш":** Камень-бубен, который издает мелодичные звуки при ударе.\n* **Древняя история:** Это место считается одним из первых поселений человека в Азербайджане, наглядно демонстрируя эволюцию цивилизации.\n\nПогрузитесь в доисторическую эпоху в этом уникальном парке!',
            	mapQuery: 'Gobustan National Park, Azerbaijan',
	        mapImg: 'data:image/png;base64,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'
	    },


            // Городские и национальные парки

           
            17: {
                title: 'Парк Филармонии',
                img: 'img/parks/philharmony-park.jpg',
                desc: '🎻 **Классика, фонтаны и каштановые аллеи.**\n\nПарк Филармонии расположен рядом с Азербайджанской государственной филармонией. Небольшой, но очень уютный сад.\n\n**Особенности:**\n* центральный фонтан с ротондой;\n* вид на здание филармонии и Старый город;\n* приятное место для вечерних прогулок перед концертом.\n\nИдеален для романтической прогулки в сердце Баку.',
                mapQuery: 'Philarmonic Garden, Baku, Azerbaijan',
	        mapImg: 'data:image/png;base64,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'
            },
            18: {
                title: 'Парк Низами Гянджеви',
                img: 'img/parks/nizami-park.jpg',
                desc: '📚 **Парк, посвящённый великому поэту.**\n\nПарк Низами Гянджеви — зелёная зона с памятником Низами, расположенная недалеко от центральных улиц Баку.\n\n**Что вы увидите:**\n* монумент Низами Гянджеви;\n* аккуратные аллеи и клумбы;\n* удобное расположение рядом с проспектом Низами и другими достопримечательностями.\n\nХорошее место, чтобы сделать паузу во время прогулки по центру.',
                mapQuery: 'Nizami Ganjavi Park, Baku, Azerbaijan',
	        mapImg: 'data:image/png;base64,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'
            },
            19: {
                title: 'Парк Хагани',
                img: 'img/parks/xagani-park.jpg',
                desc: '🌳 **Исторический сад в самом центре.**\n\nПарк Хагани (иногда известен как Молоканский сад) — один из старейших парков Баку.\n\n**Особенности:**\n* старые деревья и густая тень летом;\n* скульптуры и скамейки;\n* близость к Низами улице и Ичери Шехер.\n\nМесто, где чувствуется дух старого Баку.',
                mapQuery: 'Khagani Park, Baku, Azerbaijan',
	        mapImg: 'https://www.google.com/maps/vt/data=urpdR2IGLkc4eXpxahF6z1ecaLUcPViiAz0eofoyZe9VhZNNYSmCuMVQGjKZrqoGJC2aFRXQgu7xCGqpCGJvchOcFUTqf_jNM4c3JEmBEyQFc9E8rKlFrIgO_LyJG7Zv6HsOSfTF9VxGattniYk1tf4LE23gSXZUm57Rdwz8d6dk&w=184&h=160'
            },
            20: {
                title: 'Парк Гусейн Джавид',
                img: 'img/parks/huseyn-javid-park.jpg',
                desc: '🌲 **Зелёный парк у подножия Парламента.**\n\nПарк имени Гусейна Джавида расположен на возвышенности рядом с Милли Меджлисом.\n\n**Что здесь:**\n* широкие аллеи и вид на город;\n* памятник Гусейну Джавиду;\n* спокойная атмосфера вдали от шума центра.\n\nПодходит для размеренных прогулок и созерцания панорамы Баку.',
                mapQuery: 'Huseyn Javid Park, Baku, Azerbaijan',
		mapImg: 'https://www.google.com/maps/vt/data=Xd2nVVv-JtyUcXK2CNljbrOiwUPew4G58A-CTrot1dERcCuopUxdbEdZTSSu7Cm3fMeg3MsZYEEjy4MjszfbkfwJFZWCDghJEtqEbAPnBsu_Q33ZFh1mDwsU5-Lmo5xp-sgBlvFEsIXvkITEKCG6ijVjQc2pcnZOu2ExSF58xjXC&w=249&h=160'
            },
            21: {
                title: 'Парк возле Центра Гейдара Алиева',
                img: 'img/parks/heydar-center-park.jpg',
                desc: '🏙️ **Современный парк с видом на шедевр Захи Хадид.**\n\nТерритория вокруг Центра Гейдара Алиева — это открытое парковое пространство с идеально подстриженными газонами и видами на волнообразное здание центра.\n\n**Особенности:**\n* просторные лужайки для прогулок и фото;\n* современные инсталляции и экспозиции под открытым небом;\n* отличный ракурс для снимков Центра Гейдара Алиева.\n\nИдеальное место для прогулки на закате.',
                mapQuery: 'Heydar Aliyev Center Park, Baku, Azerbaijan',
		mapImg: 'https://www.google.com/maps/vt/data=hn_zSfEh0Ki5qRCIQJs-eqCtbsHAWvfWTPKfXrwiW8tzdOsIMo0pKglDkn_coIwQ25ix-74DrgVtRQZc6xdGghaxeoq9vf_U2zFjrANqvPmLZ5-aFrKCnOP-pjYCgsUeCMiUbVeqRiwdHx1yZ9MpyQ_fMLiDL9c1R5RDG5WNNykH&w=213&h=160'
            },
            22: {
                title: 'Парк Победы в Гяндже',
                img: 'img/parks/ganja-victory-park.jpg',
                desc: '🕊️ **Парк памяти и панорамных видов.**\n\nПарк Победы в Гяндже посвящён героям и событиям прошлого и располагается на возвышенности.\n\n**Что вас ждёт:**\n* аллеи и мемориальные композиции;\n* видовые площадки на город Гянджа;\n* тихая и уважительная атмосфера.\n\nПодходит для неторопливых прогулок и размышлений.',
                mapQuery: 'Парк им.Г. Алиева',
		mapImg: 'https://www.google.com/maps/vt/data=tqsneeVjmR7t-H1NEcAcOG4IG7ZMOaonwAkToUBCjEMIcWrpNjiPY99EmgeaeNfswtOQ7d7bcBFddMhpJkNBN_7QNMNfx8bfdLGQKuHfffUDYXBXOlb1aK2ojgA5bWhLPPeH-pTaw0pNgInkK101vGMO7OuR5lcTqcEqnxatRoBm&w=184&h=80'
            },
                        23: {
                title: 'Парк Ичеришехер',
                img: 'img/parks/icheri-park.jpg',
                desc: '🏰 **Зелёные оазисы внутри древних стен.**\n\nПарк Ичеришехер — небольшие скверы и зелёные уголки внутри Старого города, среди каменных стен и узких улиц.\n\n**Особенности:**\n* сочетание средневековой архитектуры и зелени;\n* уютные лавочки в тени стен;\n* рядом — Девичья башня и Дворец Ширваншахов.\n\nИдеальное место, чтобы отдохнуть во время прогулки по Ичери Шехер.',
                mapQuery: 'Old City Baku',
                mapImg: 'https://www.google.com/maps/vt/data=76NW956p_CrhrOzQnR8iaYmePgGwV02v8MZWBHZRzxvhXjvf8kTGcI1C4gd3uJ8R5LgMSDqAEzsJzYz5Tl0UB9ru9kSfthaC-4dKGwi1lnxHa3ZGSDM3BfeJ8nNqG5671XyUnGG9khzj-rUjYAX4wxEhlFglfgP2LTPXNRSeNBY3&w=279&h=160'
            },

            // --- малый Кавказ ---
            101: {
                title: 'Ханбулан',
                img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Xanbulan_reservoir.jpg',
                desc: '🏞️ Место, где горы встречаются с водой.\n\nХанбуланское водохранилище и окружающие его леса — одно из самых живописных мест юга Азербайджана. Здесь горный воздух смешивается с запахом влажных субтропиков, а вода отражает зелёные склоны и туманные вершины.\n\nЧто вас ждёт:\n• Прогулки вдоль берега водохранилища с видами на горные склоны.\n• Фотографии на фоне водной глади и хвойно-лиственных лесов.\n• Атмосфера уединения: сюда редко добираются большие туристические группы.\n\nСовет: приезжайте ближе к вечеру — мягкий свет заката делает пейзаж особенно кинематографичным.',
                mapQuery: 'Xanbulan reservoir, Lankaran, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            102: {
                title: 'Лерик',
                img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Lerik_mountains.jpg',
                desc: '⛰️ Город долгожителей в облаках.\n\nЛерик — горный район в Талышских горах, известный мягким климатом, чистым воздухом и длинной жизнью местных жителей. Уже сама дорога в Лерик — это серпантины, ущелья и облака, лежащие прямо под ногами.\n\nЧто вы увидите:\n• Глубокие долины и хребты Талышских гор, утопающие в тумане.\n• Горные сёла с каменными домами и террасными садами.\n• Небольшой музей долгожителей и атмосферу неторопимой горной жизни.\n\nЛерик — идеальное место, чтобы почувствовать, как меняется воздух и рельеф по мере подъёма всё выше и выше.',
                mapQuery: 'Lerik, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            
            104: {
                title: 'Водопад Сим',
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/9d/e7/fe/caption.jpg?w=1200&h=1200&s=1',
                desc: '💧 Водопад Сим в Талышских горах.\n\nВодопад Сим расположен недалеко от одноимённого села в Лерикском районе. Поток воды падает по узкому ущелью среди леса, создавая прохладный туман и характерный шум, который слышно ещё задолго до подхода.\n\nЧто вас ждёт:\n• Лесная тропа, ведущая к водопаду через тенистые участки и каменные уступы;\n• Скалы и зелёные склоны вокруг, создающие ощущение уединённого уголка природы;\n• Возможность отдохнуть у воды и сделать эффектные фотографии на фоне каскада.\n\nПрактические советы:\n• Лучше всего приезжать поздней весной или летом, когда воды больше и тропы уже просохли.\n• Обувь — с хорошим сцеплением: камни у воды могут быть мокрыми и скользкими.\n• Не забывайте о базовых правилах безопасности в горах и не подходите слишком близко к краю обрывов.',
                mapQuery: 'Sim waterfall, Lerik, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
                        // --- Большой Кавказ ---
            111: {
                title: 'Семь красавиц',
                img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seven_Beauties_waterfall_Azerbaijan.jpg',
                desc: '💧 Водопад «Семь красавиц» возле Габалы.\n\nСерия каскадов, спрятанных в лесистом ущелье. Летом сюда приезжают, чтобы уйти от жары в тень деревьев и прохладный туман от воды.\n\nЧто вас ждёт:\n• Узкая горная тропа, ведущая к каскадам;\n• Несколько уровней водопада с небольшими площадками для отдыха и фото;\n• Атмосфера «дикой» природы всего в нескольких километрах от города.\n\nОбувь лучше брать с нескользкой подошвой: камни у воды мокрые и покрыты мхом.',
                mapQuery: 'Seven Beauties waterfall, Gabala, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            112: {
                title: 'Водопад Рам-рама (Илису)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Ram-Rama_waterfall_Ilisu_Azerbaijan.jpg',
                desc: '🌊 Высокий горный водопад у села Илису.\n\nРам-рама — один из самых впечатляющих водопадов северо-запада Азербайджана. Вода падает с большой высоты по отвесной скале, образуя облако брызг у подножия.\n\nОсобенности:\n• Живописная дорога через село Илису и долину реки;\n• Традиционная горная архитектура по пути;\n• Сильный шум воды и ощущение мощи природы.\n\nЛучшее время для посещения — поздняя весна и начало лета, когда водопад особенно полноводен.',
                mapQuery: 'Ram-Rama waterfall, Ilisu, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            113: {
                title: 'Водопад Хал-Хал',
                img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Khal-Khal_waterfall_Azerbaijan.jpg',
                desc: '💦 Изумрудное ущелье и прохладная вода.\n\nВодопад Хал-Хал находится в живописном ущелье недалеко от дороги, соединяющей Ленкорань с горными сёлами. Узкий поток воды падает в небольшую чашу с бирюзовой водой.\n\nЧто здесь интересно:\n• Лесистые склоны и каменные уступы вокруг водопада;\n• Небольшие естественные ванночки в камне;\n• Прохлада ущелья даже в жаркий день.\n\nБудь аккуратен на мокрых камнях — они часто скользкие из-за мха.',
                mapQuery: 'Khal-Khal waterfall, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            114: {
                title: 'Водопад Лаза',
                img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Laza_waterfalls_Azerbaijan.jpg',
                desc: '🏞 Водопады села Лаза в Гусарском районе.\n\nСело Лаза окружено скалами, по которым стекает несколько водопадов. Зимой они частично замерзают, превращаясь в ледяные стены, а летом радуют зеленью и шумом воды.\n\nОсобенности Лазы:\n• Несколько водопадов разной высоты прямо у села;\n• Виды на хребты Большого Кавказа;\n• Зимой — место для ледолазания, летом — для пеших прогулок.\n\nЛаза — отличная точка, чтобы увидеть высокогорную жизнь и природу Гусарского района.',
                mapQuery: 'Laza village, Gusar, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            115: {
                title: 'Шахдаг',
                img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Shahdag_mountain_resort.jpg',
                desc: '🎿 Горнолыжный курорт и национальный парк.\n\nШахдаг — один из самых известных горных курортов Азербайджана. Зимой сюда приезжают кататься на лыжах и сноуборде, а летом — наслаждаться прохладой и панорамными видами.\n\nЧто вы найдёте:\n• Современные подъёмники и трассы разной сложности;\n• Высокогорные виды и смотровые площадки;\n• Близость к национальному парку «Шахдаг» с тропами и дикой природой.\n\nПодходит и для активного отдыха, и для спокойных прогулок по горам.',
                mapQuery: 'Shahdag Mountain Resort, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            116: {
                title: 'Туфандаг',
                img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Tufandag_mountain_resort_Gabala.jpg',
                desc: '🚡 Горный курорт над Габалой.\n\nТуфандаг — это система канатных дорог и трасс, поднимающихся над городом Габала. Отсюда открываются виды на лесистые хребты и долину.\n\nОсобенности Туфандага:\n• Длинные канатные дороги с панорамными кабинами;\n• Зимой — трассы для катания, летом — прогулки и фотосессии;\n• Можно совместить посещение с поездкой к озеру Нохур Гёль и водопаду «Семь красавиц».\n\nПодъём по канатной дороге — уже отдельное впечатление, даже без катания на лыжах.',
                mapQuery: 'Tufandag Mountain Resort, Gabala, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            117: {
                title: 'Озеро Нохур Гёль',
                img: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Nohur_gol_lake_Gabala.jpg',
                desc: '🌅 Спокойное горное озеро возле Габалы.\n\nНохур Гёль — искусственное озеро, окружённое горами и лесами. Здесь можно покататься на лодке, сделать красивые фотографии и просто отдохнуть у воды.\n\nЧто здесь есть:\n• Прогулочные лодки и катамараны;\n• Береговые зоны с кафе и видами на горы;\n• Тихая атмосфера, особенно по утрам и в будние дни.\n\nОзеро Нохур Гёль — идеальное место для расслабленной остановки во время путешествия по региону Габалы.',
                mapQuery: 'Nohur Gol lake, Gabala, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
                        // --- Малый Кавказ ---
            118: {
                title: 'Истису (Кельбаджар)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Istisu_Kalbajar_hot_springs.jpg',
                desc: '♨️ Горячие источники в сердце Малого Кавказа.\n\nИстису в Кельбаджаре — знаменитый бальнеологический курорт, окружённый высокими горами и густыми лесами. Минеральная вода с различной температурой здесь выходит на поверхность естественным образом и используется для лечения уже много десятилетий.\n\nЧто вы увидите:\n• Термальные источники и бассейны с минеральной водой;\n• Горные склоны и реки, создающие особый микроклимат;\n• Остатки старой курортной инфраструктуры и новые проекты восстановления.\n\nИстису идеально подходит для тех, кто хочет совместить горную поездку и оздоровительный отдых.',
                mapQuery: 'Istisu, Kalbajar, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            119: {
                title: 'Нафталан',
                img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Naftalan_oil_bath.jpg',
                desc: '🛢 Город лечебной нефти.\n\nНафталан — уникальный курортный город, известный своими нефтьевыми ваннами. Специальный вид нефти (нафталан) используется здесь в медицинских целях при лечении кожных, суставных и нервных заболеваний.\n\nОсобенности Нафталана:\n• Санатории и клиники с программами лечения нафталановой нефтью;\n• Спокойная курортная атмосфера, рассчитанная на длительное пребывание;\n• Сочетание процедур с прогулками по окрестностям Малого Кавказа.\n\nНафталан — это больше лечебное направление, чем классический туристический маршрут, но именно здесь можно ощутить «нефть как лекарство».',
                mapQuery: 'Naftalan, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            120: {
                title: 'Туршсу',
                img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Turshsu_valley_near_Shusha.jpg',
                desc: '⛰ Горная долина и минеральные источники возле Шуши.\n\nТуршсу — живописная долина с рекой и минеральными источниками, расположенная недалеко от города Шуша. В советское время здесь работал популярный курорт, а сегодня место постепенно возрождается.\n\nЧто здесь особенно:\n• Холодная горная река и зелёные склоны ущелья;\n• Остатки старой курортной инфраструктуры среди природы;\n• Близость к историческому городу Шуша, что позволяет совместить культурный и природный туризм.\n\nТуршсу — хорошая точка для прогулок и пикников после посещения Шуши.',
                mapQuery: 'Turshsu, Shusha, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            121: {
                title: 'Дарыдаг',
                img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Daridag_radon_springs_Nakhchivan.jpg',
                desc: '☢ Радоновые источники Нахчывана.\n\nДарыдаг — район радоновых минеральных источников в Нахчыванской Автономной Республике. Вода здесь содержит природный радон и другие минералы, благодаря чему источники используются для лечения определённых заболеваний.\n\nОсобенности Дарыдага:\n• Специализированные лечебные маршруты и процедуры;\n• Гористый ландшафт с сухим континентальным климатом;\n• Удалённость от больших городов и тишина высокогорья.\n\nПоездка сюда обычно планируется как часть оздоровительного тура по Нахчывану.',
                mapQuery: 'Daridag, Nakhchivan, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            122: {
                title: 'Бадамлы',
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Badamli_mineral_water_Nakhchivan.jpg',
                desc: '🥤 Родина знаменитой минеральной воды.\n\nБадамлы — посёлок и курорт в Нахчыване, известный своим источником минеральной воды «Badamlı». Вода разливается по бутылкам и продаётся по всему Азербайджану, а на месте можно попробовать её прямо из источника.\n\nЧто вас ждёт:\n• Горный посёлок с чистым воздухом и тишиной;\n• Завод и источники минеральной воды;\n• Возможность совместить посещение с поездкой в Дарыдаг и другие места Нахчывана.\n\nБадамлы понравится тем, кто интересуется не только природой, но и тем, как местные ресурсы превращаются в известный бренд.',
                mapQuery: 'Badamli, Nakhchivan, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            },
            123: {
    title: 'Озеро Гёльгёль',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Goygol_lake_Azerbaijan.jpg',
    desc: '🌊 Голубое озеро в горах Малого Кавказа.\n\n' +
          'Озеро Гёльгёль (Гёйгёль) — одно из самых живописных озёр Азербайджана, ' +
          'расположенное на склонах Малого Кавказа недалеко от города Гянджа. ' +
          'Озеро образовалось в результате древнего землетрясения и оползня, ' +
          'который перекрыл русло реки, создав естественную водную чашу необычной формы.\n\n' +
          'Особенности озера:\n' +
          '• Вода имеет насыщенный голубой цвет, особенно яркий в солнечную погоду.\n' +
          '• Вокруг озера — густые леса, горные склоны и тропы для прогулок.\n' +
          '• Территория входит в национальный парк, поэтому здесь довольно спокойно и аккуратно.\n\n' +
          'Чем заняться на Гёльгёле:\n' +
          '• Прогуляться вдоль берега по оборудованным дорожкам и смотровым площадкам.\n' +
          '• Сделать фотографии с видами на воду и горные хребты Малого Кавказа.\n' +
          '• Совместить поездку к озеру с посещением города Гянджа и окрестных достопримечательностей.\n\n' +
          'Практические советы:\n' +
          '• Лучше приезжать в тёплый сезон — с поздней весны до начала осени, когда природа вокруг особенно зелёная.\n' +
          '• Возьмите удобную обувь для прогулок и тёплую одежду на вечер — в горах может быть прохладно.\n' +
          '• Уважайте природный парк: не бросайте мусор и не заходите за ограждения и запретные зоны.',
    mapQuery: 'Goygol lake, Azerbaijan',
    mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
},

            124: {
                title: 'Водопад Галабин',
                img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKWGHG5LCwYCyS9Xr_kiseL1CD7CvWVtwa5AP1MfihOM1j2PnsPqYns_0GF2Vxn6uij62wR0yRb8bDJ2FHHLhZcDvR79h8dHeLiB4x6mzJFt_xB7Z6rSVCthb_tZapf6bGZQCyksOjZbY/s1600/DSC04143-01-01.jpeg',
                desc: '💧 Горный водопад Галабин.\n\nВодопад Галабин — живописный каскад в горах Малого Кавказа. Поток воды обрывается с высоты по скальным уступам и теряется среди камней и зелени у подножия.\n\nЧто вас ждёт:\n• Узкая горная тропа, ведущая к водопаду сквозь лес и каменные осыпи;\n• Шум воды, отражающийся от скал, и прохладный воздух даже в жаркие дни;\n• Хорошие места для фотографий и короткого отдыха у воды.\n\nЛучше всего приезжать в тёплый сезон, когда уровень воды высокий, но тропы уже сухие. Обувь — только с хорошим сцеплением: камни у воды могут быть мокрыми и скользкими.',
                mapQuery: 'Galabin waterfall, Azerbaijan',
                mapImg: 'https://www.google.com/maps/vt/data=CxKlPKtzZIcLz-exItNItL21lhu61Jm2vWWCWwVTraWD5gZ9o05wceicWk8YYwwuioBGD1iKHjPGw3iARD6v9EetjdCYiwu2BCWhhPkBHhvUDvLzeA5w0bXTwlYZRLOOGU2lK2rTTFkD5aiVV6z3wzB8DT-1G77rvJ-8JWlVf8NoHzHFnTWMTcz6EZk-qP6XbDsCy5dz13lKpHnT'
            }
        };
        
        // Обновление блока авторизации в шапке
function updateHeader(name) {
    const authContainer = document.getElementById('authContainer');
    if (!authContainer) return;

    authContainer.innerHTML = `
        <span class="header-user">Привет, ${name}!</span>
        <button class="header-link header-link-auth" onclick="handleLogout()">
            Выход
        </button>
    `;
}

        let activeUser = localStorage.getItem('userName');
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; 
let isFilterActive = false; 
let cart = []; // Корзина всегда пустая при загрузке
let visitedPlaces = JSON.parse(localStorage.getItem('visitedPlaces')) || [];


function isUserLoggedIn() {
    // если activeUser уже есть в памяти — используем его
    if (activeUser) return true;

    // если страницы перезагрузили, но в localStorage ещё есть userName → это тоже вход
    const storedName = localStorage.getItem('userName');
    return !!storedName;
}
// ---- Google Sheets через SheetDB (база пользователей) ----
const SHEETDB_URL = 'https://sheetdb.io/api/v1/u2urxb9c8voq9'; // сюда вставь URL от SheetDB
// Сохранить пользователя в Google-таблицу через SheetDB
async function saveUserToSheetDB(user) {
    try {
        await fetch(SHEETDB_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // SheetDB ожидает формат { "data": { ... } }
            body: JSON.stringify({ data: user })
        });
        // можно добавить console.log('Пользователь сохранён в Google Sheet');
    } catch (err) {
        console.error('Ошибка при сохранении в SheetDB:', err);
    }
}
// "База" пользователей (учебный вариант) — храним в localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}
// конфигурация достижений
const achievementsConfig = [
    {
        id: 'talysh',
        title: 'Талышские горы',
        desc: 'Посетите все ключевые точки Талышских гор.',
        medalImg: 'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?semt=ais_hybrid&w=740&q=80',        // ПОДСТАВЬ СВОЙ ПУТЬ К МЕДАЛИ
        requiredIds: [101, 102, 103, 104]
    },
    {
        id: 'bigCaucasus',
        title: 'Большой Кавказ',
        desc: 'Объездите самые известные места Большого Кавказа.',
        medalImg: 'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?semt=ais_hybrid&w=740&q=80',  // ПОДСТАВЬ СВОЙ ПУТЬ К МЕДАЛИ
        requiredIds: [111, 112, 113, 114, 115, 116, 117]
    },
    {
        id: 'smallCaucasus',
        title: 'Малый Кавказ',
        desc: 'Откройте для себя курорты и озёра Малого Кавказа.',
        medalImg: 'https://img.freepik.com/free-vector/award-medal-realistic-composition-with-isolated-image-medal-with-laurel-wreath-blank-background-vector-illustration_1284-66109.jpg?semt=ais_hybrid&w=740&q=80',// ПОДСТАВЬ СВОЙ ПУТЬ К МЕДАЛИ
        requiredIds: [118, 119, 120, 121, 122, 123, 124] // включая Галабин
    }
];

        function saveFavorites() {
            localStorage.setItem('favorites', JSON.stringify(favorites));
            document.getElementById('globalFavoriteFilter').innerText = `❤️ Избранное (${favorites.length})`;
        }

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton();
    renderCartButtonsState();
}
function saveVisitedPlaces() {
    localStorage.setItem('visitedPlaces', JSON.stringify(visitedPlaces));
}

function markPlaceVisited(id) {
    id = Number(id);
    if (!visitedPlaces.includes(id)) {
        visitedPlaces.push(id);
        saveVisitedPlaces();
    }
}

function getAchievementProgress(achievement) {
    const total = achievement.requiredIds.length;
    const visitedCount = achievement.requiredIds.filter(id => visitedPlaces.includes(id)).length;
    const completed = visitedCount === total;
    return { visitedCount, total, completed };
}

function updateCartButton() {
    const btn = document.getElementById('cartButton');
    if (!btn) return;
    // Считаем только товары с количеством > 0
    const count = cart.reduce((sum, item) => sum + Math.max(0, item.qty || 1), 0);
    btn.textContent = `🛒 Корзина (${count})`;
}

        let currentPaymentEventId = null; // можно объявить рядом с другими глобальными переменными

function goToPayment(id) {
    currentPaymentEventId = id;

    // Название события
    const eventData = eventsDB[id];
    const titleInput = document.getElementById('paymentEventTitle');
    if (titleInput) {
        titleInput.value = eventData && eventData.title ? eventData.title : `Событие №${id}`;
    }

    // Цена (берём из карточки .price)
    const amountEl = document.getElementById('paymentAmount');
    let amountText = '';
    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (card) {
        const priceSpan = card.querySelector('.price');
        if (priceSpan) {
            amountText = priceSpan.textContent.trim();
        }
    }
    if (amountEl) {
        amountEl.textContent = amountText
            ? `Сумма к оплате: ${amountText}`
            : 'Сумма к оплате: —';
    }

    // Открываем модал оплаты
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

        function toggleGlobalFavoritesFilter(button) {
            isFilterActive = !isFilterActive;
            
            if (isFilterActive) {
                button.classList.add('active');
                button.innerText = `❤️ Сбросить фильтр (${favorites.length})`;
            } else {
                button.classList.remove('active');
                button.innerText = `❤️ Избранное (${favorites.length})`;
            }

            document.querySelectorAll('.card').forEach(card => {
                const id = parseInt(card.dataset.id);
                if (isFilterActive) {
                    if (!favorites.includes(id)) {
                        card.classList.add('hide-favorite');
                    } else {
                        card.classList.remove('hide-favorite');
                    }
                } else {
                    card.classList.remove('hide-favorite');
                }
            });
        }
        
        function toggleFavorite(e, id) {
            e.stopPropagation(); 
            id = parseInt(id);
            const index = favorites.indexOf(id);
            
            if (index === -1) {
                favorites.push(id);
            } else {
                favorites.splice(index, 1);
            }
            
            saveFavorites();
            renderFavoritesState(); 
            
            if (isFilterActive) {
                // Двойной вызов для переключения фильтра и его обновления
                toggleGlobalFavoritesFilter(document.getElementById('globalFavoriteFilter'));
                toggleGlobalFavoritesFilter(document.getElementById('globalFavoriteFilter')); 
            }
        }

        function renderFavoritesState() {
            document.getElementById('globalFavoriteFilter').innerText = `❤️ Избранное (${favorites.length})`;

            document.querySelectorAll('.card').forEach(card => {
                const id = parseInt(card.dataset.id);
                const heartElement = document.getElementById(`heart-${id}`);
                
                if (heartElement) {
                    if (favorites.includes(id)) {
                        heartElement.innerText = '❤️';
                        card.querySelector('.favorite-toggle').classList.add('active');
                    } else {
                        heartElement.innerText = '♡';
                        card.querySelector('.favorite-toggle').classList.remove('active');
                    }
                }
            });
        }

function openInMaps(query) {
    if (!query) return;
    const url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
    window.open(url, '_blank');
}

        // --- ФУНКЦИИ МОДАЛЬНЫХ ОКОН ---
function showEventDetails(id) {
    const data = eventsDB[id];
    if (!data) return;

    markPlaceVisited(id);

    // Левая колонка: очищаем и наполняем картой + фото
    const modalImg = document.getElementById('modalImg');
    modalImg.innerHTML = '';

    // 1. Превью карты (если есть mapQuery — ДЛЯ ЛЮБЫХ id, в т.ч. гор)
    if (data.mapQuery) {
        const safeQuery = (data.mapQuery || '').replace(/'/g, "\\'");

        const mapHtml = `
            <div class="map-preview" onclick="openInMaps('${safeQuery}')">
                <div class="map-preview-header">Расположение на карте</div>
                <div class="map-preview-body"></div>
                <div class="map-preview-footer">
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285F4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                    <span>Открыть в Google Maps</span>
                </div>
            </div>
        `;

        const wrapper = document.createElement('div');
        wrapper.innerHTML = mapHtml.trim();
        const mapPreview = wrapper.firstChild;
        modalImg.appendChild(mapPreview);

        const previewBody = mapPreview.querySelector('.map-preview-body');
        if (previewBody) {
            if (data.mapImg) {
                previewBody.style.backgroundImage = "url('" + data.mapImg + "')";
            } else {
                previewBody.style.backgroundImage =
                    "url('https://maps.gstatic.com/tactile/pane/default_geocode-1x.png')";
            }
        }
    }

    // 2. Фото места (ТОЛЬКО ДЛЯ МУЗЕЕВ/ОБЪЕКТОВ, id < 101)
if (id < 101 && data.img) { // Добавили проверку на ID
    const photoDiv = document.createElement('div');
    photoDiv.className = 'event-photo';
    photoDiv.style.backgroundImage = "url('" + data.img + "')";
    modalImg.appendChild(photoDiv);
}
    // Заголовок и описание
    document.getElementById('modalTitle').innerText = data.title || '';
    document.getElementById('modalDesc').innerText = data.desc || '';

    // Кнопка "Добавить в корзину" – только для музеев/объектов (id < 101)
    const buyButton = document.getElementById('modalBuyButton');
    if (id >= 101 && id <= 124) {
        // для гор/природы — билеты не продаём
        buyButton.style.display = 'none';
    } else {
        buyButton.style.display = 'block';
        buyButton.textContent = 'Добавить в корзину';
        buyButton.onclick = function () {
            addToCart(id);
        };
    }

    document.getElementById('eventModal').style.display = 'flex';
}
// НОВАЯ версия
function handleLoginState() {
    if (activeUser) {
        updateHeader(activeUser);
    }
    renderFavoritesState();    // избранное
    updateCartButton();        // обновляем счётчик корзины в шапке
    renderCartButtonsState();  // обновляем кнопки "Добавить в корзину" / "- qty +"
}

async function handleAuthSubmit(e, type) {
    e.preventDefault();

    const form = e.target;

    // ---- РЕГИСТРАЦИЯ ----
    if (type === 'register') {
        const nameInput     = form.querySelector('#registerName');
        const emailInput    = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        const name     = nameInput.value.trim();
        const emailRaw = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const email    = emailRaw.toLowerCase();

        if (!name || !email || !password) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        if (users.some(u => u.email === email)) {
            alert('Пользователь с таким email уже зарегистрирован.');
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        saveUsers();

        // если используешь SheetDB, оставляй этот вызов, если нет — можешь удалить
        if (typeof saveUserToSheetDB === 'function') {
            saveUserToSheetDB({
                name,
                email,
                password,
                created_at: new Date().toISOString()
            });
        }

        activeUser = name;
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        updateHeader(name);
        document.getElementById('authModal').style.display = 'none';

        // ОТКРЫВАЕМ ЛИЧНЫЙ КАБИНЕТ НА ДОСТИЖЕНИЯХ
        switchProfileTab('achievements');
        openProfileModal();

        // alert можно оставить или убрать
        // alert(`Регистрация успешна! Добро пожаловать, ${name}.`);
        return;
    }

    // ---- ВХОД (логин) ----
    if (type === 'login') {
        const emailInput    = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        const emailRaw = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const email    = emailRaw.toLowerCase();

        if (!email || !password) {
            alert('Пожалуйста, заполните email и пароль.');
            return;
        }

        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert('Неверный email или пароль.');
            return;
        }

        activeUser = user.name;
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);

        updateHeader(user.name);
        document.getElementById('authModal').style.display = 'none';

        // ОТКРЫВАЕМ ЛИЧНЫЙ КАБИНЕТ НА ДОСТИЖЕНИЯХ
        switchProfileTab('achievements');
        openProfileModal();

        return;
    }
}

        function handleLogout() {
    localStorage.removeItem('userName');
    activeUser = null;
    const authContainer = document.getElementById('authContainer');
    authContainer.innerHTML = `
        <button class="header-link header-link-auth" onclick="openAuth('login')">
            Вход / Регистрация
        </button>`;
    alert('Вы вышли из аккаунта.');
}
function googleLogin() {
    const googleName = 'Google пользователь';

    // сохраняем "пользователя"
    activeUser = googleName;
    localStorage.setItem('userName', googleName);
    // при желании можешь добавить email
    // localStorage.setItem('userEmail', 'google@example.com');

    // обновляем шапку
    updateHeader(googleName);

    // закрываем модалку авторизации
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.style.display = 'none';
    }

    // Больше НИЧЕГО не открываем автоматически.
    // Пользователь сам нажмёт на иконку профиля, чтобы посмотреть достижения.
}
function changeCartQty(id, delta) {
    id = Number(id);
    const item = cart.find(it => it.id === id);
    if (!item) return;

    item.qty = (item.qty || 1) + delta;

    if (item.qty <= 0) {
        // убрать из корзины, если стало 0
        cart = cart.filter(it => it.id !== id);
    }

    saveCart();
    renderCartModal();
}

// полное удаление позиции (по крестику в корзине)
function removeFromCart(id) {
    id = Number(id);
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCartModal();
}

// отрисовка кнопок на карточках: "Добавить" или "- 3 +"
function renderCartButtonsState() {
    document.querySelectorAll('.card').forEach(card => {
        const id = parseInt(card.dataset.id);
        if (!id || id >= 101) return; // в еде корзины нет

        const btn = card.querySelector('.card-footer .btn-main');
        if (!btn) return;

        const item = cart.find(it => it.id === id);

        if (!item) {
            // товара нет в корзине — обычная кнопка
            btn.innerHTML = 'Добавить в корзину';
            btn.onclick = function (e) {
                e.stopPropagation();
                addToCart(id);
            };
        } else {
            const qty = item.qty || 1;

            btn.innerHTML = `
                <div class="qty-control">
                    <button type="button" class="qty-btn qty-minus">−</button>
                    <span class="qty-value">${qty}</span>
                    <button type="button" class="qty-btn qty-plus">+</button>
                </div>
            `;
            // отключаем клик по всей кнопке
            btn.onclick = function (e) {
                e.stopPropagation();
            };

            const minus = btn.querySelector('.qty-minus');
            const plus = btn.querySelector('.qty-plus');

            minus.onclick = function (e) {
                e.stopPropagation();
                changeCartQty(id, -1);
            };
            plus.onclick = function (e) {
                e.stopPropagation();
                changeCartQty(id, 1);
            };
        }
    });
}

function openCartModal() {
    renderCartModal();
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeCartModalOutside(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCartModal();
    }
}

function renderCartModal() {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotal');
    if (!container || !totalEl) return;

    container.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty">В корзине пока пусто.</div>';
        totalEl.textContent = '';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const qty = item.qty || 1;
        const itemTotal = (item.price || 0) * qty;
        total += itemTotal;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${itemTotal ? itemTotal + ' ₼ (x' + qty + ')' : '—'}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        `;
        container.appendChild(row);
    });

    totalEl.textContent = `Итого: ${total} ₼`;
}

function openCartPayment() {
    if (cart.length === 0) {
        alert('Ваша корзина пуста.');
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const qty = item.qty || 1;
        total += (item.price || 0) * qty;
    });

    const titleInput = document.getElementById('paymentEventTitle');
    if (titleInput) {
        const count = cart.reduce((sum, i) => sum + (i.qty || 1), 0);
        titleInput.value = `Корзина: ${count} билет(ов)`;
    }
    const amountEl = document.getElementById('paymentAmount');
    if (amountEl) {
        amountEl.textContent = `Сумма к оплате: ${total} ₼`;
    }

    closeCartModal();

    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

        function openAuth(type) {
            showAuthTab(type);
            document.getElementById('authModal').style.display = 'flex';
        }
        function closeModals(e) {
            if (e.target.classList.contains('modal')) { e.target.style.display = 'none'; }
        }
        function showAuthTab(tabName) {
            document.querySelectorAll('.form-container').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.getElementById(tabName + 'Form').classList.add('active');
            document.querySelector(`.tab-button[onclick="showAuthTab('${tabName}')"]`).classList.add('active');
        }

        function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    if (!('IntersectionObserver' in window)) {
        hero.classList.add('hero-animate');
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hero.classList.add('hero-animate');
                } else {
                    hero.classList.remove('hero-animate');
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(hero);
}

/* Анимация появления для всех section-header и карточек .card */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .card');
    if (!elements.length) return;

    // навешиваем базовый класс анимации
    elements.forEach(el => el.classList.add('animate-on-scroll'));

    // если IntersectionObserver не поддерживается — просто показываем всё
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // убираем класс, чтобы при возвращении анимация повторялась
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.25 });

    elements.forEach(el => observer.observe(el));
}
function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;

    container.innerHTML = '';

    // если пользователь НЕ вошёл — просто текст и выходим
    if (!isUserLoggedIn()) {
        container.innerHTML = `
            <p style="margin: 0 0 8px; font-size: 14px; color: #555;">
                Чтобы просматривать и накапливать достижения,
                пожалуйста, войдите в свой аккаунт.
            </p>
            <p style="margin: 0; font-size: 13px; color: #777;">
                Нажмите «Вход / Регистрация» в верхней части сайта,
                а затем снова откройте вкладку «Мои достижения».
            </p>
        `;
        return;
    }

    // здесь гарантировано, что пользователь авторизован → показываем достижения
    achievementsConfig.forEach(ach => {
        const { visitedCount, total, completed } = getAchievementProgress(ach);

        const card = document.createElement('div');
        card.className = 'achievement-card' + (completed ? ' achieved' : '');

        card.innerHTML = `
            <div class="achievement-medal">
                <img src="${ach.medalImg}" alt="${ach.title}">
            </div>
            <div class="achievement-info">
                <h3>${ach.title}</h3>
                <p>${ach.desc}</p>
                <div class="achievement-progress">
                    <span>${visitedCount} / ${total} мест посещено</span>
                    <span class="achievement-status">
                        ${completed ? 'Достижение получено' : 'В процессе'}
                    </span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}
function getProfileData() {
    const name = activeUser || localStorage.getItem('userName') || 'Гость';
    return { name };
}

function renderProfileData() {
    const container = document.getElementById('profileDataContainer');
    if (!container) return;

    const { name } = getProfileData();

    if (!activeUser) {
        container.innerHTML = `
            <p>Вы ещё не вошли в аккаунт.</p>
            <p>Войдите или зарегистрируйтесь, чтобы видеть личные данные и накапливать достижения.</p>
        `;
        return;
    }

    container.innerHTML = `
        <p><strong>Имя:</strong> ${name}</p>
        <p style="font-size:13px;color:#666;">
            Добро пожаловать.</p>
    `;
}

function renderAchievementDiscounts() {
    const container = document.getElementById('discountsContainer');
    if (!container) return;

    if (!activeUser) {
        container.innerHTML = `
            <p>Чтобы получать скидки за достижения, войдите в аккаунт.</p>
        `;
        return;
    }

    const completed = achievementsConfig.filter(a => getAchievementProgress(a).completed);
    if (!completed.length) {
        container.innerHTML = `
            <p>Пока у вас нет полностью выполненных достижений.</p>
            <p>Выполните достижения «Талышские горы», «Большой Кавказ» и «Малый Кавказ», чтобы получить скидки по 5 ₼ за каждое.</p>
        `;
        return;
    }

    const totalDiscount = completed.length * 5;

    let html = `<p><strong>Ваши активные скидки:</strong> ${totalDiscount} ₼ (по 5 ₼ за каждое достижение)</p>`;
    html += '<ul style="margin:8px 0 0; padding-left:18px; font-size:13px; color:#555;">';
    completed.forEach(a => {
        html += `<li>Достижение «${a.title}» — скидка 5 ₼</li>`;
    });
    html += '</ul>';

    container.innerHTML = html;
}

function switchProfileTab(tab) {
    const sections = {
        data: document.getElementById('profileDataSection'),
        discounts: document.getElementById('profileDiscountsSection'),
        achievements: document.getElementById('profileAchievementsSection')
    };

    // показываем нужную секцию
    Object.keys(sections).forEach(key => {
        if (sections[key]) {
            sections[key].classList.toggle('active', key === tab);
        }
    });

    // подсветка активной кнопки
    document.querySelectorAll('.profile-tab').forEach(btn => {
        const btnTab = btn.getAttribute('data-tab');
        btn.classList.toggle('active', btnTab === tab);
    });

    // рендер содержимого
    if (tab === 'data') {
        renderProfileData();
    } else if (tab === 'discounts') {
        renderAchievementDiscounts();
    } else if (tab === 'achievements') {
        renderAchievements();
    }
}
function updateDarkToggleText() {
    const btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.title = isDark ? 'Светлая тема' : 'Тёмная тема';
}

function applyThemeFromStorage() {
    const saved = localStorage.getItem('theme') || 'light';
    const isDark = saved === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    updateDarkToggleText();
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkToggleText();
}

// Плавное "печатание" текста по буквам
function typeText(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';

    function step() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(step, speed);
        } else if (typeof callback === 'function') {
            callback();
        }
    }

    step();
}
window.addEventListener('load', () => {
    // стандартная инициализация сайта
    handleLoginState();
    initHeroAnimation();
    initScrollAnimations();
    applyThemeFromStorage();

    const titleEl   = document.getElementById('introTitle');
    const taglineEl = document.getElementById('introTagline');
    const overlay   = document.getElementById('introOverlay');

    if (!titleEl || !taglineEl || !overlay) {
        // если интро-элементы не нашлись — просто показываем сайт
        document.body.classList.remove('intro-running');
        document.body.classList.add('intro-finished');
        if (overlay) overlay.style.display = 'none';
        return;
    }

    // Тексты
    const fullTitleHTML = '<span class="intro-title-mark">AZ</span> Travel';
    const fullTagline   = 'Путешествуй по горам и культуре Азербайджана';

    // Сразу ставим текст
    titleEl.innerHTML     = fullTitleHTML;
    taglineEl.textContent = fullTagline;

    // Небольшая задержка, чтобы сработали CSS-переходы
    setTimeout(() => {
        // Плавный "выезд" заголовка слева и появление
        titleEl.classList.add('intro-title-visible');
    }, 50);

    // Через ~1.2 сек. чуть поднимаем заголовок и показываем слоган
    setTimeout(() => {
        titleEl.classList.add('intro-title-shift-up');
        taglineEl.classList.add('intro-tagline-visible');
    }, 1200);

    // Время, когда начинаем гасить интро
    const startFadeOutAt = 2700;      // когда закончились движения текста
    const fadeDuration   = 800;       // совпадает с transition в CSS

    // 1) Сначала начинаем мягко прятать интро
    setTimeout(() => {
        overlay.classList.add('hide');
    }, startFadeOutAt);

    // 2) И только после завершения плавного исчезновения показываем сайт
    setTimeout(() => {
        document.body.classList.remove('intro-running');
        document.body.classList.add('intro-finished');
        overlay.style.display = 'none';
    }, startFadeOutAt + fadeDuration + 50); // +50 мс небольшой запас
});
    const regionsInfo = {
    talysh: {
        title: 'Талышские горы',
        text: 'Талышские горы — южная горная система Азербайджана, покрытая густыми лесами и облачными вершинами. Климат здесь более влажный и мягкий, чем на севере страны, поэтому регион славится субтропической растительностью.\n\nЧто делает Талышские горы особенными:\n• Сочетание субтропических лесов и горных хребтов.\n• Горные сёла (Лерик, Ханбулан, Сим и др.), где сохранился традиционный уклад жизни.\n• Источники, водопады и смотровые точки с видами на облачные долины.\n\nТалышские горы — идеальное направление для тех, кто любит зелень, влажный горный воздух и не слишком экстремальные высоты.'
    },
    bigCaucasus: {
        title: 'Большой Кавказ',
        text: 'Большой Кавказ — это северные горные районы Азербайджана: Губа, Гусар, Габала и другие регионы у подножия высочайших вершин страны. Здесь находятся известные курорты Шахдаг и Туфандаг, водопады Лаза и «Семь красавиц», озеро Нохур Гёль.\n\nОсобенности Большого Кавказа:\n• Высокие хребты и скалистые вершины, покрытые снегом значительную часть года.\n• Горнолыжные и всесезонные курорты с развитой инфраструктурой.\n• Множество водопадов, каньонов, альпийских лугов и высокогорных сёл.\n\nБольшой Кавказ подойдёт тем, кто любит более суровые горы, панорамные виды и активный отдых: треккинги, лыжи, сноуборд, подъёмники и смотровые площадки.'
    },
    smallCaucasus: {
        title: 'Малый Кавказ',
        text: 'Малый Кавказ охватывает западные и юго‑западные районы Азербайджана, включая Кельбаджар, Гёйгёль, Нафталан и Нахчыван. Здесь находятся термальные и радоновые источники (Истису, Дарыдаг), знаменитые минеральные воды (Бадамлы) и живописные горные озёра (Гёльгёль).\n\nЧто характерно для Малого Кавказа:\n• Более мягкий рельеф по сравнению с Большим Кавказом, но не менее живописные долины и ущелья.\n• Сильная «курортная» составляющая: лечебные воды, санатории, оздоровительные маршруты.\n• Богатая история: города Шуша, Гянджа и другие культурные центры региона.\n\nМалый Кавказ особенно интересен тем, кто хочет совместить горные пейзажи с оздоровлением и посещением исторических мест.'
    }
};

function openRegionInfo(key) {
    const info = regionsInfo[key];
    if (!info) return;
    const modal = document.getElementById('regionModal');
    const titleEl = document.getElementById('regionModalTitle');
    const bodyEl  = document.getElementById('regionModalBody');

    if (titleEl) titleEl.innerText = info.title;
    if (bodyEl)  bodyEl.innerText  = info.text;
    if (modal)   modal.style.display = 'flex';
}

function closeRegionModal() {
    const modal = document.getElementById('regionModal');
    if (modal) modal.style.display = 'none';
}

function closeRegionModalOutside(event) {
    const modal = document.getElementById('regionModal');
    if (event.target === modal) {
        closeRegionModal();
    }
}
function openSupportModal() {
    document.getElementById('supportModal').style.display = 'flex';
}

function closeSupportModal() {
    document.getElementById('supportModal').style.display = 'none';
}

function closeSupportModalOutside(event) {
    const modal = document.getElementById('supportModal');
    if (event.target === modal) {
        closeSupportModal();
    }
}
function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function handlePaymentModalBackgroundClick(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        closePaymentModal();
    }
}

function submitPayment(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardName   = document.getElementById('cardName').value.trim();
    const cardExpiry = document.getElementById('cardExpiry').value.trim();
    const cardCvc    = document.getElementById('cardCvc').value.trim();
    const titleInput = document.getElementById('paymentEventTitle');
    const eventTitle = titleInput ? titleInput.value : '';

    if (!cardNumber || !cardName || !cardExpiry || !cardCvc) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    alert(`Демонстрация: оплата билета "${eventTitle}" прошла успешно!`);

    document.getElementById('paymentForm').reset();
    closePaymentModal();
}
function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'flex';
}
function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}
function closeAboutModalOutside(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target === modal) {
        closeAboutModal();
    }
}

function openFaqModal() {
    document.getElementById('faqModal').style.display = 'flex';
}
function closeFaqModal() {
    document.getElementById('faqModal').style.display = 'none';
}
function closeFaqModalOutside(event) {
    const modal = document.getElementById('faqModal');
    if (event.target === modal) {
        closeFaqModal();
    }
}

function openSocialModal() {
    document.getElementById('socialModal').style.display = 'flex';
}
function closeSocialModal() {
    document.getElementById('socialModal').style.display = 'none';
}
function closeSocialModalOutside(event) {
    const modal = document.getElementById('socialModal');
    if (event.target === modal) {
        closeSocialModal();
    }
}
function toggleBurgerMenu() {
    const menu = document.getElementById('burgerMenu');
    if (!menu) return;
    menu.classList.toggle('open');
}
function toggleBurgerSection(name) {
    const group = document.querySelector('.burger-group[data-section="' + name + '"]');
    if (!group) return;
    const submenu = group.querySelector('.burger-submenu');
    submenu.classList.toggle('open');
    group.classList.toggle('open');
}

function scrollToSection(e, id) {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    // плавный скролл к нужному блоку
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // закрываем меню после перехода
    toggleBurgerMenu();
}function openProfileModal() {
    // если есть функция отрисовки достижений – вызываем
    if (typeof renderAchievements === 'function') {
        renderAchievements();
    }

    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeProfileModalOutside(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        closeProfileModal();
    }
}
// --- ИИ‑помощник (демо-бот) ---

function openAiModal() {
    const modal = document.getElementById('aiModal');
    if (modal) modal.style.display = 'flex';
}

function closeAiModal() {
    const modal = document.getElementById('aiModal');
    if (modal) modal.style.display = 'none';
}

function closeAiModalOutside(event) {
    const modal = document.getElementById('aiModal');
    if (event.target === modal) {
        closeAiModal();
    }
}

// добавить сообщение в окно чата
function appendAiMessage(text, from = 'bot') {
    const chat = document.getElementById('aiChat');
    if (!chat) return;

    const div = document.createElement('div');
    div.className = 'ai-message ' + (from === 'user' ? 'ai-message-user' : 'ai-message-bot');
    div.textContent = text;
    chat.appendChild(div);

    // прокрутка вниз
    chat.scrollTop = chat.scrollHeight;
}

// обработка отправки сообщения
function handleAiMessage(e) {
    e.preventDefault();

    const input = document.getElementById('aiInput');
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    // выводим сообщение пользователя
    appendAiMessage(text, 'user');
    input.value = '';

    // имитация "подумал" и ответ
    setTimeout(() => {
        const reply = generateAiReply(text);
        appendAiMessage(reply, 'bot');
    }, 400);
}

// простая логика ответов по ключевым словам
function generateAiReply(text) {
    const lower = text.toLowerCase();

    if (lower.includes('музей') || lower.includes('museum')) {
        return 'Если вас интересуют музеи, откройте раздел «Музеи и выставки». Рекомендую Национальный музей истории, Музей ковра и Музей современного искусства.';
    }

    if (lower.includes('гора') || lower.includes('горы') || lower.includes('кавказ')) {
        return 'По горам у нас три направления: Талышские горы, Большой Кавказ и Малый Кавказ. Нажмите на название региона, чтобы увидеть описание и места.';
    }

    if (lower.includes('водопад')) {
        return 'Красивые водопады на сайте: Семь красавиц, Рам-рама, Хал-Хал, Лаза, Сим и Галабин. Загляните в разделы Большой и Малый Кавказ, а также Талышские горы.';
    }

    if (lower.includes('билет') || lower.includes('купить') || lower.includes('оплат') ) {
        return 'Чтобы купить билет: откройте карточку объекта, нажмите «Добавить в корзину», затем перейдите в корзину в шапке и нажмите «Перейти к оплате».';
    }

    if (lower.includes('избран')) {
        return 'Нажимайте на сердечко на карточках, чтобы добавлять места в избранное. В шапке есть фильтр «Избранное», который покажет только ваши любимые места.';
    }

    if (lower.includes('привет') || lower.includes('здравств') || lower.includes('hello')) {
        return 'Здравствуйте! Я помогу с навигацией по сайту: могу подсказать музеи, водопады, горные регионы или как купить билет.';
    }

    if (lower.includes('работает') || lower.includes('как пользоваться') || lower.includes('как пользоваться сайтом')) {
        return 'На главной странице вы видите карточки мест. Нажмите «Подробнее» чтобы прочитать описание, «Добавить в корзину» — чтобы купить билет (для музеев), сердечко — чтобы добавить в избранное.';
    }

    // ответ по умолчанию
    return 'Я пока умею помогать с основными вопросами: музеи, горы, водопады, билеты и избранное. Попробуйте задать вопрос по одной из этих тем.';
}
function addToCart(id) {
    id = Number(id);

    // Пропускаем природные объекты (горы, водопады и т.д.)
    if (id >= 101) {
        return; // просто выходим — ничего не делаем
    }

    const eventData = eventsDB[id];
    if (!eventData) {
        console.warn('Событие с ID', id, 'не найдено');
        return;
    }

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        // Извлекаем цену из .desc или задай её вручную (лучше — добавить price в DB)
        const priceMatch = eventData.desc.match(/(\d+)\s*₸/);
        const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

        cart.push({
            id: id,
            title: eventData.title,
            price: price,
            qty: 1
        });
    }

    saveCart();           // сохраняем в localStorage
    renderCartButtonsState(); // обновляем кнопки на карточках
}
// Текущий регион и событие, для которого открыт модал "Подробнее"
let currentEventRegion = null;
let currentEventId = null;

// Карта соответствия data-category -> наш внутренний ключ региона
const eventRegionByCategory = {
    'big-caucasus': 'bigCaucasus', // Большой Кавказ
    'small-caucasus': 'smallCaucasus', // Малый Кавказ
    'caucasus': 'talysh' // В твоей разметке этим тегом помечены Талышские горы
};

/* ==== Контент инструментов по регионам ==== */
const eventToolsData = {
    bigCaucasus: {
        pack: `
<h4>Собери рюкзак — маршруты Большого Кавказа</h4>
<p>Высоты 1500–3500 м, возможен снег и резкая смена погоды даже летом.</p>
<h4>Одежда</h4>
<ul>
  <li>Термобельё (верх/низ), быстросохнущие футболки.</li>
  <li>Флиска или лёгкий пуховик/утеплитель, шапка, бафф, тёплые перчатки.</li>
  <li>Мембранная куртка и штаны от дождя и ветра.</li>
  <li>Треккинговые штаны + тёплые штаны для вечера/ночёвок.</li>
  <li>Треккинговые ботинки с хорошим протектором, 2–3 пары треккинговых носков, при снегу — гамаши.</li>
</ul>
<h4>Питание</h4>
<ul>
  <li>Вода 1.5–2 л/день + фильтр или таблетки для очистки.</li>
  <li>Завтрак: овсянка/мюсли/каши быстрого приготовления.</li>
  <li>Перекусы: орехи, сухофрукты, батончики, шоколад.</li>
  <li>Обед: сыр, колбаса, хлебцы/лаваш, снэки.</li>
  <li>Ужин: сублиматы или крупы (гречка, рис, кускус) + консервы/соус.</li>
</ul>
<h4>Аптечка</h4>
<ul>
  <li>Пластыри, эластичный бинт, стерильные салфетки, лейкопластырь от мозолей.</li>
  <li>Антисептик, мазь от ран и ушибов.</li>
  <li>Обезболивающее/жаропонижающее, средство от диареи, сорбент.</li>
  <li>Солнцезащитный крем SPF 50+, бальзам для губ с SPF, репеллент от насекомых.</li>
  <li>Индивидуальные лекарства минимум на 2–3 дня.</li>
</ul>
<h4>Инвентарь</h4>
<ul>
  <li>Рюкзак 40–60 л, треккинговые палки.</li>
  <li>Налобный фонарь + батарейки, офлайн‑карты и повербанк 10 000–20 000 мА·ч.</li>
  <li>Палатка, спальник (комфорт −5…0 °C), коврик — для походов с ночёвкой.</li>
  <li>При снежных/ледовых участках — простые кошки, при необходимости ледоруб.</li>
  <li>Аварийное термоодеяло/«спасательная» плёнка.</li>
</ul>
        `,
        signal: `
<h4>Покрытие связи — Большой Кавказ</h4>
<ul>
  <li><strong>Нормальный 4G</strong> — города и крупные посёлки (Гусар, Габала, Шеки и др.), подъезды к курортам Шахдаг и Туфандаг.</li>
  <li><strong>Только 2G / слабый сигнал</strong> — многие горные деревни, глубокие ущелья, часть троп между сёлами.</li>
  <li><strong>Нет связи</strong> — высокогорные перевалы, снежные цирки, тесные ущелья и удалённые плато.</li>
</ul>
<p><strong>Рекомендации:</strong></p>
<ul>
  <li>Не рассчитывай на постоянный 4G — закладывай участки вообще без связи.</li>
  <li>Заранее скачай офлайн‑карты (Maps.me, Organic Maps, Google Maps офлайн).</li>
  <li>Сообщи близким маршрут и примерное время выхода на связь.</li>
  <li>Для серьёзных и многодневных маршрутов подумай о спутниковом трекере.</li>
</ul>
        `,
        weather: `
<h4>Погода по маршруту — Большой Кавказ</h4>
<p>Важно смотреть прогноз не только «в районе», но по трём ключевым точкам:</p>
<ul>
  <li><strong>Старт</strong> — долина или посёлок, теплее, меньше ветер.</li>
  <li><strong>Середина</strong> — долина/седловина/озеро, уже прохладнее, больше облаков и ветра.</li>
  <li><strong>Вершина / перевал</strong> — на 10–15 °C холоднее старта, сильный ветер, возможен снег даже летом.</li>
</ul>
<p>Для реального прогноза нужно подключить погодный API (например, OpenWeatherMap) по координатам старта, середины и вершины маршрута.</p>
<p><strong>Смотри в первую очередь:</strong> температуру «по ощущениям», ветер, вероятность осадков и гроз. При ветре &gt;10–12 м/с и осадках на вершине маршрут лучше упростить или перенести.</p>
        `
    },

    smallCaucasus: {
        pack: `
<h4>Собери рюкзак — маршруты Малого Кавказа</h4>
<p>Высоты 1500–3000 м, рельеф мягче, много плато и долин.</p>
<h4>Одежда</h4>
<ul>
  <li>Лёгкое термобельё в межсезонье, быстросохнущие футболки летом.</li>
  <li>Флиска/микрофлис, лёгкая тёплая куртка.</li>
  <li>Непромокаемая ветровка или мембранная куртка, лёгкие штаны с защитой от ветра.</li>
  <li>Треккинговые ботинки средней жёсткости, в сырую погоду — с хорошей влагозащитой.</li>
  <li>Кепка/панама, бафф, лёгкие перчатки.</li>
</ul>
<h4>Питание</h4>
<ul>
  <li>Базовый набор: каши, орехи, сухофрукты, батончики, сыр, хлебцы, ужин из круп/сублиматов.</li>
  <li>В некоторых районах можно пополнить запасы в сёлах, но лучше всегда иметь запас хотя бы на 1 день.</li>
</ul>
<h4>Аптечка</h4>
<ul>
  <li>Пластыри, бинт, антисептик, обезболивающее, средство от диареи.</li>
  <li>Препараты от аллергии (активное цветение весной/летом).</li>
  <li>Солнцезащитный крем и бальзам для губ с SPF.</li>
  <li>Индивидуальные лекарства.</li>
</ul>
<h4>Инвентарь</h4>
<ul>
  <li>Рюкзак 35–50 л.</li>
  <li>Спальник (комфорт около 0…+5 °C) и коврик — при ночёвках.</li>
  <li>Треккинговые палки, налобник, повербанк, нож/мультитул.</li>
  <li>Фильтр для воды/таблетки — часть ручьёв может быть загрязнена пастбищами.</li>
</ul>
        `,
        signal: `
<h4>Покрытие связи — Малый Кавказ</h4>
<ul>
  <li><strong>4G</strong> — города (Гянджа, Нафталан, Нахчыван и др.), крупные сёла и основные трассы.</li>
  <li><strong>2G / слабый сигнал</strong> — горные деревни и участки между основными дорогами.</li>
  <li><strong>Нет связи</strong> — перевалы, удалённые плато и глубокие ущелья.</li>
</ul>
<p><strong>Что учесть:</strong></p>
<ul>
  <li>На коротких прогулках связь обычно есть в начале и конце маршрута.</li>
  <li>На многодневных переходах закладывай 1–2 дня без связи.</li>
  <li>Скачай офлайн‑карты и заряди повербанк.</li>
</ul>
        `,
        weather: `
<h4>Погода по маршруту — Малый Кавказ</h4>
<p>Разница между городом внизу и плато/перевалами может быть большой, поэтому удобно смотреть прогноз по трём точкам:</p>
<ul>
  <li><strong>Старт</strong> — город/село, чаще всего теплее, возможна жара.</li>
  <li><strong>Середина</strong> — прохладнее, больше ветра и облачности.</li>
  <li><strong>Верхняя точка (плато/перевал)</strong> — температура на 5–10 °C ниже, ночью возможны заморозки даже летом.</li>
</ul>
<p>Реальный прогноз можно получить через погодный API по координатам этих трёх точек.</p>
<p><strong>Следи за:</strong> ночной температурой на высоте (спальник и одежда), вероятностью гроз во второй половине дня и силой ветра на открытых участках.</p>
        `
    },

    talysh: {
        pack: `
<h4>Собери рюкзак — маршруты Талышских гор</h4>
<p>Влажный климат, частые дожди и туманы, лесистые склоны, скользкие тропы.</p>
<h4>Одежда</h4>
<ul>
  <li>Лёгкое термобельё в межсезонье, быстросохнущие футболки летом.</li>
  <li>Тонкий флис или свитер, лёгкие, хорошо дышащие штаны.</li>
  <li>Качественный дождевик или мембранная куртка с капюшоном.</li>
  <li>Чехол/накидка на рюкзак от дождя.</li>
  <li>Треккинговые ботинки с очень хорошим сцеплением, сменные сухие носки.</li>
</ul>
<h4>Питание и вода</h4>
<ul>
  <li>Высококалорийные и не боящиеся влаги продукты (орехи, сухофрукты, батончики, шоколад, крупы/сублиматы).</li>
  <li>Ручьёв много, но обязательно используй фильтр или таблетки для очистки воды.</li>
</ul>
<h4>Аптечка</h4>
<ul>
  <li>Базовая аптечка (пластыри, бинт, антисептик, обезболивающее).</li>
  <li>Средства от укусов насекомых и клещей, противоаллергические препараты.</li>
  <li>Мазь/средство для обработки царапин и ссадин (во влажном лесу заживают хуже).</li>
</ul>
<h4>Инвентарь</h4>
<ul>
  <li>Рюкзак 30–45 л.</li>
  <li>Треккинговые палки — очень полезны на скользких и крутых тропах.</li>
  <li>Налобный фонарь (быстро темнеет в лесу + туманы).</li>
  <li>Водонепроницаемые мешки/пакеты для одежды и техники.</li>
  <li>Репеллент, по возможности — москитная сетка для головы в сезон насекомых.</li>
</ul>
        `,
        signal: `
<h4>Покрытие связи — Талышские горы</h4>
<ul>
  <li><strong>4G</strong> — в Ленкорани, Лерике и вдоль основных дорог.</li>
  <li><strong>2G / нестабильный сигнал</strong> — в горных сёлах и по многим лесным дорогам.</li>
  <li><strong>Нет связи</strong> — в глубоких лесных ущельях, на удалённых гребнях и малолюдных участках.</li>
</ul>
<p>Сигнал часто идёт «пятнами»: на открытом гребне может ловить, а в соседней лощине уже нет.</p>
<p><strong>Советы:</strong></p>
<ul>
  <li>Всегда имей офлайн‑карту района.</li>
  <li>Телефон держи заряженным, бери повербанк.</li>
  <li>Договорись с близкими о контрольном времени выхода на связь.</li>
</ul>
        `,
        weather: `
<h4>Погода по маршруту — Талышские горы</h4>
<p>Главные факторы — влажность, туман и осадки. Полезно оценивать прогноз по трём точкам маршрута:</p>
<ul>
  <li><strong>Старт (низина, ближе к Ленкорани)</strong> — тепло, душно, высокая влажность.</li>
  <li><strong>Середина маршрута (лесной хребет)</strong> — прохладнее, часто туман, тропы становятся очень скользкими даже при слабом дожде.</li>
  <li><strong>Верхние точки / открытый гребень</strong> — заметно холоднее, сильнее ветер, возможны резкие ливни и плотный туман.</li>
</ul>
<p>Для точного прогноза можно использовать погодный API по координатам старта, середины и верхней точки маршрута.</p>
<p><strong>Смотри на:</strong> длительность и интенсивность дождя (грязь и скользкие склоны), видимость (туман) и ветер на гребнях.</p>
        `
    }
};

/* ==== Сброс состояния блока инструментов в модалке ==== */
function resetEventToolsUI() {
    const contentEl = document.getElementById('eventToolsContent');
    if (contentEl) {
        contentEl.innerHTML = `
<p style="font-size: 14px; color: #666;">
    Выберите инструмент, чтобы увидеть рекомендации по этому месту.
</p>`;
    }
    const buttons = document.querySelectorAll('#eventToolsButtons button');
    buttons.forEach(btn => btn.classList.remove('active'));
}

/* ==== Показ конкретного инструмента (рюкзак / связь / погода) ==== */
function showEventTool(toolKey) {
    const contentEl = document.getElementById('eventToolsContent');
    if (!contentEl) return;

    const regionKey = currentEventRegion;
    const regionTools = regionKey ? eventToolsData[regionKey] : null;
    const toolHtml = regionTools && regionTools[toolKey]
        ? regionTools[toolKey]
        : '<p style="font-size: 14px; color: #666;">Для этого объекта ещё не настроены рекомендации.</p>';

    contentEl.innerHTML = toolHtml;

    // Подсветка активной кнопки
    const buttons = document.querySelectorAll('#eventToolsButtons button');
    buttons.forEach(btn => {
        const isActive = btn.getAttribute('data-tool') === toolKey;
        if (isActive) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

/* ==== Привязка карточек к регионам ==== */
document.addEventListener('DOMContentLoaded', function () {
    // Все карточки с data-id (и горные, и музеи и т.д.)
    const cards = document.querySelectorAll('.card[data-id]');

    cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const regionKey = eventRegionByCategory[category];

        card.addEventListener('click', function () {
            // Если это горный объект — привязываем к региону
            if (regionKey) {
                currentEventRegion = regionKey;
                currentEventId = card.getAttribute('data-id');
            } else {
                // Для музеев/архитектуры и т.п. — сбрасываем регион
                currentEventRegion = null;
                currentEventId = null;
            }
            // Каждый раз при открытии "Подробнее" хотим чистый вид блока
            resetEventToolsUI();
        });
    });
});