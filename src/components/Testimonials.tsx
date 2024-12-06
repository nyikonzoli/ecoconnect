import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-8 rounded-2xl  dark:bg-trueGray-800">
            <p className="text-lg leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
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
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
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
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
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
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
