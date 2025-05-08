// Diese Seite dient NUR dazu, dass Netlify das Bewerbungsformular erkennt.
// Sie wird nicht verlinkt und ist für Besucher unsichtbar.
export default function NetlifyFormDetect() {
  return (
    <div style={{ display: "none" }}>
      <form name="bewerbung" data-netlify="true" method="POST">
        <input type="hidden" name="form-name" value="bewerbung" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="tel" />
        <input type="file" name="file" />
        <input type="checkbox" name="datenschutz" />
      </form>
    </div>
  );
}
