<template>
   <section
      class="sheet text-black! invisible print:p-px! -z-10 absolute top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <nav class="text-center font-bold text-[10pt]">
         "NKMK" AJ ShKB bo'linmalarida faoliyat olib borayotgan fuqarolar uchun suhbatga YO'LLANMA
      </nav>
      <br />
      <div class="text-center font-bold text-[10pt]">2025-yil «______»____</div>
      <br />
      <div class="text-center text-[14pt]">
         <span class="underline"> Bosh geolog bo`limi boshlig'i </span>
      </div>
      <div class="text-center text-[10pt]">(Bo'linma nomi)</div>
      <br />
      <div class="text-center text-[14pt]">
         <span class="underline"> BESHIMOV ABROR GAYBULLOYEVICH</span>
      </div>
      <div class="text-center text-[10pt]">(Rahbarning F.I.Sh)</div>
      <br />
      <div class="text-center text-[10pt]">Shimoliy kon boshqarmasi Kadrlar bo'limi tomonidan</div>
      <br />
      <div class="text-center text-[14pt]">
         <span class="underline">Qarshiyev Zarif Zafar o'g'li</span>
      </div>
      <div class="text-center text-[10pt]">(nomzodning F.I.Sh)</div>
      <br />
      <div class="text-center text-[10pt]">
         Sizga suhbat o'tkazish uchun (zaxira sifatida) yuborilmoqda
      </div>
      <br />
      <div class="text-center text-[12pt]">
         <span class="underline leading-[18px]">
            "Sharqiy koni" Geologiya-geofizika byurosiga,
            <br />
            Ishlab chiqarishni avtomatlashtirilgan tizim
            <br />
            orqali boshqarish muhandisi
         </span>
      </div>
      <div class="text-center text-[10pt]">(Lavozim yoki kasbning nomi)</div>
      <br />
      <div class="text-center text-[10pt]">Nomzod(ish izlovchi)ning telefon raqami</div>
      <br />
      <br />

      <div class="font-bold text-[10pt] flex justify-between px-18 items-end leading-[15px]">
         <span>
            Shimoliy kon boshqarmasi
            <br />Kadrlar bo'limi boshlig'i
         </span>
         <span> A.B.Butayev </span>
      </div>
      <br />
      <br />
      <br />
      <div class="text-[10pt] flex justify-between px-18 items-end leading-[15px]">
         <span>
            Ijr:Nusratov.R.R
            <br />597-23-14
         </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <nav class="text-center font-bold text-[11pt]">
         Nomzod (ish izlovchi)ning suhbat (imtihon) natijalari
      </nav>
      <br />
      <br />

      <nav class="text-center text-[11pt] px-5">
         <table class="w-full">
            <tbody>
               <tr class="align-bottom">
                  <td class="text-nowrap pl-5">Amaliy ko'nikmalar to'g'risida xulosa:</td>
                  <td class="border-b w-2/3"></td>
               </tr>
               <tr>
                  <td class="border-b w-2/3 h-6" colspan="2"></td>
               </tr>
               <tr>
                  <td class="border-b w-2/3 h-6" colspan="2"></td>
               </tr>
            </tbody>
         </table>
         <table class="w-full">
            <tbody>
               <tr class="align-bottom">
                  <td class="text-nowrap pl-5">
                     Tarkibning yakuniy xulosasi <b>(muvofiq/muvofiq emas):</b>
                  </td>
                  <td class="border-b w-1/2 h-12"></td>
               </tr>
            </tbody>
         </table>
         <div class="flex justify-between mt-12 text-[8pt] px-5">
            <span class="border-t px-10 pt-1 w-60"> (Bo'linma rahbari, lavozimi) </span>
            <span class="border-t px-14 pt-1"> (Familiya I.Sh.) </span>
         </div>
         <div class="flex justify-between mt-12 text-[8pt] px-5">
            <span class="border-t px-10 pt-1 w-60"> (Bo'linma mutaxassisi, lavozimi) </span>
            <span class="border-t px-14 pt-1"> (Familiya I.Sh.) </span>
         </div>
         <div class="flex justify-between mt-12 text-[8pt] px-5">
            <span class="border-t px-10 pt-1 w-60"> (Bo'linma mutaxassisi, lavozimi) </span>
            <span class="border-t px-14 pt-1"> (Familiya I.Sh.) </span>
         </div>
         <div class="flex justify-between mt-12 text-[8pt] px-5">
            <span class="px-10 pt-1">
               Nomzodning tarkib yakuniy xulosasi bilan tanishganligi to'g'risida:
            </span>
            <span class="border-t px-14 pt-1"> (Familiya I.Sh.) </span>
         </div>
         <div class="mt-8 text-[10pt]">
            <b>Izoh:</b> Nomzodga suhbat uchun yo'llanma berilgani ushbu nomzodning ishga qabul qilinishi
            uchun kafolat bo'la olmaydi
         </div>
      </nav>
   </section>
</template>

<script setup lang="ts">
import type { ISuhbat } from "@/Interfaces";

const props = defineProps<{ suhbat: ISuhbat }>();
console.log(props.suhbat);
</script>
