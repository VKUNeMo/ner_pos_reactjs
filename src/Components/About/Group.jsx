import React from "react";
import Member from "./Member";
function Group(){
    const members = [
        {
            name:"Quoc Dung",
            role:"member",
        },
        {
            name: "Quoc Dung",
            role: "member",
        },
        {
            name: "Quoc Dung",
            role: "member",
        },
      
    ]
    return(
        <>
            <div class="container mt-12 mx-auto md:px-6 h-full">
                <section class="mb-32 text-center">
                    <h2 class="mb-32 text-3xl font-bold">
                        Meet the <u class="text-primary dark:text-primary-400">team</u>
                    </h2>

                    <div class="grid gap-x-4 gap-y-16 grid-cols-3 grid-rows-2 lg:gap-x-12 h-full">
                      {
                        members.map(function(member){
                            return(
                                <>
                                <Member name={member.name} role={member.role}></Member>
                                </>
                            )
                        })
                      }  

                      
                    </div>
                </section>
            </div>
        </>
    )
}
export default Group