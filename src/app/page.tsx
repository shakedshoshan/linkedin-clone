import PostForm from "@/components/PostForm";
import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        <UserInfo />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <PostForm />

      </section>

      <section>
        
      </section>
      
        
    </div>
  );
}
