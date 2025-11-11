<template>
   <div
      class="sheet text-black! invisible p-[1cm] -z-10 absolute top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <nav class="text-center leading-[18px] font-bold">
         Тиббий кўрикдан ўтиш учун
         <br />
         <span> Й Ў Л Л А Н М А </span>
      </nav>
      <main class="text-center mt-3">
         {{ employe.full_name }}
      </main>
      <main class="border-t text-center text-[9pt]">(фамилия, исми, шарифи)</main>
      <table class="w-full text-[10pt]">
         <tbody>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Туғилган йили</td>
               <td class="border-b align-bottom pl-2">{{ employe.birth_date }}</td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Иш жойи</td>
               <td class="border-b align-bottom pl-2">{{ employe.organization.name }}</td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Касби (лавозими)</td>
               <td class="border-b align-bottom pl-2">{{ employe.profession }}</td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom"></td>
               <td class="border-b"></td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom"></td>
               <td class="border-b"></td>
            </tr>
            <tr>
               <td class="w-2/5 h-9 align-bottom text-[12pt] font-bold text-right pr-2 pb-0.5">
                  КБ инспектори
               </td>
               <td class="border-b"></td>
            </tr>
            <tr>
               <td class="w-2/5 h-5 align-bottom text-[12pt] font-bold text-right pr-2 pb-0.5"></td>
               <td></td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-3">«______»________________й</td>
            </tr>
            <tr class="text-center">
               <td colspan="2" class="pb-0.5 font-bold">Тиббий кўрик натижалари:</td>
            </tr>
            <tr v-for="value in 9">
               <td class="border-b h-6" colspan="2"></td>
            </tr>
            <tr>
               <td class="text-center font-bold text-[11pt]" colspan="2">Бош врач хулосаси:</td>
            </tr>
            <tr v-for="value in 3">
               <td class="border-b h-6" colspan="2"></td>
            </tr>
            <tr>
               <td class="w-2/5 h-9 align-bottom text-[12pt] font-bold text-right pr-2 pb-0.5"></td>
               <td class="border-b"></td>
            </tr>
            <tr>
               <td class="w-2/5 font-bold text-right pr-2 pb-0.5"></td>
               <td class="text-center">(имзо)</td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-3">«______»________________й</td>
            </tr>
            <tr>
               <td class="text-center text-[10pt] font-bold pb-1" colspan="2">
                  Ишга киришда ҳужжатларни расмийлаштириш муддати тўғрисида
               </td>
            </tr>
            <tr>
               <td class="text-center text-[10pt] font-bold pb-1.5" colspan="2">ЭСЛАТМА</td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  1. Шимолий кон бошқармасининг бўлинма ва мутахассислари билан қабул қилиш хатини
                  келишиб олиш – 2 кун.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  2. Тиббий кўрикдан ўтиш, пластик карта ва жамғариб бориладиган пенсия дафтарчасини
                  расмийлаштириш – 5 кун.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-1" colspan="2">
                  3. Тиббий кўрикдан ўтгандан кейин, йўриқномаларни ўтиш 3-кун.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  Ишга киришда ҳужжатларни расмийлаштириш учун 10 кунлик муддатга риоя қилинмаган
                  ҳолатда, қабул варақаси бекор қилинади.
               </td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">ШКБ КБ маъмурияти</td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold"></td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">Танишдим______________________</td>
            </tr>

            <tr>
               <td class="text-center text-[10pt] font-bold" colspan="2">ПАМЯТКА</td>
            </tr>
            <tr>
               <td class="text-center text-[10pt] font-bold pb-1" colspan="2">
                  о сроках оформления документов при трудоустройстве
               </td>
            </tr>

            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  1. Согласование приемной записки со специалистами Северного рудоуправления и
                  подразделений – 2 дня.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  2. Прохождение мед. осмотра, оформление пластиковой карты и пенсионной накопительной
                  книжки – 5 дней.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-1" colspan="2">
                  3. Прохождение инструктажей после мед. осмотра – 3 дня.
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  В случае несоблюдения сроков по трудоустройству 10 дней, приемная записка аннулируется.
               </td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">Администрация ОК Сев.РУ</td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold"></td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">
                  Ознакомлен(а)______________________
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script setup lang="ts">
import type { IEmploye } from "@/Interfaces";

const props = defineProps<{
   employe: IEmploye;
}>();
</script>
