export default function CVGen({ formData }) {
  console.log(formData);

  return (
    <div className="p-5">
      <div>
        <h1 className="text-3xl flex justify-center items-center">
          Generated CV{" "}
        </h1>
      </div>
      <div>
        <h2 className="text-2xl ">Contact information</h2>
        <ul className="mt-2">
          <li>First name: {formData.firstName} </li>
          <li>Last name: {formData.lastName}</li>
          <li>Email:{formData.email} </li>
          <li>Phone: {formData.phone}</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mt-10">Contact Experience</h2>
        <ul className="mt-2">
          <li>Education / Course: {formData.eduExperience}</li>
          <li>Year: {formData.eduYear}</li>
          <li>Small description: {formData.eduDescription}</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mt-10">Practical Experience</h2>
        <ul className="mt-2">
          <li>Pratical experience: {formData.pracExperience}</li>
          <li>Year: {formData.pracYear}</li>
          <li>Small description: {formData.pracDescription}</li>
        </ul>
      </div>
    </div>
  );
}
