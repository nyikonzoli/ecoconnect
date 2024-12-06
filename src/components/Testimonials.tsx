import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <h2 className="text-center w-full my-4 mb-12 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Meet the team
      </h2>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-8 rounded-2xl  dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              I graduated in <Mark>Design and Art Management</Mark> with a specialization in curating.
              Currently, I am continuing my studies and working as a curatorial assistant.
              Additionally, I am an intern at Budapest Metropolitan University, where I am involved in education, teaching, and <Mark>project management</Mark>.
            </p>

            <Avatar
              image={"/img/people/reka.png"}
              name="Réka Vörös"
              title="Founder"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-8 rounded-2xl  dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              I have been engaged in <Mark>business development</Mark>and
              company building in the IT sector since 2004, gaining extensive
              experience in this field.
            </p>

            <Avatar
              image={"/img/people/czuczor.jpg"}
              name="Gábor Czuczor"
              title="Co-founder"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-8 rounded-2xl  dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image={"/img/people/czuczor.jpg"}
              name="Gábor Tóth"
              title="Co-founder"
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-8 rounded-2xl  dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              I'm a third year computer engeneering student with a few years of
              experience in IT and I also have a small <Mark>web agency</Mark>{" "}
              which I do with a couple of friends.
            </p>

            <Avatar
              image={"/img/people/zoli.png"}
              name="Zoltán Ferenc"
              title="Co-founder"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="rounded-full">
        <Image
          src={props.image}
          width="60"
          height="60"
          alt="Avatar"
          className="rounded-full w-[60px] h-[60px] object-cover"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-primary bg-primary/10 rounded-md bg-primary/10 ring-4 ring-primary/10">
        {props.children}
      </mark>{" "}
    </>
  );
}
