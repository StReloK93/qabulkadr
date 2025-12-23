<template>
   <div
      class="sheet text-black! invisible -z-10 absolute p-px top-0 left-0 print:static w-[210mm] h-[297mm] box-border font-[Times_New_Roman] print:visible leading-none"
   >
      <nav class="flex justify-end">
         <main class="text-right text-[13.5pt] w-60">
            {{ props.employe.rahbar.profession }} {{ props.employe.rahbar.name }}ga <br />
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
         <span>Ijrochi: {{ props.employe.creater?.name }}</span>
         <section class="text-right font-semibold">
            {{ props.qabul.kadrBoss.profession }}
            <br />
            {{ props.qabul.kadrBoss.name }}
         </section>
      </div>
      <div class="flex justify-end mt-2">
         <span> _____________________ </span>
      </div>
      <div class="flex justify-end mt-4">
         <span> «____»_____________ y. </span>
      </div>
      <div class="flex justify-start my-4">
         <span> Asos: {{ props.employe.cause_text }}</span>
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
                  {{ props.employe.organization.name }}
                  <span v-if="props.employe.division">, {{ props.employe.division }}</span>
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
               <td class="border py-0.5 min-w-76 max-w-80">Yo'riqnoma o'tiladigan joylar</td>
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
               <td class="border py-1 px-2 min-w-76 max-w-80 whitespace-pre-wrap" v-html="item.title" />
               <td
                  class="border py-1 px-2 min-w-8 whitespace-pre"
                  :colspan="item.colspan"
                  v-html="item.text"
               />
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
interface IQabul {
   yoriqnomalar: { title: string; text: string; colspan: number }[] | null;
   kadrBoss: { name: string; profession: string };
}

interface INeedEmploye {
   full_name: string;
   organization: { name: string };
   division: string | null;
   rahbar: { name: string; profession: string };
   profession: string;
   cause_text: string | null;
   creater: { name: string };
}

const props = defineProps<{ qabul: IQabul; employe: INeedEmploye }>();

// 998944807949
</script>
