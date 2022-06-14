import { render } from "./common";
import { blogPost } from "./data";

function showBlog(Blogs){
    if (!Array.isArray(blogPost) || blogPost.length == 0) return [];
    result = "";
    for(let i = 0 ; i < blogPost.length ; i ++){
        const blog = blogPost[i];
        result +=`
            <div class="grid md:grid-cols-2 gap-8">
                <div class="md:col-span-2 border-b-2 py-4">
                    <a href = "/Blog.html?id=${blog.id}"><h2 class="font-bold">${blog.name}/h2></a>
                </div>
                <div class="flex space-x-4 text-[60%] md:text-[70%]">
                    <span>${blog.tag}</span>
                    <span> | </span>  
                    <span class="inline-block text-[#8695A4]">${blog.date}</span>  
                </div>
                <div>
                <p>
                  ${blog.description}
                </p>
              </div>
            </div>
            
        `;  
    }
    return result;
}
render("blog",showBlog(blogPost));