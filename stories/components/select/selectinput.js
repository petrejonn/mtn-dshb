import "../../../src/styles/output.css";

export function createSelect({
  primary = false,
  size,
  backgroundColor = "white",
  label,
  onChange,
}) {
  const sel = `
    <div class="story-wrap">
      <label></label>
      <div class="storybook-form">
        <Input type="text"  placeholder="eg.Johnrouter" value='WPA2(AES) - PSK' />
        <select>
          <option selected></option>
          <option> WPA(AES) - PSK</option>
          <option> WPA2(AES) - PSK</option>
        </select>
      </div>
    </div>
  `;
  return sel;
}
