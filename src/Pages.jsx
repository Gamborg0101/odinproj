import Page from "./components/Page";
import Button from "./components/Button";
import PageHeader from "./components/PageHeader";
import { useState } from "react";

export default function Pages() {
  const [formData, setFormData] = useState();

  return (
    <div className="grid grid-cols-2">
      <form action="">
        <PageHeader title="Contact information" />
        <Page type="text" placeholder="First name" />
        <Page type="text" placeholder="Last name" />
        <Page type="email" placeholder="Email" />
        <Page type="tel" placeholder="Phone" />
        <Button title="Insert" />
        <PageHeader title="Experiences" />
        <Page type="text" placeholder="Education / Course" />
        <Page type="text" placeholder="Year" />
        <Page type="email" placeholder="Small description" />
        <Button title="Insert" />
        <PageHeader title="Pratical" />
        <Page type="text" placeholder="Experience" />
        <Page type="text" placeholder="Year" />
        <Page type="email" placeholder="Small description" />
        <Button title="Insert" />
      </form>
    </div>
  );
}
