"use client";

import { Button } from "@/shared/button";
import { InputField } from "@/shared/input-field";
import { Link } from "@/shared/link";

export default function Home() {
  return (
    <>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>
    </>
  );
}
