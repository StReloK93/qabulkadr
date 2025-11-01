export function truncateText(text, maxLength) {
   if (text.length <= maxLength) return text;
   return text.slice(0, maxLength) + "...";
}

export function selectOption(array: any[], key: string) {
   return {
      options: array.map((dept: { id: number }) => ({
         label: dept[key],
         value: dept.id,
      })),
      optionLabel: "label",
      optionValue: "value",
   };
}
