<template>
   <div
      class="sheet text-black! invisible p-px -z-10 absolute top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <span class="absolute top-3 right-3 text-sm text-gray-500"> #{{ employe.id }} </span>
      <nav class="text-center leading-[18px] font-bold">
         Tibbiy ko'rikdan o'tish
         <br />
         <span> Y O' L L A N M A </span>
      </nav>
      <main class="text-center mt-3">
         {{ employe.full_name }}
      </main>
      <main class="border-t text-center text-[9pt]">(Familiya, Ismi, Sharifi)</main>
      <table class="w-full text-[10pt]">
         <tbody>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Tugilgan yili</td>
               <td class="border-b align-bottom pl-2">{{ employe.birth_date }}</td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Ish joyi</td>
               <td class="border-b align-bottom pl-2">{{ employe.organization.name }}</td>
            </tr>
            <tr>
               <td class="w-2/5 h-6 align-bottom">Kasbi (lavozimi)</td>
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
                  KB inspektori
               </td>
               <td class="border-b"></td>
            </tr>
            <tr>
               <td class="w-2/5 h-5 align-bottom text-[12pt] font-bold text-right pr-2 pb-0.5"></td>
               <td></td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-3">«______»________________y</td>
            </tr>
            <tr class="text-center">
               <td colspan="2" class="pb-0.5 font-bold">Tibbiy ko'rik natijalari:</td>
            </tr>
            <tr v-for="value in 9">
               <td class="border-b h-6" colspan="2"></td>
            </tr>
            <tr>
               <td class="text-center font-bold text-[11pt]" colspan="2">Bosh vrach xulosasi:</td>
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
               <td class="text-center">(imzo)</td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-3">«______»________________y</td>
            </tr>
            <tr>
               <td class="text-center text-[10pt] font-bold pb-1" colspan="2">
                  Ishga kirishda xujjatlarni rasmiylashtirish muddati to'g'risida
               </td>
            </tr>
            <tr>
               <td class="text-center text-[10pt] font-bold pb-1.5" colspan="2">ESLATMA</td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  1. Shimoliy kon boshqarmasining bo'linma va mutaxassislari bilan qabul qilish xatini
                  kelishib olish - 2 kun
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  2. Tibbiy ko'rikdan o'tish , plastik karta va jamg'arib boriladigan pensiya
                  daftarchasini rasmiylashtirish - 5 kun
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-1" colspan="2">
                  3. Tibbiy ko'rikdan o'tgandan keyin , yo'riqnomalarni o'tish 3 - kun
               </td>
            </tr>
            <tr>
               <td class="text-[10pt] pb-0.5" colspan="2">
                  Ishga kirishda xujjatlarni rasmiylashtirish uchun 10 kunlik muddatga rioya qilinmagan
                  holatda, qabul varaqasi bekor qilinadi
               </td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">SHKB KB mamuriyati</td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold"></td>
            </tr>
            <tr class="text-right">
               <td colspan="2" class="pb-4 text-[10pt] font-bold">Tanishdim______________________</td>
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
