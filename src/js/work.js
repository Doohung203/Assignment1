import { render } from "./common";
import { worksList } from "./data";


function showFeature(works){
    if(!Array.isArray(worksList)|| worksList.length == 0) return[];
      let result = "";
      for(let i = 0; i< works.length; i++){
        const work = works[i];
        result += `
        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
        <div>
            <a href ="/workdetail.html?id=${work.id}"><img src="${work.img}" width="246px" height="246px" class="rounded w-full" alt=""></a>
        </div>
        <div>
            <h3><a href="/workdetail.html?id=${work.id}" class="text-[30px] text-[#21243D] font-bold hover:underline">${work.name}</a></h3>
        <div class="flex space-x-4 items-center py-5">
            <span class="inline-block bg-[#21243D] py-1 px-2 font-bold text-white rounded-full">${work.year}</span>
            <span class="text-[#8695A4]">${work.cate}</span>
        </div>
            <p class="text-[#21243D]">
            ${feature.description}
                </p>
            </div>
            </div>
        `
  }
    return result;
  }
  render("work_detail", showFeature(worksList))