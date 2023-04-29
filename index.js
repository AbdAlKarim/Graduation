// import data from './data.json' assert {type: 'json'}

const data = [
  {"name":"د. براء أبو شعر","link":"https://baraatalib99.daftarna.net/","image":"./assets/0.jpg"},
  {"name":"د. هيثم طومان","link":"https://hitham-ibrahim-2023.daftarna.net/","image":"./assets/31.PNG"},  
  {"name":"د. شادي الجرجاوي","link":"https://shadi-aljerjawi.daftarna.net/.","image":"./assets/38.jpg"},
  {"name":"د. أماني السطري","link":"https://amani-s-alsattari-1673476074.daftarna.net/","image":"./assets/64.PNG"},  
  {"name":"د. ربا شقورة","link":"https://rubags.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. ولاء هليل","link":"https://alaa-heliel.daftarna.net/.","image":"./assets/13.PNG"},
  {"name":"د. سمر البطة","link":"https://samar-albatta-1681667297.daftarna.net/","image":"./assets/19.PNG"},
  {"name":"د. محمود الشرفا","link":"https://drmahmoudhamad.daftarna.net/","image":"./assets/36.PNG"},  
  {"name":"د. علي الهباش","link":"https://aliwael.daftarna.net/","image":"./assets/35.PNG"},
  {"name":"د. يوسف الفرا","link":"https://yousef-farra-1682251468.daftarna.net/","image":"./assets/29.PNG"},
  {"name":"د. عمر النجار","link":"https://omarnajjar.daftarna.net/","image":"./assets/28.PNG"},
  {"name":"د. أحمد حبوب","link":"https://ahmedhabboub1.daftarna.net/","image":"./assets/2.jpg"},
  {"name":"د. آلاء كحيل","link":"https://alaa-kuheil.daftarna.net/.","image":"./assets/61.PNG"},
  {"name":"د. شيماء حمد","link":"https://shjhamad.daftarna.net/","image":"./assets/61.PNG"},
  {"name":"د. لانا ابراهيم","link":"https://lana-jamal-1682249411.daftarna.net/","image":"./assets/18.PNG"},
  {"name":"د. سلسبيل عابد","link":"https://slsbyl-aaabd-1682249310.daftarna.net/","image":"./assets/14.PNG"},
  {"name":"د. محمد أبو عبدو","link":"https://mohamedaboabdo.daftarna.net/","image":"./assets/32.PNG"},
  {"name":"د. محمود المدهون","link":"https://mahmoud-madhoun.daftarna.net/.","image":"./assets/66.PNG"},
  {"name":"د. عبد الرحمن حنودة","link":"https://abd-alrahman-hanoda-1682259637.daftarna.net/","image":"./assets/25.PNG"},
  {"name":"د. مشير الدحدوح","link":"https://mosheer2023.daftarna.net/","image":"./assets/27.PNG"},
  {"name":"د. فلسطين طبش","link":"https://fellesteen.daftarna.net/","image":"./assets/5.PNG"},
  {"name":"د. اسراء حبوش","link":"https://israaz99.daftarna.net/","image":"./assets/8.PNG"},
  {"name":"د. دانا ماضي","link":"https://danamadi99.daftarna.net/","image":"./assets/15.PNG"},
  {"name":"د. إيناس جندية","link":"https://enasala.daftarna.net/","image":"./assets/17.PNG"},
  {"name":"د. عبدالله عواد","link":"https://abdullahawwad.daftarna.net/","image":"./assets/37.PNG"},
  {"name":"د. محمد السكافي","link":"https://mohammed-akram-1677365100.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. محمود شاهين","link":"https://mahmoudysh.daftarna.net/","image":"./assets/45.PNG"},
  {"name":"د. محمود عبيد","link":"https://mahmoudkanan84.daftarna.net/","image":"./assets/59.jpg"},
  {"name":"د. رغد أبو صفية","link":"https://raghd-khaled.daftarna.net/.","image":"./assets/11.PNG"},
  {"name":"د. سهام الدالي","link":"https://seham-dali-1682252170.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. عزيزة عوض","link":"https://aziza-nabil-awad-1681713590.daftarna.net/","image":"./assets/6.PNG"},
  {"name":"د. هبة أبو شنب","link":"https://heba-ismail-1682628898.daftarna.net/","image":"./assets/هبة.jpg"},
  {"name":"د. بدر الشيخ خليل","link":"https://bader-alshaikh-khalil-1682340007.daftarna.net/","image":"./assets/44.PNG"},
  {"name":"د. بشار نبهان","link":"https://bashnab.daftarna.net/","image":"./assets/60.JPG"},
  {"name":"د. أحمد العزامي","link":"https://ahmed-mohammed-1682419969.daftarna.net/","image":"./assets/52.jpg"},
  {"name":"د. عبدالرحمن الأشقر","link":"https://abdelrahman-alashqar99.daftarna.net/.","image":"./assets/51.jpg"},
  {"name":"د. جوانا أبو القمبز","link":"https://joanna.daftarna.net/","image":"./assets/4.PNG"},
  {"name":"د. نور الهدى الشاعر","link":"https://step.daftarna.net/","image":"./assets/23.PNG"},
  {"name":"د. أسماء عبد الهادي","link":"https://asmaa-abdelhadi-1682257061.daftarna.net/","image":"./assets/7.PNG"},
  {"name":"د. هدى سعادة","link":"https://huda-saadeh2023.daftarna.net/.","image":"./assets/24.PNG"},
  {"name":"د. مصطفى أبو جياب","link":"https://mustafa-abu-jayyab.daftarna.net/","image":"./assets/49.jpg"},
  {"name":"د. مازن الصفدي","link":"https://mazen-safady.daftarna.net/.","image":"./assets/56.jpg"},
  {"name":"د. أحمد أبو ظاهر","link":"https://ahmed-thaher-1682435564.daftarna.net/","image":"./assets/53.jpg"},
  {"name":"د. حسام العطار","link":"https://hosatar.daftarna.net/","image":"./assets/61.jpeg"},
  {"name":"د. ملك الشريف","link":"https://malaksh99.daftarna.net/","image":"./assets/9.PNG"},
  {"name":"د. آية الأغا","link":"https://ayabaraa.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. سجى شحادة","link":"https://sajash99.daftarna.net/","image":"./assets/10.png"},
  {"name":"د. أمل أبو حزيمة ","link":"https://amalabuhzeima.daftarna.net/","image":"./assets/16.png"},
  {"name":"د. محمد المدهون","link":"https://bit.ly/4mohamed","image":"./assets/57.jpg"},
  {"name":"د. محمود أبو العمرين","link":"https://mhmh.daftarna.net/","image":"./assets/58.jpg"},
  {"name":"د. مؤمن أبو يوسف","link":"https://moumen23.daftarna.net/","image":"./assets/65.jpg"},
  {"name":"د. سندس أحمد","link":"https://sondos-ahmed-1682441304.daftarna.net/","image":"./assets/62.jpg"},
  {"name":"د. شيماء السميري","link":"https://shimaa-alsmary-1682249887.daftarna.net/","image":"./assets/3.PNG"},
  {"name":"د. آية نتيل","link":"https://drayoosh.daftarna.net/","image":"./assets/20.PNG"},
  {"name":"د. بلسم لبد","link":"https://balsamrl.daftarna.net/","image":"./assets/39.PNG"},
  {"name":"د. براء قاسم","link":"https://baraanasser1999.daftarna.net/","image":"./assets/12.jpg"},
  {"name":"د. أسيل العصار","link":"https://aseelsuhail.daftarna.net/","image":"./assets/22.PNG"},
  {"name":"د. إيناس عاشور","link":"https://enasashour99.daftarna.net/","image":"./assets/26.PNG"},
  {"name":"د. روان زقوت","link":"https://rawanzakout.daftarna.net/","image":"./assets/30.PNG"},
  {"name":"د. فاتن النمر","link":"https://faten-el-nemer-1682340240.daftarna.net/","image":"./assets/42.PNG"},
  {"name":"د.ديما البرقوني","link":"https://dimaalbarqouni.daftarna.net/","image":"./assets/46.PNG"},
  {"name":"د.ضحى عبدالباري","link":"https://douha-abed-1682271728.daftarna.net/","image":"./assets/43.PNG"},
  {"name":"د.سارة ارحيم","link":"https://sarairheem.daftarna.net/","image":"./assets/41.PNG"},
  {"name":"د. مرح أبو سلمية","link":"https://marahma99.daftarna.net/","image":"./assets/34.PNG"},
  {"name":"د. نور  قنبور","link":"https://nourmoh98.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. ربا اسماعيل","link":"https://rubasismail.daftarna.net/","image":"./assets/55.jpg"},
  {"name":"د. شروق طبش","link":"https://shorouqe-tabash-1682252548.daftarna.net/","image":"./assets/50.jpg"},
  {"name":"د. يارا الدبَاكة","link":"https://yarahatem99.daftarna.net/","image":"./assets/48.jpg"},
  {"name":"د.شهد مسلم","link":"https://shahd-m-musallam-1682437151.daftarna.net/","image":"./assets/47.jpg"},
  {"name":"د. نور أبو شاويش","link":"https://nour999.daftarna.net/","image":"./assets/61.png"}, 
  {"name":"د.أحلام شاهين","link":"https://ahlam-shahyn-1682438635.daftarna.net/","image":"./assets/61.PNG"},
  {"name":"د.هلا الحلاق","link":"https://Hala199.daftarna.net/","image":"./assets/61.PNG"},
  {"name":"د.آية ياسين","link":"https://aya-yassin-1682441549.daftarna.net/","image":"./assets/61.PNG"},
  {"name":"د. رندا حسين","link":"https://randa-hussein-1682270551.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. مريم شاهين","link":"https://mrym-asam-shahyn-1681590044.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. أُلفت الراعي","link":"https://olfat-eraee-1682248891.daftarna.net/","image":"./assets/61.png"},
  {"name":"د. بيسان أبو دية","link":"https://bissane.daftarna.net/","image":"./assets/61.png"}
]

const cards = document.getElementById('cards');

data.forEach((item,index) => {
  let card = document.createElement('div');
  card.id = index;
  card.className = 'oneCard';

  let image = document.createElement('img');
  image.className = 'userImage';
  image.src = item.image;
  
  let name = document.createElement('a');
  name.className = "username"
  name.href = item.link;
  name.innerHTML = item.name;

  card.appendChild(image)
  card.appendChild(name)

  cards.appendChild(card)
})
