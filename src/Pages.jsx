import Page from "./components/Page";
import Button from "./components/Button";
import PageHeader from "./components/PageHeader";
import { useState } from "react";
import CVgen from "./components/CVgen";

export default function Pages() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eduExperience: "",
    eduYear: "",
    eduDescription: "",
    pracExperience: "",
    pracYear: "",
    pracDescription: "",
  });
  const [savedFormData, setSavedFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eduExperience: "",
    eduYear: "",
    eduDescription: "",
    pracExperience: "",
    pracYear: "",
    pracDescription: "",
  });

  function handleContactSubmit(e) {
    e.preventDefault;
    setSavedFormData(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="grid grid-cols-2 ">
      <form action={handleContactSubmit}>
        <PageHeader title="Contact information" />
        <Page
          name="firstName"
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Page
          name="lastName"
          type="text"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Page
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Page
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Button title="Insert" />
        <PageHeader title="Experiences" />
        <Page
          name="eduExperience"
          type="text"
          placeholder="Education / Course"
          value={formData.eduExperience}
          onChange={handleChange}
        />
        <Page
          name="eduYear"
          type="text"
          placeholder="Year"
          value={formData.eduYear}
          onChange={handleChange}
        />
        <Page
          name="eduDescription"
          type="text"
          placeholder="Small description"
          value={formData.eduDescription}
          onChange={handleChange}
        />
        <Button title="Insert" submitFunction="submit" />
        <PageHeader title="Pratical" />
        <Page
          name="pracExperience"
          type="text"
          placeholder="Experience"
          value={formData.pracExperience}
          onChange={handleChange}
        />
        <Page
          name="pracYear"
          type="text"
          placeholder="Year"
          value={formData.pracYear}
          onChange={handleChange}
        />
        <Page
          name="pracDescription"
          type="text"
          placeholder="Small description"
          value={formData.pracDescription}
          onChange={handleChange}
        />
        <Button title="Insert" />
      </form>
      <div className="bg-amber-100/20 h-full">
        <CVgen formData={savedFormData} />
      </div>
    </div>
  );
}
