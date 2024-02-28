import "../../../src/styles/output.css";

export function createInput({
  primary = false,
  size,
  backgroundColor = "white",
  label,
  onChange,
}) {
  const inp = `
  <div class='story-wrap'>
    <label></label>
    <input 
    type='text' 
    class='storybook-form'
    placeholder="eg.Johnrouter" 
    >
</div>`;
  return inp;
}
