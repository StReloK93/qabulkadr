<template>
   <section
      class="sheet text-black! invisible print:p-px! -z-10 absolute top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <nav class="text-center font-bold text-[11pt] leading-4">
         Nomzodga berilgan savollarning javoblari uchun baholangan ballari to'g'risida <br />
         MA'LUMOT (Suhbat varaqasi)
      </nav>
      <div class="flex items-end text-[11pt] mt-1">
         <span>Nomzod</span>
         <main class="w-full border-b h-5 px-4 inline-flex items-end">{{ props.suhbat.name }}</main>
      </div>
      <div class="flex items-end">
         <main class="w-full border-b h-5"></main>
      </div>
      <table class="w-full text-center mt-2">
         <tbody>
            <tr>
               <td class="border h-15 w-8">T/r</td>
               <td class="border h-15 w-46">Savol mazmuni</td>
               <td class="border h-15">Javob</td>
               <td class="border h-15 w-22">Bahosi</td>
               <td class="border h-15 w-11">izoh</td>
            </tr>
            <tr v-for="index in 10">
               <td class="border h-20.5 w-8">{{ index }}</td>
               <td class="border h-20.5 w-46"></td>
               <td class="border h-20.5"></td>
               <td class="border h-20.5 w-22"></td>
               <td class="border h-20.5 w-11"></td>
            </tr>
         </tbody>
      </table>
      <div class="flex items-end text-[11pt] mt-2">
         <span>Yakuniy xulosa:</span>
         <main class="grow border-b h-5"></main>
      </div>
      <div class="flex items-end text-[11pt]">
         <span>Ma'lumotlar bilan tanishdim:</span>
         <main class="grow border-b h-5"></main>
      </div>
      <div class="flex items-end text-[11pt]">
         <span class="w-40"></span>
         <main class="grow flex justify-around h-5">
            <span>(imzo)</span>
            <span>(F.I.Sh)</span>
         </main>
      </div>
      <div class="flex items-end text-[11pt]">
         <span>Komissiya a'zolari:</span>
      </div>
      <div class="flex items-end text-[11pt]">
         <main class="grow border-b h-5"></main>
      </div>
      <div class="flex items-end text-[11pt]">
         <main class="grow border-b h-5"></main>
      </div>
      <div class="text-[11pt]">
         Baholash natijalari uchun quyidagi ball beriladi: Namunali (to'liq javob, qoniqarli)-10 ball;
         Yazshi (o'rtacha, javobning mazmun mohiyatini biladi, sana yoki raqamda adashsa)- 7-9 ball;
         Qoniqarsiz (past, javobning mazmunini qisman biladi, sana yoki raqamini ayta olmasa)- 3-6 ball,
         Umuman bilmasligi (jumladan boshqa javob berilganda)- 0-2 ball
      </div>
   </section>
</template>

<script setup lang="ts">
import type { ISuhbat } from "@/Interfaces";
const props = defineProps<{ suhbat: ISuhbat }>();
</script>
