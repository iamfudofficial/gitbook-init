// Diese Komponente sorgt dafür, dass Netlify das Bewerbungsformular erkennt
export default function NetlifyDummyForm() {
  return (
    <form name="bewerbung" data-netlify="true" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="tel" />
      <input type="file" name="file" />
      <input type="checkbox" name="datenschutz" />
    </form>
  );
}
