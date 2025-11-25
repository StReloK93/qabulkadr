<template>
   <div
      class="sheet text-black! p-[1cm] -z-10 absolute top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <!-- invisible -->
      <nav class="flex justify-end">
         <main class="text-right text-[13.5pt]">
            SHKB Direktori {{ props.qabul.mainBoss }}ga <br />
            fuqoro {{ props.employe.full_name }} <br />
            tomonidan
         </main>
      </nav>
      <br /><br />
      <nav class="text-center text-[12pt] uppercase font-bold tracking-[4px] mb-1">Ariza</nav>
      <p class="indent-14 text-[12pt]">
         Meni
         {{ props.employe.organization.name
         }}{{ props.employe.division ? ` ${props.employe.division}` : "" }}ga
         {{ props.employe.profession }} lavozimiga ishga qabul qilishingizni so'rayman
      </p>
      <div class="flex justify-between mt-6">
         <span> «____»_____________ y. </span>
         <section class="inline-flex flex-col items-center">
            <span> _____________________ </span>
            <span class="text-[8pt]"> (izmo)</span>
         </section>
      </div>
      <div class="flex justify-between mt-8 text-[11pt]">
         <span>Ijrochi: {{ UserStore.user?.name }}</span>
         <section class="text-right font-semibold">
            Kadrlar bo'limi boshlig'i
            <br />
            {{ props.qabul.kadrBoss }}
         </section>
      </div>
      <div class="flex justify-end mt-2">
         <span> _____________________ </span>
      </div>
      <div class="flex justify-end mt-4">
         <span> «____»_____________ y. </span>
      </div>
      <div class="flex justify-start my-4">
         <span> Asos: </span>
      </div>
      <nav class="text-center text-[12pt] uppercase font-bold tracking-[4px] mb-1">Qabul varaqasi</nav>
      <table class="w-full">
         <tbody>
            <tr>
               <td class="text-[11pt] align-bottom">Familiya, ismi, sharifi</td>
               <td class="text-[13pt] align-bottom border-b px-4 py-0.5">
                  {{ props.employe.full_name }}
               </td>
            </tr>
            <tr>
               <td class="text-[11pt] align-bottom">Ish joyi</td>
               <td class="text-[13pt] align-bottom border-b px-4 py-0.5">
                  {{ props.employe.organization.name }} {{ props.employe.division }}
               </td>
            </tr>
            <tr>
               <td class="text-[11pt] align-bottom">Kasbi (lavozimi)</td>
               <td class="text-[13pt] align-bottom border-b px-4 py-0.5">
                  {{ props.employe.profession }}
               </td>
            </tr>
            <tr>
               <td class="text-[11pt] align-bottom">Razryadi (oklad)</td>
               <td class="text-[13pt] align-bottom border-b p-4"></td>
            </tr>
         </tbody>
      </table>
      <nav class="text-center text-[12pt] uppercase font-bold tracking-[4px] mb-1">Yo'riqnomalar</nav>
      <table class="text-[10pt]">
         <tbody>
            <tr class="text-center leading-3">
               <td class="border py-0.5 min-w-10">№</td>
               <td class="border py-0.5 w-full">Yo'riqnoma o'tiladigan joylar</td>
               <td class="border py-0.5 min-w-26">Yo'riqnoma o'tkazilgan kun</td>
               <td class="border py-0.5 min-w-26">Yo'riqnoma o'tqazuvchi</td>
               <td class="border py-0.5 min-w-26">
                  Yo'riqnoma o'tqazuvchi <br />
                  imzosi
               </td>
               <td class="border py-0.5 min-w-26">
                  Yo'riqnoma o'tuvchi <br />
                  imzosi
               </td>
            </tr>
            <tr v-for="(item, index) in qabul.yoriqnomalar">
               <td class="border py-1 px-2 min-w-10 text-center">{{ index + 1 }}.</td>
               <td class="border py-1 px-2 min-w-8" v-html="item.title"></td>
               <td class="border py-1 px-2 min-w-8 whitespace-pre max-w-80" :colspan="item.colspan">
                  <span v-html="item.text"></span>
               </td>
               <td
                  class="border py-1 px-2 min-w-8"
                  v-for="value in 3 - (item.colspan ? item.colspan - 1 : 0)"
               ></td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stories/UserStore";
const UserStore = useUserStore();

interface IQabul {
   yoriqnomalar: { title: string; text: string; colspan: number }[] | null;
   kadrBoss: string;
   mainBoss: string;
}

interface INeedEmploye {
   full_name: string;
   organization: { name: string };
   division: string | null;
   profession: string;
}

const props = defineProps<{ qabul: IQabul; employe: INeedEmploye }>();
</script>
