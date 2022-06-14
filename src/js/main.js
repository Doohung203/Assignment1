//import dữ liệu
import { render } from "./common";
import { userNamelist } from "./data";
import { postList } from "./data";
import { worksList } from "./data";

// Khai báo hàm showUser
function showUser(Users) {
  //Kiểm tra
  if (!Array.isArray(userNamelist) || userNamelist.length == 0) return [];

  // Xử lý
  let result = "";
  for (let i = 0; i < Users.length; i++) {
    const User = Users[i];
    result += `
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-2 order-2 md:order-1">
        <div class="">
          <h2 class="text-2xl font-bold md:text-6xl mt-10 md:mt-0">
            Hi, ${User.name},
          </h2>
          <h2 class="text-2xl font-bold md:text-6xl md:mt-0">
            Creative Technologist
          </h2>
          <p class="md:max-w-[60%] pt-3 text-base">
            ${User.description}
          </p>
        </div>
        <div class="mt-16 mb-16">
          <a
            href=""
            class="inline-block rounded-lg bg-red-500 p-4 text-white font-bold  hover:underline"
          >
            Dowload Resume</a
          >
        </div>
      </div>
      <div class="md:col-span-1 order-1 md:order-2">
        <img
          src="${User.img}"
          alt=""
          class=" w-[70%] mx-auto md:ml-auto md:mr-0"
        />
      </div>
  </div>
    `;
  }

  // Return
  return result;
}
render("information", showUser(userNamelist));

// RecentPost
// Khai báo hàm showPost
function showPost(Posts) {
  // Kiểm tra
  if (!Array.isArray(postList) || postList.length == 0) return [];

  // Xử lý
  let result = "";
  for (let i = 0; i < Posts.length; i++) {
    const post = Posts[i];
    result += `
    <div class="post border rounded border-white bg-white px-5 py-8"> 
        <div class="mb-4">
          <a href="/detailpost.html?id=${post.id}" class="text-4xl font-bold text-[#21243D] hover:underline">
          ${post.name}
          </a>
        </div>
        <div class="mb-4 text-[#21243D]"> 
          <span class="mr-2">${post.date}</span>|
          <span class="ml-2 ">${post.tag}</span>
        </div>
         <p class="text-[#21243D]">${post.description}</p>
    </div>
    
    `;
  }

  //Return
  return result;
}
render("Recent_post", showPost(postList));

function showWork(works) {
  if (!Array.isArray(worksList) || worksList.length == 0) return [];
  let result = "";
  for (let i = 0; i < worksList.length; i++) {
    const work = worksList[i];
    result += `
    <div class="grid md:grid-cols-[246px,auto] gap-8 border-b-4 border-[#E0E0E0] py-8">
    <div>
      <a href="./Workdetail.htmml?id=${work.id}"><img src = "${work.img} width="246px" height="246px" class="rounded w-full""></a>
      />
    </div>
    <div>
      <h3>
        <a href="./Workdetail.htmml?id=${work.id}" class="font-bold text-4xl">${work.name}</a>
      </h3>
      <div class="flex space-x-4 items-center py-4">
        <span
          class="inline-block bg-[#142850] px-4 py-1 rounded-full font-bold text-white"
          >${work.year}</span
        >
        <span class="text-[#8695A4]">Dashboard</span>
      </div>
      <div class="text-[#21243D]">
        <p>
          ${work.description}
        </p>
      </div>
    </div>
  </div>
    `;
  }
}
